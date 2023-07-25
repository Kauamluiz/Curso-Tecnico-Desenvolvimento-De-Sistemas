DROP DATABASE IF EXISTS DBLOCADORA;

CREATE DATABASE DBLOCADORA;

USE DBLOCADORA;

CREATE TABLE CLIENTE(
  IDCLIENTE INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  NOME VARCHAR(100) NOT NULL,
  RUA VARCHAR(100),
  NUMERO VARCHAR(10),
  COMPLEMENTO VARCHAR(60),
  BAIRRO VARCHAR(100),
  CEP CHAR(8),
  CIDADE VARCHAR(60),
  ESTADO CHAR(2),
  FONE_RESIDENCIAL VARCHAR(15) NOT NULL,
  FONE_CELULAR VARCHAR(15),
  FONE_REFERENCIA VARCHAR(15)
);

CREATE TABLE VEICULO(
  IDVEICULO INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  MARCA VARCHAR(45),
  MODELO VARCHAR(45),
  PLACA CHAR(7) NOT NULL,
  ANO_FABRICACAO INT,
  ANO_MODELO INT,
  COMBUSTIVEL ENUM('GASOLINA', 'ALCOOL', 'FLEX', 'GNV', 'DIESEL'),
  FOTO VARCHAR(255)
);

CREATE TABLE FUNCIONARIO(
  IDFUNCIONARIO INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  NOME VARCHAR(100),
  LOGIN VARCHAR(15) UNIQUE,
  SENHA VARCHAR(15)
);

INSERT INTO FUNCIONARIO(NOME, LOGIN, SENHA)VALUES('admin', 'admin', '123456');

