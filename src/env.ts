const { SPICY_API_URL = "http://localhost:3000" } = process.env;

if (!SPICY_API_URL) throw new Error(`Variable 'SPICY_API_URL' must be defined!`);

export { SPICY_API_URL };
