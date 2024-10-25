---
sidebar_position: 1
---

# Vertex

### Properties

```yaml
id: Any (required)
data: Any (optional payload, defaults to null)
```

#### Constructor

```yaml
constructor(id, data = null)
Input:
    - id: required identifier (any type but must be unique within a graph)
    - data: optional payload data
Output: new Vertex instance
Process:
    1. Validate id is not null/undefined
    2. Initialize instance properties:
        - Set this.id = id
        - Set this.data = data
    3. Return initialized vertex instance
Throws:
    - InvalidArgumentException if id is null/undefined
```

### Methods

#### getData()

```yaml
getData()
Input: none
Output: stored data
Process:
    1. Return stored payload data
```

#### getId()

```yaml
getId()
Input: none
Output: stored id
Process:
    1. Return stored payload id
```

### Usage

```yaml
// Create vertices with different types of IDs
v1 = new Vertex(1)                    // Numeric ID
v2 = new Vertex("user_123")           // String ID
v3 = new Vertex({x: 0, y: 0})         // Object as ID
v4 = new Vertex("D", {color: "red"})  // With additional data

// Invalid creation - will throw
v_invalid = new Vertex(null)  // Throws InvalidArgumentException

// Access vertex properties
id = v1.getId()         // Returns 1
data = v4.getData()     // Returns {color: "red"}
```
