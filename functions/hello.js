exports.handler = async function(event) {
    // ดึงค่าจาก query string (เช่น ?name=John)
    const params = new URLSearchParams(event.queryStringParameters);
    const name = params.get("name") || "World";
  
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: `Hello, ${name}!` }),
    };
  };
  