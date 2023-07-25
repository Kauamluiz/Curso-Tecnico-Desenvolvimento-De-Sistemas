-- APAGANDO O BANCO DE DADOS CASO EXISTA
DROP DATABASE IF EXISTS ATIVIDADE_13_B;

-- CRIANDO O BANCO DE DADOS
CREATE DATABASE ATIVIDADE_13_B;

-- CONECTANDO BANCO DE DADOS
USE ATIVIDADE_13_B;

-- CRIANDO AS TABELAS
CREATE TABLE ALUNO (
	IDALUNO INT NOT NULL
    ,NOME VARCHAR(45)
    ,PRIMARY KEY (IDALUNO)
);

CREATE TABLE PERGUNTA (
	IDPERGUNTA INT NOT NULL
    ,TEXTO VARCHAR(100)
    ,PRIMARY KEY (IDPERGUNTA)
);

CREATE TABLE OPCAO (
	IDOPCAO INT NOT NULL
    ,TEXTO_OPCAO VARCHAR(45)
    ,IDPERGUNTA INT NOT NULL
    ,PRIMARY KEY (IDOPCAO)
    ,FOREIGN KEY (IDPERGUNTA) REFERENCES PERGUNTA (IDPERGUNTA)
);

CREATE TABLE RESPOSTA (
	IDRESPOSTA INT NOT NULL
    ,DTRESPOSTA DATETIME
    ,IDALUNO INT NOT NULL
    ,IDPERGUNTA INT NOT NULL
    ,IDOPCAO INT NOT NULL
    ,PRIMARY KEY (IDRESPOSTA)
    ,FOREIGN KEY (IDALUNO) REFERENCES ALUNO (IDALUNO)
    ,FOREIGN KEY (IDPERGUNTA) REFERENCES PERGUNTA (IDPERGUNTA)
    ,FOREIGN KEY (IDOPCAO) REFERENCES OPCAO (IDOPCAO)
);