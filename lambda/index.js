exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from your AI-Driven Analytics Service!'),
    };
    return response;
};
