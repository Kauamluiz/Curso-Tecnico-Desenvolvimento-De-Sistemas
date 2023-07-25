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






