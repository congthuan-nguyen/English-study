import { useCallback, useState } from "react";
import ReactFlow, {
  Controls,
  Background,
  applyEdgeChanges,
  applyNodeChanges,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";
const styleNodes = {
  border: "1px solid #d9e7cb",
  backgroundColor: "#d9e7cb",
  borderRadius: "10px",
  width: "auto",
  maxWidth: "75vh",
  overflowWrap: "break-word",
};
const data = [
  { value: "Comfort", id: "1" },
  { value: "noun", id: "11" },
  { value: "adjective", id: "12" },
  { value: "adverb", id: "13" },
  { value: "Comfort", id: "111" },
  { value: "Comforter", id: "112" },
  { value: "Comfortable", id: "121" },
  { value: "Comforting", id: "122" },
  { value: "Comfortably", id: "131" },
  { value: "An ủi", id: "1111" },
  { value: "Người an ủi", id: "1121" },
  { value: "Thoải mái, dễ chịu", id: "1211" },
  { value: "Mang lại sự an ủi, làm dịu", id: "1221" },
  { value: "Một cách thoải mái, dễ chịu", id: "1311" },
];

for (var ele in data) {
}

const initialNodes = [];

const initialEdges = [];

// Hàm để thêm node
const addNodeN = (id, label, x, y) => {
  initialNodes.push({
    id,
    data: { label },
    position: { x, y },
    style: styleNodes,
    sourcePosition: "right",
    targetPosition: "left",
  });
};

// Hàm để thêm cạnh
const addEdgeN = (source, target) => {
  initialEdges.push({
    id: `e${source}-${target}`,
    source,
    target,
    type: "smoothstep",
  });
};

let xOffset = 0;
const xSpacing = 200;
const ySpacing = 100;
const levels = {};

data.forEach((item) => {
  const level = item.id.length;
  if (!levels[level]) {
    levels[level] = [];
  }
  levels[level].push(item);
});

data.forEach((item) => {
  const level = item.id.length;
  if (!levels[level]) {
    levels[level] = [];
  }
  levels[level].push(item);
});
console.log(levels);

Object.keys(levels)
  .sort((a, b) => a - b)
  .forEach((level, index) => {
    const items = levels[level];
    const x = xOffset + index * xSpacing;
    const startY = -((items.length - 1) * ySpacing) / 2;

    items.forEach((item, i) => {
      const y = startY + i * ySpacing;
      addNodeN(item.id, item.value, x, y);
    });
  });
// Tạo edges từ dữ liệu id
data.forEach((item) => {
  const parts = item.id;
  if (parts.length > 1) {
    const parentId = parts.slice(0, -1);
    addEdgeN(parentId, item.id);
  }
});

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback((changes) => {
    setNodes((nds) => applyNodeChanges(changes, nds));
  }, []);
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        attributionPosition="bottom-left"
      >
        <Background color="#fff" />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Flow;
