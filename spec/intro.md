---
sidebar_position: 1
---

# Intro

Let's discover **LoCoSpec in less than 5 minutes**.

## What is LoCoSpec?

LoCoSpec stands for "Low Code Specification". No Code and Low Code solutions have gained popularity in recent times, solving the problem of rapidly developing applications without writing much code, and if possible, not writing any code at all.

Using LoCoSpec, one would still need to write code, which is why it's low-code (loco). What LoCoSpec does is streamline a "workflow" and insist on representing that workflow using JSON (We might expand it to use additional formats in the future).

An **Intent** to read certain rows from a table can be represented as a workflow:

- Authorize the user
- Build the query
- Execute the query
- Serialize the result

LoCoSpec hypothesizes that this workflow can be represented as a JSON object - and how that JSON object should be defined is what we call a **Specification**.

The Specification ultimately has to be implemented using a Programming Language (PHP, Python, Java, C#, etc.), and that's where the Open Source Community must play a crucial role. The Spec has to be readable and elegant. It should be easy to understand and maintain.

## Use-Cases

Here are several use-cases that LoCoSpec should be able to solve (Unranked):

1. Represent a Data Model & Schema in a JSON Object Format including Relationships
2. Represent a Workflow/Business Logic in a JSON Object Format (A State Machine)
3. Represent Validation Rules while performing actions like Insert, Update, Delete
4. Represent Authorization Rules
5. Write Transformation Rules and Logic which work on JSONs
6. Build Frontend Forms, Tables using Server-Driven UI
7. Build entire CRUD applications by declaring Data Models, Actions, Validation Rules, Authorization Rules, Transformation Rules, and UI in JSON

If we can represent anything logical in JSON Format and consistently implement it using any programming language, people can use it to build their applications. Then, the engine executing the Specification can be swapped out for any other engine.

## Inspirations

Many projects have aimed to solve problems using JSON as a foundation. We have studied and used some of them to understand how we can solve our problem more effectively:

- [State Machine Language](https://states-language.net/)
- [AJV](https://ajv.js.org/)
- [JQ](https://jqlang.github.io/jq/)
- [Serverless Workflow](https://serverlessworkflow.io/)
- [JSONFORMS](https://jsonforms.io/)

We don't intend to reinvent everything from scratch but rather use existing solutions effectively while keeping Developer Experience (DX) as our top priority.
