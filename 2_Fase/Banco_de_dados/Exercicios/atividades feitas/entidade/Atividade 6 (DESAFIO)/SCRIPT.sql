-- APAGANDO O BANCO DE DADOS CASO EXISTA
DROP DATABASE IF EXISTS DBEXERCICIO07_1;

-- CRIANDO O BANCO DE DADOS
CREATE DATABASE DBEXERCICIO07_1;

-- CONECTANDO BANCO DE DADOS
USE DBEXERCICIO07_1;

-- CRIANDO AS TABELAS
CREATE TABLE HOSPEDE (
	IDHOSPEFE INT NOT NULL
    ,HOSPEDE_UH CHAR(5)
    ,HOSPEDE_ENTRADA DATETIME
    ,HOSPEDE_SAIDA DATETIME
    ,HOSPEDE_ACOMPANHANTE VARCHAR(45)
    ,HOSPEDE_TRANSPORTE VARCHAR(45)
    ,HOSPEDE_MOTIVO VARCHAR(260)
    ,HOSPEDE_DESTINO_CIDADE VARCHAR(45)
    ,HOSPEDE_DESTINO_ESTADO VARCHAR(45)
    ,HOSPEDE_DESTINO_PAIS VARCHAR(45)
    ,HOSPEDE_PROCEDENCIA_CIDADE VARCHAR(45)
    ,HOSPEDE_PROCEDENCIA_ESTADO VARCHAR(45)
    ,HOSPEDE_PROCEDENCIA_PAIS VARCHAR(45)
    ,HOSPEDE_RESIDENCIA_RUA VARCHAR(45)
    ,HOSPEDE_RESIDENCIA_INT VARCHAR(150)
    ,HOSPEDE_RESIDENCIA_COMPLEMENTO VARCHAR(120)
    ,HOSPEDE_RESIDENCIA_BAIRRO VARCHAR(45)
    ,HOSPEDE_RESIDENCIA_CIDADE VARCHAR(45)
    ,HOSPEDE_RESIDENCIA_ESTADO VARCHAR(45)
    ,HOSPEDE_RESIDENCIA_CEP VARCHAR(9)
    ,HOSPEDE_RESIDENCIA_PAIS VARCHAR(45)
    ,HOSPEDE_CEF VARCHAR(11)
    ,HOSPEDE_DOCUMENTO_NUMERO VARCHAR(7)
    ,HOSPEDE_DOCUMENTO_TIPO VARCHAR(15)
    ,HOSPEDE_DOCUMENTO_ORGAO VARCHAR(40)
    ,HOSPEDE_GENERO VARCHAR(9)
    ,HOSPEDE_DTNASCIMENTO DATETIME
    ,HOSPEDE_NACIONALIDADE VARCHAR(30)
    ,HOSPEDE_PROFISSAO VARCHAR(30)
    ,HOSPEDE_TELEFONE_DDD VARCHAR(4)
    ,HOSPEDE_TELEFONE INT
    ,HOSPEDE_NOME VARCHAR(120)
    ,HOTEL_DDD_TELEFONE VARCHAR(4)
    ,HOTEL_TELEFONE INT
    ,HOTEL_ENDERECO_RUA VARCHAR(45)
    ,HOTEL_ENDERECO_NUMERO VARCHAR(45)
    ,HOTEL_ENDERECO_COMPLEMENTO VARCHAR(45)
    ,HOTEL_ENDERECO_CIDADE VARCHAR(45)
    ,HOTEL_ENDERECO_BAIRRO VARCHAR(45)
    ,HOTEL_ENDERECO_ESTADO VARCHAR(45)
    ,HOTEL_ENDERECO_CEP VARCHAR(45)
    ,HOTEL_ENDERECO_MUNICIPIO VARCHAR(45)
    ,HOTEL_TIPO VARCHAR(45)
    ,HOTEL_NOMEFANTASIA VARCHAR(45)
    ,HOTEL_CAT VARCHAR(45)
    ,HOTEL_CNPJ VARCHAR(45)
    ,HOTEL_RAZAOSOCIAL VARCHAR(500)
    ,HOTEL_CADASTROTUR VARCHAR(600)
    ,HOTEL_REDE VARCHAR(45)
    ,PRIMARY KEY (IDHOSPEDE)
);