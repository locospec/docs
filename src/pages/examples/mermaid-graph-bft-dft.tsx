import mermaid from "mermaid";
import { useEffect, useRef, useState } from "react";
import { Graph } from "./graph";
import TreeGraphGenerator from "./TreeGraphGenerator";

const GraphVisualizer = () => {
  const [graphType, setGraphType] = useState("directed");
  const [startVertex, setStartVertex] = useState("Mumbai");
  const diagramRefs = {
    fullGraph: useRef(null),
    bfsTraversal: useRef(null),
    dfsTraversal: useRef(null),
  };

  // Sample data - you can replace this with your own data
  const cities = {
    Mumbai: ["Dubai", "Singapore"],
    Dubai: ["Mumbai", "London", "Singapore"],
    London: ["Dubai", "New_York", "Singapore"],
    New_York: ["London"],
    Singapore: ["Mumbai", "Dubai", "London", "Tokyo"],
    Tokyo: ["Singapore"],
  };

  const createGraph = (isDirected) => {
    const graph = new Graph(isDirected);
    Object.entries(cities).forEach(([city, neighbors]) => {
      neighbors.forEach((neighbor) => {
        graph.addEdge(city, neighbor);
      });
    });
    return graph;
  };

  const renderMermaidDiagram = async (container, syntax) => {
    if (!container.current) return;

    try {
      // Clear the container
      container.current.innerHTML = "";

      // Create new diagram div
      const element = document.createElement("div");
      element.className = "mermaid";
      element.textContent = syntax;
      container.current.appendChild(element);

      // Render the diagram
      await mermaid.run();
    } catch (error) {
      console.error("Mermaid rendering failed:", error);
      console.log("Attempted syntax:", syntax);
    }
  };

  const renderAllDiagrams = async () => {
    // Initialize mermaid once
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "loose",
      theme: "default",
    });

    const bfsTreeRoot = TreeGraphGenerator.generateBFSTree(cities, "Mumbai");
    const bfsMermaidSyntax =
      TreeGraphGenerator.treeToMermaidSyntax(bfsTreeRoot);
    console.log(bfsMermaidSyntax);

    await renderMermaidDiagram(diagramRefs.bfsTraversal, bfsMermaidSyntax);

    const dfsTreeRoot = TreeGraphGenerator.generateDFSTree(cities, "Mumbai");
    const dfsMermaidSyntax =
      TreeGraphGenerator.treeToMermaidSyntax(dfsTreeRoot);
    console.log(dfsMermaidSyntax);

    await renderMermaidDiagram(diagramRefs.dfsTraversal, dfsMermaidSyntax);

    // const graph = createGraph(graphType === "directed");

    // Render full graph
    // const fullGraphSyntax = graph.toMermaidSyntax();
    // await renderMermaidDiagram(diagramRefs.fullGraph, fullGraphSyntax);

    // // Render BFS traversal
    // const bfs = graph.bfs(startVertex);
    // const bfsPaths = graph.bfsWithPaths(startVertex);
    // const bfsMermaid = graph.pathsToMermaidSyntax(bfsPaths, "BFS");
    // await renderMermaidDiagram(diagramRefs.bfsTraversal, bfsMermaid);

    // // Render DFS traversal
    // const dfsPaths = graph.dfsWithPaths(startVertex);
    // const dfsMermaid = graph.pathsToMermaidSyntax(dfsPaths, "DFS");
    // await renderMermaidDiagram(diagramRefs.dfsTraversal, dfsMermaid);
  };

  useEffect(() => {
    renderAllDiagrams();
  }, [graphType, startVertex]);

  const vertices = Object.keys(cities);

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Graph Visualizations</h1>

      <div className="mb-6 space-y-4">
        <div className="flex space-x-4 items-center">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Graph Type
            </label>
            <div className="space-x-4">
              <button
                className={`px-4 py-2 rounded ${
                  graphType === "directed"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setGraphType("directed")}
              >
                Directed
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  graphType === "undirected"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setGraphType("undirected")}
              >
                Undirected
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Vertex
            </label>
            <select
              value={startVertex}
              onChange={(e) => setStartVertex(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              {vertices.map((vertex) => (
                <option key={vertex} value={vertex}>
                  {vertex}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="border rounded-lg p-4 bg-white">
          <h2 className="text-lg font-semibold mb-4">Complete Graph</h2>
          <div ref={diagramRefs.fullGraph} className="overflow-auto" />
        </div>

        <div className="border rounded-lg p-4 bg-white">
          <h2 className="text-lg font-semibold mb-4">BFS Traversal</h2>
          <div ref={diagramRefs.bfsTraversal} className="overflow-auto" />
        </div>

        <div className="border rounded-lg p-4 bg-white">
          <h2 className="text-lg font-semibold mb-4">DFS Traversal</h2>
          <div ref={diagramRefs.dfsTraversal} className="overflow-auto" />
        </div>
      </div>
    </div>
  );
};

export default GraphVisualizer;
