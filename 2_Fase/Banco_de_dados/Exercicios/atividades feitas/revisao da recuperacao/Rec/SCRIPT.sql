DROP DATABASE IF EXISTS DBRECUPERACAO;
CREATE DATABASE DBRECUPERACAO;

USE DBRECUPERACAO;

CREATE TABLE USUARIO (
	IDUSUARIO INT NOT NULL
	, NOME VARCHAR(100)
	, EMAIL VARCHAR(45)
	, PRIMARY KEY (IDUSUARIO)
);

CREATE TABLE EPISODIO (
	IDEPISODIO INT NOT NULL
	, NOME VARCHAR(100)
	, TEMPORADA INT
	, NUMERO INT
	, DURACAO TIME
	, PRIMARY KEY (IDEPISODIO)
);

CREATE TABLE ACESSO (
	IDACESSO INT NOT NULL
	, IDUSUARIO INT NOT NULL
	, IDEPISODIO INT NOT NULL
	, DT_ACESSO DATE
	, HR_ACESSO TIME
	, TEMPO TIME
	, PRIMARY KEY (IDACESSO)
	, FOREIGN KEY (IDUSUARIO) REFERENCES USUARIO(IDUSUARIO)
	, FOREIGN KEY (IDEPISODIO) REFERENCES EPISODIO(IDEPISODIO)
);


INSERT INTO USUARIO (IDUSUARIO, NOME, EMAIL)
VALUES
  (1, 'João Silva', 'joao.silva@example.com'),
  (2, 'Maria Santos', 'maria.santos@example.com'),
  (3, 'Pedro Almeida', 'pedro.almeida@example.com');

INSERT INTO EPISODIO (IDEPISODIO, NOME, TEMPORADA, NUMERO, DURACAO)
VALUES
  (1, 'Piloto', 1, 1, '00:22:00'),
  (2, 'O Efeito da Combinação do Peixe Banana', 1, 2, '00:20:00'),
  (3, 'A Hipótese do Trabalho do Robô', 1, 3, '00:19:00'),
  (4, 'A Combustão do Foguete Lunar', 1, 4, '00:21:00'),
  (17, 'O Paradigma do Homem da Peste', 1, 7, '00:20:00'),
  (18, 'A Dissociação da Física', 1, 8, '00:22:00'),
  (19, 'O Paquete do Cooper-Nowitzki', 1, 9, '00:21:00'),
  (20, 'O Violão do Monopólio', 1, 10, '00:18:00');

INSERT INTO episodio (idepisodio, nome, temporada, numero, duracao)
VALUES
  (11, 'A Solução do Hamburger', 2, 1, '00:22:00'),
  (12, 'A Variável do Puxa-saco', 2, 2, '00:21:00'),
  (13, 'A Equação do Matrimônio', 2, 3, '00:20:00'),
  (14, 'A Reação do Coração', 2, 4, '00:19:00'),
  (15, 'A Conjectura do Arroz', 2, 5, '00:21:00'),
  (16, 'A Ressonância do Peixe Gordo', 2, 6, '00:18:00');


INSERT INTO episodio (idepisodio, nome, temporada, numero, duracao)
VALUES
  (101, 'A Robótica do Macaco de Brinquedo', 5, 1, '00:20:00'),
  (102, 'A Permeabilidade do Germe', 5, 2, '00:21:00'),
  (103, 'A Transposição da Letra Pirata', 5, 3, '00:19:00'),
  (104, 'A Flutuação do Jogo da Noite', 5, 4, '00:22:00');
  
INSERT INTO episodio (idepisodio, nome, temporada, numero, duracao)
VALUES
  (201, 'A Expansão Matrimonial', 10, 1, '00:22:00'),
  (202, 'A Minimização de Propostas', 10, 2, '00:20:00'),
  (203, 'A Coexistência da Diretora', 10, 3, '00:19:00'),
  (204, 'A Proposta Romântica Dissociativa', 10, 4, '00:21:00');
  
INSERT INTO episodio (idepisodio, nome, temporada, numero, duracao)
VALUES
  (1211, 'The Confirmation Polarization', 12, 11, '00:20:00'),
  (1212, 'The Maternal Conclusion', 12, 12, '00:21:00'),
  (1213, 'The Change Constant', 12, 13, '00:19:00'),
  (1214, 'The Stockholm Syndrome', 12, 14, '00:22:00');



