DROP TABLE IF EXISTS TB_HEROIS;
create table TB_HEROIS (
    ID INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL,
    NOME TEXT NOT NULL,
    PODER TEXT NOT NULL
);

-- Create
INSERT INTO TB_HEROIS (NOME, PODER)
VALUES
    ('Flash', 'Velocidade'),
    ('Aquaman', 'Falar com os peixes'),
    ('Batman', 'Dinheiro');

--  Listar
SELECT * FROM TB_HEROIS;
SELECT * FROM TB_HEROIS WHERE NOME = "Flash";

-- update

UPDATE TB_HEROIS
SET NOME = 'Goku', PODER = 'Super saiyajin'
WHERE ID = 1;

-- delete

DELETE FROM TB_HEROIS WHERE ID = 2