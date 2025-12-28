// llmNode.js

import { Handle, Position } from 'reactflow';
import BaseNode from "./BaseNode";

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode title="LLM Node">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{ top: "30%" }}
      />

      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{ top: "60%" }}
      />

      <div style={{ fontSize: "12px", color: "#555" }}>
        This is a LLM.
      </div>

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
      />
    </BaseNode>
  );
};