INSERT INTO acesso (idacesso, idusuario, idepisodio, DT_ACESSO, HR_ACESSO, TEMPO)
VALUES
  (1, 1, 101, '2023-05-20', '08:30:00', '00:12:30'),
  (2, 2, 202, '2023-06-12', '16:45:00', '00:20:15'),
  (3, 3, 1211, '2023-07-24', '10:15:00', '00:15:45'),
  (4, 3, 1213, '2023-08-31', '19:30:00', '00:25:00');
  
-- QUESTAO 01
SELECT
  EPISODIO.TEMPORADA
  , SUM(EPISODIO.DURACAO)
FROM
  EPISODIO
GROUP BY
  EPISODIO.TEMPORADA;
  
-- QUESTAO 02
SELECT
  EPISODIO.IDEPISODIO
  , EPISODIO.NOME
  , EPISODIO.TEMPORADA
  , COUNT(ACESSO.IDEPISODIO)
FROM
  EPISODIO
  INNER JOIN ACESSO ON
  EPISODIO.IDEPISODIO = ACESSO.IDEPISODIO
WHERE
  ACESSO.IDUSUARIO = 2
GROUP BY
  EPISODIO.IDEPISODIO
  , EPISODIO.NOME
  , EPISODIO.TEMPORADA;
  
  -- QUESTAO 03
SELECT
  EPISODIO.IDEPISODIO
  , EPISODIO.NOME
  , EPISODIO.TEMPORADA
  , COUNT(ACESSO.IDEPISODIO)
FROM
  EPISODIO
  LEFT JOIN ACESSO ON
  EPISODIO.IDEPISODIO = ACESSO.IDEPISODIO
  LEFT JOIN USUARIO ON
  USUARIO.IDUSUARIO = ACESSO.IDUSUARIO
WHERE
 DROP DATABASE IF EXISTS DBRECUPERACAO;
CREATE DATABASE DBRECUPERACAO;

USE DBRECUPERACAO;

CREATE TABLE USUARIO (
	IDUSUARIO INT NOT NULL
	, NOME VARCHAR(100)
	, EMAIL VARCHAR(45)
	, PRIMARY KEY (IDUSUARIO)
);

CREATE TABLE EPISODIO (
	IDEPISODIO INT NOT NULL
	, NOME VARCHAR(100)
	, TEMPORADA INT
	, NUMERO INT
	, DURACAO TIME
	, PRIMARY KEY (IDEPISODIO)
);

CREATE TABLE ACESSO (
	IDACESSO INT NOT NULL
	, IDUSUARIO INT NOT NULL
	, IDEPISODIO INT NOT NULL
	, DT_ACESSO DATE
	, HR_ACESSO TIME
	, TEMPO TIME
	, PRIMARY KEY (IDACESSO)
	, FOREIGN KEY (IDUSUARIO) REFERENCES USUARIO(IDUSUARIO)
	, FOREIGN KEY (IDEPISODIO) REFERENCES EPISODIO(IDEPISODIO)
);


INSERT INTO USUARIO (IDUSUARIO, NOME, EMAIL)
VALUES
  (1, 'João Silva', 'joao.silva@example.com'),
  (2, 'Maria Santos', 'maria.santos@example.com'),
  (3, 'Pedro Almeida', 'pedro.almeida@example.com');

INSERT INTO EPISODIO (IDEPISODIO, NOME, TEMPORADA, NUMERO, DURACAO)
VALUES
  (1, 'Piloto', 1, 1, '00:22:00'),
  (2, 'O Efeito da Combinação do Peixe Banana', 1, 2, '00:20:00'),
  (3, 'A Hipótese do Trabalho do Robô', 1, 3, '00:19:00'),
  (4, 'A Combustão do Foguete Lunar', 1, 4, '00:21:00'),
  (17, 'O Paradigma do Homem da Peste', 1, 7, '00:20:00'),
  (18, 'A Dissociação da Física', 1, 8, '00:22:00'),
  (19, 'O Paquete do Cooper-Nowitzki', 1, 9, '00:21:00'),
  (20, 'O Violão do Monopólio', 1, 10, '00:18:00');

