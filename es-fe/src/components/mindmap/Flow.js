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
const initialNodes = [
  {
    id: "1",
    data: { label: "Từ vựng" },
    position: { x: 0, y: 100 },
    style: styleNodes,
    sourcePosition: "right",
    type: "input",
  },
  {
    id: "2",
    data: { label: "Phiên âm" },
    style: styleNodes,
    position: { x: 100, y: 100 },
    sourcePosition: "right",
    targetPosition: "left",
  },
  {
    id: "3.1",
    data: { label: "Loại từ 1" },
    style: styleNodes,
    position: { x: 200, y: 0 },
    sourcePosition: "right",
    targetPosition: "left",
  },
  {
    id: "3.2",
    data: { label: "Loại từ 2" },
    style: styleNodes,
    position: { x: 200, y: 100 },
    sourcePosition: "right",
    targetPosition: "left",
  },
  {
    id: "4.1",
    data: { label: "Ngữ nghĩa 1" },
    style: styleNodes,
    position: { x: 300, y: -100 },
    sourcePosition: "right",
    targetPosition: "left",
  },
  {
    id: "4.2",
    data: { label: "Ngữ nghĩa 2" },
    style: styleNodes,
    position: { x: 300, y: 0 },
    sourcePosition: "right",
    targetPosition: "left",
  },
  {
    id: "4.3",
    data: { label: "Ngữ nghĩa 3" },
    style: styleNodes,
    position: { x: 300, y: 100 },
    sourcePosition: "right",
    targetPosition: "left",
  },
  {
    id: "5.1",
    data: { label: "Ví dụ 1" },
    style: styleNodes,
    position: { x: 400, y: -100 },
    sourcePosition: "right",
    targetPosition: "left",
  },
  {
    id: "5.2",
    data: { label: "Ví dụ 2" },
    style: styleNodes,
    position: { x: 400, y: 100 },
    sourcePosition: "right",
    targetPosition: "left",
  },
];

const initialEdges = [
  {
    id: "connec1",
    source: "1",
    target: "2",
  },
  {
    id: "connec2.1",
    source: "2",
    target: "3.1",
  },
  {
    id: "connec2.2",
    source: "2",
    target: "3.2",
  },
  {
    id: "connec3.1",
    source: "3.1",
    target: "4.1",
  },
  {
    id: "connec3.2",
    source: "3.1",
    target: "4.2",
  },

  {
    id: "connec3.3",
    source: "3.2",
    target: "4.3",
  },
  {
    id: "connec4.1",
    source: "4.1",
    target: "5.1",
  },
  {
    id: "connec4.2",
    source: "4.3",
    target: "5.2",
  },
];

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
    <div style={{ height: "30vh", width: "100%" }}>
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
