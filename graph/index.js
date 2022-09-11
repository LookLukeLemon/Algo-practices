class Vertex {
    constructor(value) {
        this.value = value;
        this.edges = [];
    }

    addEdge(edge) {
        this.edges.push(edge);
    }
}

class Graph {
    constructor(vertices){
        this.vertices = vertices
    }
}

const generateGraph = () => {
    const v1 = new Vertex(2)
    const v2 = new Vertex(5)
    const v3 = new Vertex(8)
    const v4 = new Vertex(1)
    const v5 = new Vertex(4)
    const v6 = new Vertex(3)

    v1.addEdge(v2);
    v1.addEdge(v3);
    v1.addEdge(v4);

    v2.addEdge(v5);
    v3.addEdge(v6);

    return new Graph([v1,v2,v3,v4,v5,v6])
}

const bfs = (queue = []) => {
    while(queue.length !== 0){
        const vertex = queue.shift()
        console.log(vertex.value)
        queue.push(...vertex.edges)
    }
}

const dfs = (stack = []) => {
    while(stack.length !== 0) {
        const vertex = stack.pop()
        console.log(vertex.value)
        vertex.edges.map(e => {
            stack.push(e)
        })
    }
}

const solution = () => {
    const graph = generateGraph()
    const firstVertex = graph.vertices[0]

    dfs([firstVertex]);
}

solution()