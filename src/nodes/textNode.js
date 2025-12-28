// textNode.js
import BaseNode from "./BaseNode";
import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode title="Text Node">
      <div>
        <label>
          Text:
          <input 
            type="text" 
            value={currText} 
            onChange={handleTextChange} 
          />
        </label>
      </div>

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />
    </BaseNode>
  );
};
