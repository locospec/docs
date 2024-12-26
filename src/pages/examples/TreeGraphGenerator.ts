// Types for our graph structures
type AdjacencyList = {
  [key: string]: string[];
};

type TreeNode = {
  id: string;
  children: TreeNode[];
};

class TreeGraphGenerator {
  static generateBFSTreeAllPaths(
    adjacencyList: AdjacencyList,
    startVertex: string
  ): TreeNode {
    // Queue now tracks the path to each vertex
    const queue: {
      vertex: string;
      node: TreeNode;
      path: Set<string>;
    }[] = [];

    // Create root node
    const root: TreeNode = { id: startVertex, children: [] };
    queue.push({
      vertex: startVertex,
      node: root,
      path: new Set([startVertex]),
    });

    while (queue.length > 0) {
      const { vertex, node, path } = queue.shift()!;

      // Process all neighbors of current vertex
      const neighbors = adjacencyList[vertex] || [];
      for (const neighbor of neighbors) {
        // Only avoid cycles in current path
        if (!path.has(neighbor)) {
          const childNode: TreeNode = { id: neighbor, children: [] };
          node.children.push(childNode);

          // Create new path for this branch
          const newPath = new Set(path);
          newPath.add(neighbor);

          queue.push({
            vertex: neighbor,
            node: childNode,
            path: newPath,
          });
        }
      }
    }

    return root;
  }

  // Convert adjacency list to tree structure using BFS
  static generateBFSTree(
    adjacencyList: AdjacencyList,
    startVertex: string
  ): TreeNode {
    const visited = new Set<string>();
    const queue: { vertex: string; node: TreeNode }[] = [];

    // Create root node
    const root: TreeNode = { id: startVertex, children: [] };
    queue.push({ vertex: startVertex, node: root });
    visited.add(startVertex);

    while (queue.length > 0) {
      const { vertex, node } = queue.shift()!;

      // Process all neighbors of current vertex
      const neighbors = adjacencyList[vertex] || [];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          const childNode: TreeNode = { id: neighbor, children: [] };
          node.children.push(childNode);
          queue.push({ vertex: neighbor, node: childNode });
        }
      }
    }

    return root;
  }

  static generateDFSTree(
    adjacencyList: AdjacencyList,
    startVertex: string
  ): TreeNode {
    const pathVisited = new Set<string>(); // Track current path

    function dfsHelper(vertex: string, currentPath: Set<string>): TreeNode {
      const node: TreeNode = { id: vertex, children: [] };
      currentPath.add(vertex);

      // Process all neighbors
      const neighbors = adjacencyList[vertex] || [];
      for (const neighbor of neighbors) {
        // Only avoid cycles in current path
        if (!currentPath.has(neighbor)) {
          const childNode = dfsHelper(neighbor, new Set(currentPath));
          node.children.push(childNode);
        }
      }

      currentPath.delete(vertex); // Backtrack
      return node;
    }

    return dfsHelper(startVertex, new Set());
  }

  // Convert tree structure to Mermaid syntax
  static treeToMermaidSyntax(root: TreeNode): string {
    const lines = ["graph TD"];
    const visited = new Set<string>();

    function traverse(node: TreeNode) {
      if (visited.has(node.id)) return;
      visited.add(node.id);

      // Add connections for each child
      node.children.forEach((child) => {
        lines.push(`    ${node.id} --> ${child.id}`);
        traverse(child);
      });
    }

    traverse(root);
    return lines.join("\n");
  }
}

export default TreeGraphGenerator;
