export class Graph {
  constructor(isDirected = false) {
    this.adjacencyList = new Map();
    this.isDirected = isDirected;
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList.has(vertex1)) this.addVertex(vertex1);
    if (!this.adjacencyList.has(vertex2)) this.addVertex(vertex2);

    this.adjacencyList.get(vertex1).push(vertex2);
    if (!this.isDirected) {
      this.adjacencyList.get(vertex2).push(vertex1);
    }
  }

  bfs(startVertex) {
    const visited = new Set();
    const queue = [startVertex];
    const result = [];

    visited.add(startVertex);

    while (queue.length) {
      const currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList.get(currentVertex).forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      });
    }

    return result;
  }

  bfsWithPaths(startVertex) {
    const visited = new Set();
    const paths = [];
    const queue = [{ vertex: startVertex, path: [startVertex] }];

    visited.add(startVertex);

    while (queue.length) {
      const { vertex, path } = queue.shift();

      this.adjacencyList.get(vertex).forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          const newPath = [...path, neighbor];
          paths.push(newPath);
          queue.push({ vertex: neighbor, path: newPath });
        }
      });
    }

    return paths;
  }

  dfsWithPaths(startVertex) {
    const visited = new Set();
    const paths = [];

    const dfsHelper = (vertex, currentPath) => {
      visited.add(vertex);

      this.adjacencyList.get(vertex).forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          const newPath = [...currentPath, neighbor];
          paths.push(newPath);
          dfsHelper(neighbor, newPath);
        }
      });
    };

    dfsHelper(startVertex, [startVertex]);
    return paths;
  }

  dfs(startVertex) {
    const visited = new Set();
    const result = [];

    const dfsHelper = (vertex) => {
      visited.add(vertex);
      result.push(vertex);

      this.adjacencyList.get(vertex).forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          dfsHelper(neighbor);
        }
      });
    };

    dfsHelper(startVertex);
    return result;
  }

  pathsToMermaidSyntax(paths, traversalType = "BFS") {
    const lines = [`graph TD`];
    lines.push(`    %% ${traversalType} Traversal Paths from Start Node`);

    // Add styling for the start node
    const startVertex = paths[0]?.[0];
    if (startVertex) {
      lines.push(`    style ${startVertex} fill:#6fa, stroke:#3a3`);
    }

    // Generate path connections with sequence numbers
    paths.forEach((path, pathIndex) => {
      for (let i = 0; i < path.length - 1; i++) {
        const from = path[i].replace(/\s+/g, "_");
        const to = path[i + 1].replace(/\s+/g, "_");
        lines.push(`    ${from} -->|${pathIndex + 1}| ${to}`);
      }
    });

    return lines.join("\n");
  }

  toMermaidSyntax() {
    const lines = ["graph TD"];

    this.adjacencyList.forEach((neighbors, vertex) => {
      neighbors.forEach((neighbor) => {
        // Replace spaces with underscores and escape special characters
        const safeVertex = vertex
          .replace(/\s+/g, "_")
          .replace(/[^a-zA-Z0-9_]/g, "");
        const safeNeighbor = neighbor
          .replace(/\s+/g, "_")
          .replace(/[^a-zA-Z0-9_]/g, "");
        lines.push(
          `    ${safeVertex}${
            this.isDirected ? " -->" : " ---"
          } ${safeNeighbor}`
        );
      });
    });

    return lines.join("\n");
  }
}
