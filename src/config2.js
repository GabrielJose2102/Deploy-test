export const PORT = process.env.PORT || 3000;

export const database = {
    connectionLimit: 10,
    host: process.env.MYSQLHOST || "localhost",
    user: process.env.MYSQLUSER || "root",
    password: process.env.MYSQLPASSWORD || "2102",
    database: process.env.MYSQLDATABASE || "prueba",
    port: process.env.MYSQLPORT || 3306,
    url: process.env.MYSQL_URL,
    ulr_privada: process.env.MYSQL_PRIVATE_URL
};