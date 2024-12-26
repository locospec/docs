---
sidebar_position: 2
---

# Graph (Adjacency List)

## Properties

```yaml
vertices: Map<VertexId, Vertex>
adjacencyList: Map<VertexId, Array<Edge>>
directed: boolean
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

### hasEdge()

```yaml
hasEdge(sourceId, targetId)
Input:
    - sourceId: identifier of source vertex
    - targetId: identifier of target vertex
Output: boolean
Process:
    1. Check if sourceId exists in adjacencyList
    2. If it exists, iterate through edges in adjacencyList[sourceId]
    3. Return true if any edge's target matches targetId
    4. Return false otherwise
```

### addEdge()

```yaml
addEdge(edge)
Input: Edge instance
Output: void
Process:
    1. Validate edge is valid Edge instance
    2. Verify both source and target vertices exist in graph
    3. Get source and target IDs from edge
    4. Check if edge already exists using hasEdge(sourceId, targetId)
    5. If edge doesn't exist:
       - Add edge to adjacencyList[source.id]
    6. If not directed and reverse edge doesn't exist:
       - Create reverse edge
       - Add reverse edge to adjacencyList[target.id]
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
graph.addVertex(v1)
graph.addVertex(v2)

// Add edge
e1 = new Edge(v1, v2, "CONNECTS")
graph.addEdge(e1)  // Adds edge and creates reverse edge for undirected graph

// Try to add duplicate edge
e2 = new Edge(v1, v2, "CONNECTS")
graph.addEdge(e2)  // Edge not added since it already exists

// Check if edge exists
hasEdge = graph.hasEdge(1, 2)  // Returns true
hasEdge = graph.hasEdge(2, 1)  // Returns true (undirected graph)

// Resulting adjacencyList structure (undirected):
// {
//   1: [Edge(1->2)],
//   2: [Edge(2->1)]
// }
```

RS
Usually in database operations, we do two kinds:

Expansion: Fetch a model, and fetch it's related models also -> During this we explore what can we reach from our data model, and then what else can reach from it's children. In some way it's uni-directional. I want that graph.
Filtering: We want to filter models by relationships, in this case we need to understand how to reach the current model from the relation model.
In a way you can look at it like this:

Expansion - We want to from source model what all target models can be reached and all possible paths
Filteration - We want to know what all target model can reach source model from what all edges
