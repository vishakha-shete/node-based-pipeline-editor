// submit.js

import { useStore } from "./store";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nodes, edges }),
      });

      const data = await response.json();

      alert(
        `Nodes: ${data.num_nodes}\nEdges: ${data.num_edges}\nIs DAG: ${data.is_dag}`
      );
    } catch (error) {
      alert("Error submitting pipeline");
      console.error(error);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "12px" }}>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
