SET SQL_SAFE_UPDATES = 0;

DROP DATABASE IF EXISTS DBCANTINA;
CREATE DATABASE DBCANTINA;

USE DBCANTINA;

CREATE TABLE CLIENTE (
	IDCLIENTE INT NOT NULL AUTO_INCREMENT
	, NOME VARCHAR(100)
	, SEXO CHAR(1)
	, PRIMARY KEY (IDCLIENTE)
);

CREATE TABLE PRODUTO (
	IDPRODUTO INT NOT NULL AUTO_INCREMENT
	, NOME VARCHAR(100)
	, PRECO NUMERIC(8,2)
	, CATEGORIA VARCHAR(50)
	, PRIMARY KEY (IDPRODUTO)
);

CREATE TABLE PEDIDO (
	IDPEDIDO INT NOT NULL AUTO_INCREMENT
	, IDCLIENTE INT NOT NULL
	, DTPEDIDO DATE
	, PRIMARY KEY(IDPEDIDO)
	, FOREIGN KEY (IDCLIENTE) REFERENCES CLIENTE (IDCLIENTE)
);

CREATE TABLE ITEM_PEDIDO (
	IDPEDIDO INT NOT NULL 
	, IDPRODUTO INT NOT NULL
	, QTDE INT
	, PRECO_UNITARIO NUMERIC(8,2)
	, PRIMARY KEY (IDPEDIDO, IDPRODUTO)
	, FOREIGN KEY (IDPEDIDO) REFERENCES PEDIDO (IDPEDIDO)
	, FOREIGN KEY (IDPRODUTO) REFERENCES PRODUTO (IDPRODUTO)
);

INSERT INTO CLIENTE (NOME, SEXO)VALUES('JOAO', 'M');
INSERT INTO CLIENTE (NOME, SEXO)VALUES('MARIA', 'F');
INSERT INTO CLIENTE (NOME, SEXO)VALUES('ANA', 'F');
INSERT INTO CLIENTE (NOME, SEXO)VALUES('CARLOS', 'M');
INSERT INTO CLIENTE (NOME, SEXO)VALUES('ANTONIO', 'M');

INSERT INTO PRODUTO (NOME, PRECO, CATEGORIA)VALUES('BOLO DE CHOCOLATE', 2.5, 'DOCE');
INSERT INTO PRODUTO (NOME, PRECO, CATEGORIA)VALUES('BOLO DE CENOURA', 2.5, 'DOCE');
INSERT INTO PRODUTO (NOME, PRECO, CATEGORIA)VALUES('SUCO DE LARANJA', 3.0, 'SUCO');
INSERT INTO PRODUTO (NOME, PRECO, CATEGORIA)VALUES('SUCO DE MORANGO', 4.0, 'SUCO');
INSERT INTO PRODUTO (NOME, PRECO, CATEGORIA)VALUES('MISTO QUENTE', 1.5, 'SALGADO');

INSERT INTO PEDIDO (IDCLIENTE, DTPEDIDO)VALUES(1, DATE_ADD(NOW(), INTERVAL RAND() * - 100 DAY));
INSERT INTO PEDIDO (IDCLIENTE, DTPEDIDO)VALUES(1, DATE_ADD(NOW(), INTERVAL RAND() * - 100 DAY));
INSERT INTO PEDIDO (IDCLIENTE, DTPEDIDO)VALUES(2, DATE_ADD(NOW(), INTERVAL RAND() * - 100 DAY));
INSERT INTO PEDIDO (IDCLIENTE, DTPEDIDO)VALUES(2, DATE_ADD(NOW(), INTERVAL RAND() * - 100 DAY));
INSERT INTO PEDIDO (IDCLIENTE, DTPEDIDO)VALUES(3, DATE_ADD(NOW(), INTERVAL RAND() * - 100 DAY));
INSERT INTO PEDIDO (IDCLIENTE, DTPEDIDO)VALUES(1, DATE_ADD(NOW(), INTERVAL RAND() * - 100 DAY));
INSERT INTO PEDIDO (IDCLIENTE, DTPEDIDO)VALUES(1, DATE_ADD(NOW(), INTERVAL RAND() * - 100 DAY));
INSERT INTO PEDIDO (IDCLIENTE, DTPEDIDO)VALUES(2, DATE_ADD(NOW(), INTERVAL RAND() * - 100 DAY));
INSERT INTO PEDIDO (IDCLIENTE, DTPEDIDO)VALUES(2, DATE_ADD(NOW(), INTERVAL RAND() * - 100 DAY));
INSERT INTO PEDIDO (IDCLIENTE, DTPEDIDO)VALUES(2, DATE_ADD(NOW(), INTERVAL RAND() * - 100 DAY));
INSERT INTO PEDIDO (IDCLIENTE, DTPEDIDO)VALUES(5, DATE_ADD(NOW(), INTERVAL RAND() * - 100 DAY));
INSERT INTO PEDIDO (IDCLIENTE, DTPEDIDO)VALUES(3, DATE_ADD(NOW(), INTERVAL RAND() * - 100 DAY));
INSERT INTO PEDIDO (IDCLIENTE, DTPEDIDO)VALUES(5, DATE_ADD(NOW(), INTERVAL RAND() * - 100 DAY));
INSERT INTO PEDIDO (IDCLIENTE, DTPEDIDO)VALUES(1, DATE_ADD(NOW(), INTERVAL RAND() * - 100 DAY));
INSERT INTO PEDIDO (IDCLIENTE, DTPEDIDO)VALUES(2, DATE_ADD(NOW(), INTERVAL RAND() * - 100 DAY));

INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (01, 1, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (02, 2, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (03, 3, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (01, 2, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (02, 1, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (04, 4, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (05, 5, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (06, 1, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (05, 2, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (07, 2, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (08, 3, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (11, 4, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (12, 2, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (10, 3, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (11, 2, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (09, 2, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (09, 4, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (10, 2, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (11, 5, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (12, 4, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (10, 5, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (11, 1, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (14, 2, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (15, 5, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (13, 4, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (14, 4, RAND() * 10);
INSERT INTO ITEM_PEDIDO (IDPEDIDO, IDPRODUTO, QTDE)VALUES (15, 3, RAND() * 10);

UPDATE ITEM_PEDIDO AS PED
SET PRECO_UNITARIO = (SELECT PRECO FROM PRODUTO WHERE IDPRODUTO = PED.IDPRODUTO);

-- QUESTAO 1
SELECT *
 FROM
	CLIENTE 
	INNER JOIN PEDIDO ON
	CLIENTE.IDCLIENTE = PEDIDO.IDCLIENTE;


-- QUESTAO 2
SELECT *
 FROM
	PRODUTO 
	INNER JOIN ITEM_PEDIDO ON
	PRODUTO.IDPRODUTO = ITEM_PEDIDO.IDPRODUTO;


-- QUESTAO 3
SELECT *
 FROM
	PEDIDO 
	INNER JOIN ITEM_PEDIDO ON
	PEDIDO.IDPEDIDO = ITEM_PEDIDO.IDPEDIDO;


-- QUESTAO 4
SELECT *
 FROM
	PEDIDO 
	INNER JOIN ITEM_PEDIDO ON
	PEDIDO.IDPEDIDO = ITEM_PEDIDO.IDPEDIDO
	INNER JOIN PRODUTO ON
	ITEM_PEDIDO.IDPRODUTO = PRODUTO.IDPRODUTO;


-- QUESTAO 5
SELECT *
 FROM
	CLIENTE
	INNER JOIN PEDIDO ON
	CLIENTE.IDCLIENTE = PEDIDO.IDCLIENTE
	INNER JOIN ITEM_PEDIDO ON
	PEDIDO.IDPEDIDO = ITEM_PEDIDO.IDPEDIDO;
 
 
-- QUESTAO 6
 SELECT *
 FROM
	CLIENTE
	INNER JOIN PEDIDO ON
	CLIENTE.IDCLIENTE = PEDIDO.IDCLIENTE
	INNER JOIN ITEM_PEDIDO ON
	PEDIDO.IDPEDIDO = ITEM_PEDIDO.IDPEDIDO
	INNER JOIN PRODUTO ON
	ITEM_PEDIDO.IDPRODUTO = PRODUTO.IDPRODUTO;
 
 
-- QUESTAO 7
SELECT
	PRODUTO.NOME
    , PRODUTO.PRECO
FROM
	PRODUTO
ORDER BY
	PRODUTO.CATEGORIA
    , PRODUTO.NOME;
    
-- QUESTAO 8
SELECT
	*
FROM
	PEDIDO
WHERE
	IDCLIENTE = 3;
    
    
-- QUESTAO 9
SELECT
	PEDIDO.IDPEDIDO
    , PEDIDO.DTPEDIDO
    , CLIENTE.IDCLIENTE
    , CLIENTE.NOME
    , PRODUTO.IDPRODUTO
    , PRODUTO.NOME
    , ITEM_PEDIDO.PRECO_UNITARIO
    , ITEM_PEDIDO.QTDE
    , (ITEM_PEDIDO.PRECO_UNITARIO * ITEM_PEDIDO.QTDE) AS TOTAL
FROM
	CLIENTE
    INNER JOIN PEDIDO ON
    CLIENTE.IDCLIENTE = PEDIDO.IDCLIENTE
    INNER JOIN ITEM_PEDIDO ON
    PEDIDO.IDPEDIDO = ITEM_PEDIDO.IDPEDIDO
    INNER JOIN PRODUTO ON
	PRODUTO.IDPRODUTO = ITEM_PEDIDO.IDPRODUTO
WHERE
	PEDIDO.IDPEDIDO = 10;