CREATE TABLE LOCACAO(
  IDLOCACAO INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  IDCLIENTE INT NOT NULL,
  IDVEICULO INT NOT NULL,
  IDFUNCIONARIO INT NOT NULL,
  DT_LOCACAO DATETIME NOT NULL,
  KM_LOCACAO INT NOT NULL,
  DT_ENTREGA DATETIME,
  KM_ENTREGA INT,
  CONSTRAINT FK_LOCACAO_CLIENTE FOREIGN KEY (IDCLIENTE) REFERENCES CLIENTE(IDCLIENTE) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT FK_LOCACAO_VEICULO FOREIGN KEY (IDVEICULO) REFERENCES VEICULO(IDVEICULO) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT FK_LOCACAO_FUNCIONARIO FOREIGN KEY (IDFUNCIONARIO) REFERENCES FUNCIONARIO(IDFUNCIONARIO) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE OPCIONAL(
  IDOPCIONAL INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  DESCRICAO VARCHAR(100)
);

CREATE TABLE OPCIONAL_VEICULO(
  IDVEICULO INT NOT NULL,
  IDOPCIONAL INT NOT NULL,
  CONSTRAINT PK_OPCIONAL_VEICULO PRIMARY KEY (IDVEICULO, IDOPCIONAL),
  CONSTRAINT FK_OPCIONAL_VEICULO_VEICULO FOREIGN KEY (IDVEICULO) REFERENCES VEICULO(IDVEICULO) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT FK_OPCIONAL_VEICULO_OPCIONAL FOREIGN KEY (IDOPCIONAL) REFERENCES OPCIONAL(IDOPCIONAL) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE TABELA(
  IDTABELA INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  DESCRICAO VARCHAR(100),
  TIPO VARCHAR(50),
  VALOR DECIMAL(8,2)
);


CREATE TABLE TABELA_VEICULO(
  IDVEICULO INT NOT NULL,
  IDTABELA INT NOT NULL,
  CONSTRAINT PK_TABELA_VEICULO PRIMARY KEY (IDVEICULO, IDTABELA),
  CONSTRAINT FK_TABELA_VEICULO_VEICULO FOREIGN KEY (IDVEICULO) REFERENCES VEICULO(IDVEICULO) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT FK_TABELA_VEICULO_TABELA FOREIGN KEY (IDTABELA) REFERENCES TABELA(IDTABELA) ON DELETE CASCADE ON UPDATE CASCADE
);


INSERT INTO cliente VALUES (1,'João da Silva','Beira mar','10','casa','centro','11223344','Florianopolis','SC','4899887766','4899898876','4833776654');
INSERT INTO cliente VALUES (2,'Maria Santos','Beira principal','10','casa','centro','11223344','Florianopolis','SC','4899887766','4899898876','4833776654');
INSERT INTO veiculo VALUES (1,'fiat','uno','ASD4455',2013,2013,'GASOLINA','1404516219.jpg ');
INSERT INTO veiculo VALUES (2,'ford','ka','FFD3322',2014,2014,'GASOLINA','1404516365.jpg');
INSERT INTO opcional VALUES (1,'Ar condicionado');
INSERT INTO opcional VALUES (2,'Trava eletrica');
INSERT INTO opcional VALUES (3,'Direção hidraulica');
INSERT INTO opcional_veiculo VALUES (1,1);
INSERT INTO opcional_veiculo VALUES (2,2);
INSERT INTO opcional_veiculo VALUES (2,3);
INSERT INTO tabela VALUES (1,'Valor Por km','KM', 10.00);
INSERT INTO tabela VALUES (2,'Valor por Dia','Dia', 150.00);
INSERT INTO tabela_veiculo VALUES (1,1);
INSERT INTO tabela_veiculo VALUES (1,2);
INSERT INTO tabela_veiculo VALUES (2,1);
INSERT INTO tabela_veiculo VALUES (2,2);
INSERT INTO locacao VALUES (1,1,1,1,'2013-10-02 00:00:00',123345,'2013-10-25 00:00:00',123556);
INSERT INTO locacao VALUES (2,1,2,1,'2013-05-12 00:00:00',123345,'2013-05-25 00:00:00',123554);
INSERT INTO locacao VALUES (3,1,2,1,'2014-10-02 00:00:00',123345,'2014-10-25 00:00:00',125646);
INSERT INTO locacao VALUES (4,2,1,1,'2014-05-12 00:00:00',123345,'2014-05-25 00:00:00',123586);
INSERT INTO locacao VALUES (5,2,2,1,'2015-10-02 00:00:00',123345,'2015-10-25 00:00:00',123594);
INSERT INTO locacao VALUES (6,2,2,1,'2015-01-12 00:00:00',123345,'2015-01-25 00:00:00',123354);

-- QUESTAO 01
SELECT
	CLIENTE.IDCLIENTE
    , CLIENTE.NOME
    , VEICULO.MARCA
    , VEICULO.MODELO
    , VEICULO.PLACA
    , LOCACAO.DT_LOCACAO
FROM
	CLIENTE
    INNER JOIN LOCACAO ON
    CLIENTE.IDCLIENTE = LOCACAO.IDCLIENTE
    INNER JOIN VEICULO ON
    LOCACAO.IDVEICULO = VEICULO.IDVEICULO;

    
-- QUESTAO 02
SELECT
	VEICULO.IDVEICULO
	, VEICULO.MARCA
	, VEICULO.MODELO
	, COUNT(LOCACAO.IDVEICULO)
FROM
	VEICULO
    INNER JOIN LOCACAO ON
    VEICULO.IDVEICULO = LOCACAO.IDVEICULO
GROUP BY
	VEICULO.IDVEICULO
	, VEICULO.MARCA
	, VEICULO.MODELO;

    
-- QUESTAO 03
SELECT
	CLIENTE.IDCLIENTE
    , CLIENTE.NOME
    , (LOCACAO.KM_ENTREGA - LOCACAO.KM_LOCACAO) AS TOTAL
FROM
	CLIENTE
    INNER JOIN LOCACAO ON
    CLIENTE.IDCLIENTE = LOCACAO.IDCLIENTE;


-- QUESTAO 04
SELECT
	VEICULO.*
    , OPCIONAL_VEICULO.IDOPCIONAL
FROM
	VEICULO
    INNER JOIN OPCIONAL_VEICULO ON
    VEICULO.IDVEICULO = OPCIONAL_VEICULO.IDVEICULO
WHERE
	OPCIONAL_VEICULO.IDVEICULO IS NULL;

    
-- QUESTAO 05
SELECT
	VEICULO.IDVEICULO
	, VEICULO.MARCA
	, VEICULO.MODELO
    , COUNT(LOCACAO.IDVEICULO)
    , SUM(LOCACAO.KM_ENTREGA)
FROM
	VEICULO
    INNER JOIN LOCACAO ON
    VEICULO.IDVEICULO = LOCACAO.IDVEICULO
GROUP BY
	VEICULO.IDVEICULO
	, VEICULO.MARCA
	, VEICULO.MODELO;

    
-- QUESTAO 06
SELECT
	CLIENTE.IDCLIENTE
    , CLIENTE.NOME
    , CLIENTE.FONE_CELULAR
    , LOCACAO.DT_LOCACAO
    , VEICULO.MARCA
	, VEICULO.MODELO
    , FUNCIONARIO.NOME
FROM
	CLIENTE
    INNER JOIN LOCACAO ON
    CLIENTE.IDCLIENTE = LOCACAO.IDCLIENTE
    INNER JOIN FUNCIONARIO ON
    LOCACAO.IDFUNCIONARIO = FUNCIONARIO.IDFUNCIONARIO
    INNER JOIN VEICULO ON
    VEICULO.IDVEICULO = LOCACAO.IDVEICULO;

    
-- QUESTAO 07
SELECT
	DAYOFWEEK(LOCACAO.DT_LOCACAO)
FROM
	LOCACAO;

    
-- QUESTAO 08
SELECT
	AVG(LOCACAO.KM_ENTREGA)
	, MONTH(LOCACAO.DT_LOCACAO)
	, YEAR(LOCACAO.DT_LOCACAO)
FROM
	LOCACAO
GROUP BY
	LOCACAO.DT_LOCACAO
    , LOCACAO.DT_LOCACAO;
    

-- QUESTAO 09
SELECT
	AVG(DATEDIFF(LOCACAO.DT_ENTREGA, LOCACAO.DT_LOCACAO))
FROM
	LOCACAO;

    
-- QUESTAO 10
SELECT
	AVG(LOCACAO.KM_LOCACAO)
FROM
	LOCACAO;
    

-- QUESTAO 11
SELECT
	OPCIONAL_VEICULO.IDOPCIONAL
    , COUNT(VEICULO.IDVEICULO)
FROM
	VEICULO
    INNER JOIN OPCIONAL_VEICULO ON
    VEICULO.IDVEICULO = OPCIONAL_VEICULO.IDVEICULO
GROUP BY
	OPCIONAL_VEICULO.IDOPCIONAL;
    

-- QUESTAO 12
SELECT
	TABELA.VALOR
    , (LOCACAO.KM_ENTREGA - LOCACAO.KM_LOCACAO) AS TOTAL
    , ((LOCACAO.KM_ENTREGA - LOCACAO.KM_LOCACAO) * TABELA.VALOR) AS TOTAL
FROM
	LOCACAO
    INNER JOIN VEICULO ON
    LOCACAO.IDVEICULO = VEICULO.IDVEICULO
    INNER JOIN TABELA_VEICULO ON
	VEICULO.IDVEICULO = TABELA_VEICULO.IDVEICULO
    INNER JOIN TABELA ON
    TABELA_VEICULO.IDTABELA = TABELA.IDTABELA
HAVING
	TABELA.VALOR = 10.00;


-- QUESTAO 13
SELECT
	TABELA.VALOR
    , DATEDIFF(LOCACAO.DT_ENTREGA, LOCACAO.DT_LOCACAO)
    , (DATEDIFF(LOCACAO.DT_ENTREGA, LOCACAO.DT_LOCACAO) * TABELA.VALOR) AS TOTAL
FROM
	LOCACAO
    INNER JOIN VEICULO ON
    LOCACAO.IDVEICULO = VEICULO.IDVEICULO
    INNER JOIN TABELA_VEICULO ON
	VEICULO.IDVEICULO = TABELA_VEICULO.IDVEICULO
    INNER JOIN TABELA ON
    TABELA_VEICULO.IDTABELA = TABELA.IDTABELA
HAVING
	TABELA.VALOR = 150.00;
