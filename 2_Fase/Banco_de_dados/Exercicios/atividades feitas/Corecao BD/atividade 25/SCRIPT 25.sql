SET SQL_SAFE_UPDATES = 0;
DROP DATABASE IF EXISTS DBALUNO;
CREATE DATABASE DBALUNO;
USE DBALUNO;

CREATE TABLE ALUNO (
	IDALUNO INT NOT NULL AUTO_INCREMENT
	, NOME VARCHAR(20) NOT NULL
	, SEXO CHAR(1)
	, IDADE INT
	, CIDADE VARCHAR(20)
    , PRIMARY KEY (IDALUNO)
);

INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('ANDERSON', 17, 'M','PALHOCA');
INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('CESAR', 21, 'M', 'SAO JOSE');
INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('DANIEL', 19, 'M', 'PALHOCA');
INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('DIEGO', 19, 'M', 'BLUMENAU');
INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('EDUARDO', 20, 'M', NULL);
INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('GABRIEL', 19, 'M', 'TUBARAO');
INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('JOAO', 18, 'M', 'SAO JOSE');
INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('LEONARDO', 19, 'M', NULL);
INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('LUCAS', 20, 'M', 'BLUMENAU');
INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('PRISCILA', 19, 'F', 'PALHOÇA');
INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('RENATA', 21, 'F', 'TUBARAO');
INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('MARIA', 22, 'F', 'BLUMENAU');
INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('TANIA', 19, 'F', 'SAO JOSE');
INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('CARLOS', 22, 'M', 'TUBARAO');
INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('JOSE', 19, 'M', 'PALHOCA');
INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('MARISA', 19, 'F', NULL);
INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('AMANDA', 20, 'F', NULL);
INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('JOANA', 19, 'F', NULL);
INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('ALICE', 21, 'F', 'SAO JOSE');
INSERT INTO ALUNO (NOME, IDADE, SEXO, CIDADE)VALUES('TADEU', 18, 'M', 'TUBARAO');

-- QUESTAO 1
SELECT COUNT(IDALUNO), SEXO FROM ALUNO GROUP BY SEXO;

-- QUESTAO 2
SELECT COUNT(IDALUNO), IDADE FROM ALUNO GROUP BY IDADE ORDER BY IDADE;

-- QUESTAO 3
SELECT COUNT(IDALUNO), CIDADE FROM ALUNO WHERE CIDADE IS NOT NULL GROUP BY CIDADE;

-- QUESTAO 4
SELECT COUNT(IDALUNO), CIDADE FROM ALUNO WHERE CIDADE IS NULL GROUP BY CIDADE;

-- QUESTAO 5
SELECT AVG(IDADE), SEXO FROM ALUNO GROUP BY SEXO;

-- QUESTAO 6
SELECT COUNT(IDALUNO), AVG(IDADE), CIDADE FROM ALUNO WHERE CIDADE = 'FLORIANOPOLIS' GROUP BY CIDADE;

-- QUESTAO 7
SELECT COUNT(IDALUNO), IDADE, SEXO FROM ALUNO WHERE IDADE <> 18 GROUP BY IDADE, SEXO;

-- QUESTAO 8
SELECT MIN(IDADE), CIDADE, SEXO FROM ALUNO WHERE CIDADE = 'SAO JOSE' AND SEXO = 'M' GROUP BY CIDADE, SEXO;

-- QUESTAO 9
SELECT COUNT(IDALUNO), SEXO, IDADE FROM ALUNO WHERE (IDADE >= 18 AND SEXO = 'M') OR (IDADE >= 21 AND SEXO = 'F') GROUP BY SEXO, IDADE;

-- QUESTAO 10
SELECT MAX(IDADE), MIN(IDADE), SEXO FROM ALUNO WHERE SEXO = 'F' GROUP BY SEXO;

-- QUESTAO 11
SELECT SUM(IDADE), CIDADE FROM ALUNO WHERE CIDADE = 'BLUMENAU' GROUP BY CIDADE;

-- QUESTAO 12
SELECT COUNT(IDALUNO), CIDADE, IDADE, SEXO FROM ALUNO WHERE IDADE BETWEEN 15 AND 18 AND CIDADE <> 'PALHOCA' GROUP BY SEXO, IDADE, CIDADE;

-- QUESTAO 13
SELECT COUNT(IDALUNO), CIDADE FROM ALUNO GROUP BY CIDADE HAVING COUNT(CIDADE)>3;

-- QUESTAO 14
SELECT COUNT(IDALUNO), IDADE FROM ALUNO GROUP BY IDADE ORDER BY IDADE DESC;

-- QUESTAO 15
SELECT COUNT(IDALUNO), MAX(IDADE), MIN(IDADE), AVG(IDADE), CIDADE FROM ALUNO GROUP BY CIDADE HAVING COUNT(CIDADE)>3;