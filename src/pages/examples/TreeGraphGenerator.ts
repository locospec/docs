// Types for our graph structures
type AdjacencyList = {
  [key: string]: string[];
};

type TreeNode = {
  id: string;
  children: TreeNode[];
};

class TreeGraphGenerator {
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
    const visited = new Set<string>();

    function dfsHelper(vertex: string): TreeNode {
      visited.add(vertex);
      const node: TreeNode = { id: vertex, children: [] };

      // Process all neighbors
      const neighbors = adjacencyList[vertex] || [];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          const childNode = dfsHelper(neighbor);
          node.children.push(childNode);
        }
      }

      return node;
    }

    return dfsHelper(startVertex);
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
