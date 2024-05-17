export const PORT = process.env.PORT || 3000;

export const database = {
    connectionLimit: 10,
    host: process.env.DATABASE_HOST || "localhost",
    user: process.env.DATABASE_USER || "root",
    password: process.env.DATABASE_PASSWORD || "2102",
    database: process.env.DATABASE_NAME || "prueba",
    port: process.env.DATABASE_PORT || 3306
};