INSERT INTO episodio (idepisodio, nome, temporada, numero, duracao)
VALUES
  (11, 'A Solução do Hamburger', 2, 1, '00:22:00'),
  (12, 'A Variável do Puxa-saco', 2, 2, '00:21:00'),
  (13, 'A Equação do Matrimônio', 2, 3, '00:20:00'),
  (14, 'A Reação do Coração', 2, 4, '00:19:00'),
  (15, 'A Conjectura do Arroz', 2, 5, '00:21:00'),
  (16, 'A Ressonância do Peixe Gordo', 2, 6, '00:18:00');


INSERT INTO episodio (idepisodio, nome, temporada, numero, duracao)
VALUES
  (101, 'A Robótica do Macaco de Brinquedo', 5, 1, '00:20:00'),
  (102, 'A Permeabilidade do Germe', 5, 2, '00:21:00'),
  (103, 'A Transposição da Letra Pirata', 5, 3, '00:19:00'),
  (104, 'A Flutuação do Jogo da Noite', 5, 4, '00:22:00');
  
INSERT INTO episodio (idepisodio, nome, temporada, numero, duracao)
VALUES
  (201, 'A Expansão Matrimonial', 10, 1, '00:22:00'),
  (202, 'A Minimização de Propostas', 10, 2, '00:20:00'),
  (203, 'A Coexistência da Diretora', 10, 3, '00:19:00'),
  (204, 'A Proposta Romântica Dissociativa', 10, 4, '00:21:00');
  
INSERT INTO episodio (idepisodio, nome, temporada, numero, duracao)
VALUES
  (1211, 'The Confirmation Polarization', 12, 11, '00:20:00'),
  (1212, 'The Maternal Conclusion', 12, 12, '00:21:00'),
  (1213, 'The Change Constant', 12, 13, '00:19:00'),
  (1214, 'The Stockholm Syndrome', 12, 14, '00:22:00');



INSERT INTO acesso (idacesso, idusuario, idepisodio, DT_ACESSO, HR_ACESSO, TEMPO)
VALUES
  (1, 1, 101, '2023-05-20', '08:30:00', '00:12:30'),
  (2, 2, 202, '2023-06-12', '16:45:00', '00:20:15'),
  (3, 3, 1211, '2023-07-24', '10:15:00', '00:15:45'),
  (4, 3, 1213, '2023-08-31', '19:30:00', '00:25:00');
  
-- QUESTAO 01
SELECT
  EPISODIO.TEMPORADA
  , SUM(EPISODIO.DURACAO)
FROM
  EPISODIO
GROUP BY
  EPISODIO.TEMPORADA;
  
-- QUESTAO 02
SELECT
  EPISODIO.IDEPISODIO
  , EPISODIO.NOME
  , EPISODIO.TEMPORADA
  , COUNT(ACESSO.IDEPISODIO)
FROM
  EPISODIO
  INNER JOIN ACESSO ON
  EPISODIO.IDEPISODIO = ACESSO.IDEPISODIO
WHERE
  ACESSO.IDUSUARIO = 2
GROUP BY
  EPISODIO.IDEPISODIO
  , EPISODIO.NOME
  , EPISODIO.TEMPORADA;
  
  -- QUESTAO 03
SELECT
  EPISODIO.IDEPISODIO
  , EPISODIO.NOME
  , EPISODIO.TEMPORADA
  , ACESSO.IDUSUARIO
  , COUNT(ACESSO.IDEPISODIO)
FROM
  EPISODIO
  LEFT JOIN ACESSO ON
  EPISODIO.IDEPISODIO = ACESSO.IDEPISODIO
  LEFT JOIN USUARIO ON
  ACESSO.IDUSUARIO = USUARIO.IDUSUARIO
WHERE
  ACESSO.IDUSUARIO <> 2 OR ACESSO.IDUSUARIO IS NULL
GROUP BY
  EPISODIO.IDEPISODIO
  , EPISODIO.NOME
  , EPISODIO.TEMPORADA
  , ACESSO.IDUSUARIO;
  