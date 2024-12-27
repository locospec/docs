"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { motion, useTransform, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import { useColorMode } from "@docusaurus/theme-common";

let paddingMap = { none: "", md: "p-2" };

const getLadleUrl = (story) => {
  const isDevelopment = process.env.NODE_ENV === "development";
  if (isDevelopment) {
    return `http://localhost:61000/ladle?story=${story}&mode=preview`;
  }
  return `/ladle?mode=preview&story=${story}`;
};

type WellProps = {
  as?: React.ElementType;
  story: string;
  height: number;
  iframePointerEvents: any;
  style?: React.CSSProperties;
  padding?: string;
  p?: string;
  className?: string;
  containerClassName?: string;
  html?: string;
  children?: React.ReactNode;
  hint?: string;
  hintClassName?: string;
  lightOnly?: boolean;
};

function Well({
  as: Component = "div",
  story,
  height,
  iframePointerEvents,
  style,
  padding,
  p = "md",
  className,
  containerClassName,
  html,
  children,
  hint,
  hintClassName,
  lightOnly = false,
}: WellProps) {
  let paddingKey = padding ?? p;
  let paddingClassName = paddingMap[paddingKey];
  const iframeUrl = getLadleUrl(story);
  const { colorMode, setColorMode } = useColorMode();

  useEffect(() => {
    const updateIframeTheme = (theme) => {
      const iframe = document.querySelector("iframe");
      if (iframe && iframe.contentDocument) {
        iframe.contentDocument.documentElement.setAttribute(
          "data-theme",
          theme
        );
      }
    };

    updateIframeTheme(colorMode);
  }, [colorMode]);

  if (paddingClassName === undefined) {
    throw Error(`Invalid padding value: ${JSON.stringify(paddingKey)}`);
  }

  return (
    <div className={containerClassName}>
      <Component
        style={style}
        className={clsx(
          "not-prose relative bg-slate-50 rounded-md overflow-hidden",
          !lightOnly && "dark:bg-slate-800/25"
        )}
      >
        <div
          style={{ backgroundPosition: "10px 10px" }}
          className={clsx(
            "absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]",
            !lightOnly &&
              "dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
          )}
        />
        <div
          className={clsx(
            "relative border rounded-md border-gray-200 border-dashed dark:border-gray-700 !overflow-hidden",
            paddingClassName,
            className
          )}
        >
          <motion.iframe
            id="my-iframe"
            className="w-full"
            src={iframeUrl}
            height={height}
            allow="cross-origin-isolated"
            style={{ pointerEvents: iframePointerEvents }}
          />
        </div>

        <div
          className={clsx(
            "absolute inset-0 pointer-events-none border border-black/5",
            !lightOnly && "dark:border-white/5"
          )}
        />
      </Component>
    </div>
  );
}

const ResizableLadlePreview = ({ story, initialWidth = 800, height = 720 }) => {
  let containerRef = useRef();
  let x = useMotionValue(0);
  let constraintsRef = useRef();
  let handleRef = useRef<HTMLDivElement>(null);
  let iframePointerEvents = useMotionValue("auto");

  useEffect(() => {
    const observer = new window.ResizeObserver(() => {
      x.set(0);
    });
    observer.observe(containerRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (handleRef.current) {
      handleRef.current.onselectstart = () => false;
    }
  }, []);

  return (
    <div ref={containerRef} className="relative twp">
      <Well
        as={motion.div}
        style={{ marginRight: useTransform(x, (x) => -x) }}
        story={story}
        height={height}
        iframePointerEvents={iframePointerEvents}
      />

      <div
        ref={constraintsRef}
        className="absolute inset-y-0 right-[-1.375rem] left-80 ml-4 pointer-events-none"
      >
        <motion.div
          ref={handleRef}
          drag="x"
          _dragX={x}
          dragMomentum={false}
          dragElastic={0}
          dragConstraints={constraintsRef}
          className="absolute right-0 inset-y-0 hidden p-3 pointer-events-auto  md:block cursor-ew-resize"
          style={{ x }}
          onDragStart={() => {
            document.documentElement.classList.add("dragging-ew");
            iframePointerEvents.set("none");
          }}
          onDragEnd={() => {
            document.documentElement.classList.remove("dragging-ew");
            iframePointerEvents.set("auto");
          }}
        >
          <div
            className="absolute top-1/2 w-1.5 h-8 bg-slate-500/60 rounded-full -translate-x-1/2 left-1/2"
            style={{
              transform: "translateX(-3px)",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ResizableLadlePreview;
