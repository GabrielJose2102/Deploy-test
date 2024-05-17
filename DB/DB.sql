CREATE DATABASE test;

CREATE TABLE usuarios(
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    usuario VARCHAR(100),
    contraseña VARCHAR(100)
);

INSERT INTO usuarios (usuario, contraseña) 
    VALUES ('Gabriel', '2102');