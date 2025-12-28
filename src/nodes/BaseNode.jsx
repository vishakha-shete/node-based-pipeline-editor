function BaseNode({ title, children }) {
    return (
      <div
        style={{
          border: "1px solid #e7e7eb",
          borderRadius: "8px",
          padding: "12px",
          backgroundColor: "#ffffff",
          minWidth: "200px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
          fontFamily: "Inter, sans-serif"
        }}
      >
        <div
          style={{
            fontWeight: 900,
            marginBottom: "8px",
            borderBottom: "1px solid #f1f1f1",
            paddingBottom: "4px"
          }}
        >
          {title}
        </div>
  
        {children}
      </div>
    );
  }
  
  export default BaseNode;
  