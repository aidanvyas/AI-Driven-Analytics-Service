exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*", // Allows any domain to access the resource
            "Access-Control-Allow-Headers": "Content-Type", // Allows only the Content-Type header
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET" // Allows only OPTIONS, POST, and GET methods
        },
        body: JSON.stringify('Hello from your AI-Driven Analytics Service!'),
    };
    return response;
};
