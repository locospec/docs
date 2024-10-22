---
slug: using-graph-data-structures-algorithms
title: Using Graph Data Structures and Algorithms
authors: [rjvim]
tags: [data-structures, algorithms]
draft: true
date: 2024-10-22
---

Developing web and mobile apps doesn't force engineering or product teams to reach out of typical Data Structures and Algorithms. But, everything which has a "logical flow" (workflow) can be represented as a State Machine. Before we delve into State Machines, we explore Graphs as a Data Structure, and build a State Machine as a followup.

<!-- truncate -->

### Definition

Standard mathematical notation for a graph **G** is **(V,E)**,where:

- V represents the set of vertices (also called nodes)
- E represents the set of edges (connections between vertices)

For example, in a simple graph representing friendships:

- V might be `{Alice, Bob, Carol, David}`
- E might be `{(Alice,Bob), (Bob,Carol), (Carol,David)}`

It's usually the norm to represent the graph as an adjancency list (as opposed to a matrix). We can take same example as above and represent it as:

```python
graph = {
    'Alice': ['Bob'],           # Alice is friends with Bob
    'Bob': ['Alice', 'Carol'],  # Bob is friends with Alice and Carol
    'Carol': ['Bob', 'David'],  # Carol is friends with Bob and David
    'David': ['Carol']          # David is friends with Carol
}
```

### Usecase

In a typical application development,

Let's try using PHP, first create "classes" for Vertex, Edge, and then objects. And later we will use a Vertex, build a relationship graph from there, and then use mermaidjs to draw it.
