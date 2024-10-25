---
sidebar_position: 2
---

# Graph (Adjacency List) Specification

## Properties

```yaml
vertices: Map<VertexId, Vertex>
adjacencyList: Map<VertexId, Array<Edge>>
```

## Constructor

```yaml
constructor(directed = false)
Input:
    - directed: boolean flag indicating if graph is directed (default: false)
Output: new Graph instance
Process:
    1. Initialize empty vertices map
    2. Initialize empty adjacency list map
    3. Set directed flag
```

## Methods

### addVertex()

```yaml
addVertex(vertex)
Input: Vertex instance
Output: void
Process:
    1. Validate vertex is valid Vertex instance
    2. Check vertex.id not already in vertices map
    3. Add vertex to vertices map
    4. Initialize empty array in adjacencyList for this vertex.id
Throws:
    - InvalidArgumentException if vertex invalid
    - DuplicateVertexException if vertex.id already exists
```

### addEdge()

```yaml
addEdge(edge)
Input: Edge instance
Output: void
Process:
    1. Validate edge is valid Edge instance
    2. Verify both source and target vertices exist in graph
    3. Add edge to adjacencyList[source.id]
    4. If not directed, also add edge to adjacencyList[target.id]
Throws:
    - InvalidArgumentException if edge invalid
    - VertexNotFoundException if either vertex not in graph
```

### getNeighbors()

```yaml
getNeighbors(vertexId)
Input: vertex identifier
Output: Array of Edges
Process:
    1. Validate vertexId exists in graph
    2. Return adjacencyList[vertexId]
Throws:
    - VertexNotFoundException if vertex not in graph
```

### hasVertex()

```yaml
hasVertex(vertexId)
Input: vertex identifier
Output: boolean
Process:
    1. Return true if vertexId in vertices map, false otherwise
```

### getVertex()

```yaml
getVertex(vertexId)
Input: vertex identifier
Output: Vertex instance or null
Process:
    1. Return vertex from vertices map or null if not found
```

## Usage

```yaml
// Create graph
graph = new Graph(directed = false)

// Add vertices
v1 = new Vertex(1)
v2 = new Vertex(2)
v3 = new Vertex(3)

graph.addVertex(v1)
graph.addVertex(v2)
graph.addVertex(v3)

// Add edges
e1 = new Edge(v1, v2, "CONNECTS")
e2 = new Edge(v2, v3, "CONNECTS")
e3 = new Edge(v1, v3, "CONNECTS")

graph.addEdge(e1)
graph.addEdge(e2)
graph.addEdge(e3)

// Get neighbors
neighbors = graph.getNeighbors(1)  // Returns edges connected to vertex 1

// Resulting adjacencyList structure (undirected):
// {
//   1: [Edge(1->2), Edge(1->3)],
//   2: [Edge(2->1), Edge(2->3)],
//   3: [Edge(3->1), Edge(3->2)]
// }
```
