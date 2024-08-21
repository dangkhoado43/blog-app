import "dotenv/config";

const FRONTEND_PROTOCOL = process.env.FRONTEND_PROTOCOL;
const FRONTEND_HOST = process.env.FRONTEND_HOST;
const FRONTEND_PORT = process.env.FRONTEND_PORT;

export const FRONTEND_URL = `${FRONTEND_PROTOCOL}://${FRONTEND_HOST}:${FRONTEND_PORT}`;
