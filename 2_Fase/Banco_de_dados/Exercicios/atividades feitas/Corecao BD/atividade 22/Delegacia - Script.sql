DROP DATABASE IF EXISTS DBDELEGACIA;

CREATE DATABASE DBDELEGACIA;

USE DBDELEGACIA;

CREATE TABLE CRIME (
	IDCRIME INT NOT NULL,
	DESCRICAO VARCHAR(255),
	RUA VARCHAR(100),
	NUMERO INT,
	COMPLEMENTO VARCHAR(255),
	BAIRRO VARCHAR(100),
	CEP VARCHAR(8),
	CIDADE VARCHAR(100),
	ESTADO CHAR(2)
);

CREATE TABLE CRIMINOSO(
  RUA VARCHAR(100),
  NUMERO INT,
  COMPLEMENTO VARCHAR(255),
  BAIRRO VARCHAR(100),
  CEP CHAR(8),
  CIDADE VARCHAR(100),
  ESTADO CHAR(2),
  DTNASCIMENTO DATE,
  TELEFONE VARCHAR(15)
);

CREATE TABLE OCORRENCIA (
	IDOCORRENCIA INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	DT_OCORRENCIA DATE
);

CREATE TABLE ITEM_OCORRENCIA (
	IDITEM INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	IDOCORRENCIA INT NOT NULL,
	DESCRICAO VARCHAR (100),
	CONSTRAINT FK_ITEM_OCORRENCIA_OCORRENCIA FOREIGN KEY (IDOCORRENCIA) REFERENCES OCORRENCIA(IDOCORRENCIA)
);

CREATE TABLE VITIMA (
  RUA VARCHAR(100),
  NUMERO INT,
  COMPLEMENTO VARCHAR(255),
  BAIRRO VARCHAR(100),
  CEP VARCHAR(8),
  CIDADE VARCHAR(100),
  ESTADO CHAR(2),
  DTNASCIMENTO DATE
);

CREATE TABLE COMETE(
	IDCRIME INT NOT NULL,
	IDCRIMINOSO INT NOT NULL
);

CREATE TABLE ATACA (
	OBSERVACAO CHAR(1)
);

CREATE TABLE SOFRE (
	IDCRIME INT NOT NULL,
	IDVITIMA INT NOT NULL
);

CREATE TABLE ARMA (
	IDARMA INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	MARCA VARCHAR(110)
);

CREATE TABLE USADA (
	IDARMA INT NOT NULL,
	IDCRIME INT NOT NULL
);

ALTER TABLE CRIME
	ADD PRIMARY KEY (IDCRIME)
    ,ADD COLUMN DTCRIME DATE;
    
ALTER TABLE CRIMINOSO
	ADD COLUMN NOME VARCHAR(45)
    ,ADD COLUMN IDCRIMINOSO INT NOT NULL
    ,ADD PRIMARY KEY (IDCRIMINOSO);


DROP TABLE ITEM_OCORRENCIA;

DROP TABLE OCORRENCIA;

ALTER TABLE VITIMA
	ADD PRIMARY KEY (IDVITIMA)
    ,ADD COLUMN NOME VARCHAR(45)
    ,ADD COLUMN IDVITIMA INT NOT NULL;

ALTER TABLE COMETE
	ADD PRIMARY KEY (IDCRIME, IDCRIMINOSO)
    ,ADD FOREIGN KEY (IDCRIME) REFERENCES CRIME (IDCRIME)
    ,ADD FOREIGN KEY (IDCRIMINOSO) REFERENCES CRIMINOSO (IDCRIMINOSO);
    
ALTER TABLE ATACA
	DROP COLUMN OBSERVACAO
    ,ADD COLUMN IDVITIMA INT
    ,ADD COLUMN IDCRIMINOSO INT
    ,ADD PRIMARY KEY (IDVITIMA, IDCRIMINOSO)
    ,ADD FOREIGN KEY (IDVITIMA) REFERENCES VITIMA (IDVITIMA)
    ,ADD FOREIGN KEY (IDCRIMINOSO) REFERENCES CRIMINOSO (IDCRIMINOSO);
    
ALTER TABLE SOFRE
	ADD PRIMARY KEY (IDCRIME, IDVITIMA)
    ,ADD FOREIGN KEY (IDCRIME) REFERENCES CRIME (IDCRIME)
    ,ADD FOREIGN KEY (IDVITIMA) REFERENCES VITIMA (IDVITIMA);
    
ALTER TABLE ARMA
	DROP COLUMN MARCA
    ,ADD COLUMN DESCRICAO VARCHAR(45)
    ,ADD COLUMN IDENTIFICACAO VARCHAR(15)
    ,ADD COLUMN TIPO ENUM('ARMA DR FOGO', 'ARMA BRANCA');
    
ALTER TABLE USADA
	ADD PRIMARY KEY (IDARMA, IDCRIME)
    ,ADD FOREIGN KEY (IDCRIME) REFERENCES CRIME (IDCRIME)
    ,ADD FOREIGN KEY (IDARMA) REFERENCES ARMA (IDARMA);
