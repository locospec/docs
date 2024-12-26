---
sidebar_position: 2
---

# Edge

### Properties

```yaml
source: Vertex (required)
target: Vertex (required)
type: String|null (optional, defaults to null)
data: Any (optional payload, defaults to null)
```

### Methods

#### Constructor

```yaml
constructor(source, target, type = null, data = null)
Input:
    - source: required Vertex instance representing start of edge
    - target: required Vertex instance representing end of edge
    - type: optional string identifying the type of relationship
    - data: optional payload data
Output: new Edge instance
Process:
    1. Validate inputs:
        - source must be valid Vertex instance
        - target must be valid Vertex instance
        - type, if provided, must be a string (can be empty)
    2. Initialize instance properties:
        - Set this.source = source
        - Set this.target = target
        - Set this.type = type
        - Set this.data = data
    3. Return initialized edge instance
Throws:
    - InvalidArgumentException if source or target is invalid
    - InvalidArgumentException if type is provided but not a string
```

#### getSource

```yaml
getSource()
Input: none
Output: source Vertex instance
Process:
    1. Return stored source vertex
```

#### getTarget

```yaml
getTarget()
Input: none
Output: target Vertex instance
Process:
    1. Return stored target vertex
```

#### getType

```yaml
getType()
Input: none
Output: string|null type
Process:
    1. Return stored type value
```

#### getData

```yaml
getData()
Input: none
Output: stored data
Process:
    1. Return stored payload data
```

#### setData

```yaml
setData(data)
Input: any data
Output: void
Process:
    1. Set this.data = data
```

### Usage

```yaml
// Create vertices first
v1 = new Vertex(1)
v2 = new Vertex(2)

// Create edges with different configurations
e1 = new Edge(v1, v2)                         // Basic edge without type or data
e2 = new Edge(v1, v2, "FRIEND")               // Edge with type
e3 = new Edge(v1, v2, null, {weight: 5})      // Edge with only data
e4 = new Edge(v1, v2, "FOLLOWS", {since: "2024"})  // Edge with type and data

// Invalid creation attempts - will throw
e_invalid1 = new Edge(null, v2)        // Throws InvalidArgumentException
e_invalid2 = new Edge(v1, null)        // Throws InvalidArgumentException
e_invalid3 = new Edge(v1, v2, 123)     // Throws InvalidArgumentException (type must be string or null)

// Access edge properties
source = e1.getSource()    // Returns vertex v1
target = e1.getTarget()    // Returns vertex v2
type = e2.getType()       // Returns "FRIEND"
data = e4.getData()       // Returns {since: "2024"}

// Modify data
e1.setData({strength: 5})  // Sets additional data
e1.setData(null)          // Removes additional data
```
