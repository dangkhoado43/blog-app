import "dotenv/config";

const API_BASE_PROTOCOL = process.env.API_BASE_PROTOCOL;
const API_BASE_HOST = process.env.API_BASE_HOST;
const API_BASE_PORT = process.env.API_BASE_PORT;

export const API_BASE_URL = `${API_BASE_PROTOCOL}://${API_BASE_HOST}:${API_BASE_PORT}`;

const BASE_PATH = process.env.API_BASE_PATH;

// AUTH PATH
const AUTH_ROUTE = process.env.AUTH_ROUTE;
export const AUTH_PATH = `${BASE_PATH}${AUTH_ROUTE}`;

// POST PATH
const POST_ROUTE = process.env.POSTS_ROUTE;
export const POST_PATH = `${BASE_PATH}${POST_ROUTE}`;

// USER PATH
const USER_ROUTE = process.env.USERS_ROUTE;
export const USER_PATH = `${BASE_PATH}${USER_ROUTE}`;
