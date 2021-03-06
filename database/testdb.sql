-- SQL Manager Lite for PostgreSQL 6.3.2.55531
-- ---------------------------------------
-- Host      : localhost
-- Database  : testdb
-- Version   : PostgreSQL 10.16, compiled by Visual C++ build 1800, 64-bit



CREATE SCHEMA dashboard AUTHORIZATION postgres;
SET check_function_bodies = false;
--
-- Structure for table tutorials (OID = 24590) :
--
SET search_path = public, pg_catalog;
CREATE TABLE public.tutorials (
    id serial NOT NULL,
    title varchar(255),
    description varchar(255),
    publised boolean,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
)
WITH (oids = false);
--
-- Structure for table utilisateur (OID = 32781) :
--
SET search_path = dashboard, pg_catalog;
CREATE TABLE dashboard.utilisateur (
    id_utilisateur serial NOT NULL,
    nom_utilisateur varchar(20),
    matricule varchar(20),
    password_utilisateur varchar(20)
)
WITH (oids = false);
ALTER TABLE ONLY dashboard.utilisateur ALTER COLUMN id_utilisateur SET STATISTICS 0;
ALTER TABLE ONLY dashboard.utilisateur ALTER COLUMN nom_utilisateur SET STATISTICS 0;
ALTER TABLE ONLY dashboard.utilisateur ALTER COLUMN matricule SET STATISTICS 0;
ALTER TABLE ONLY dashboard.utilisateur ALTER COLUMN password_utilisateur SET STATISTICS 0;
--
-- Structure for table menu (OID = 32797) :
--
CREATE TABLE dashboard.menu (
    id_menu serial NOT NULL,
    nom_menu varchar(20),
    root_menu varchar(20),
    icon_menu varchar(20)
)
WITH (oids = false);
ALTER TABLE ONLY dashboard.menu ALTER COLUMN id_menu SET STATISTICS 0;
ALTER TABLE ONLY dashboard.menu ALTER COLUMN nom_menu SET STATISTICS 0;
ALTER TABLE ONLY dashboard.menu ALTER COLUMN root_menu SET STATISTICS 0;
ALTER TABLE ONLY dashboard.menu ALTER COLUMN icon_menu SET STATISTICS 0;
SET search_path = public, pg_catalog;
--
-- Data for table public.tutorials (OID = 24590) (LIMIT 0,1)
--
INSERT INTO tutorials (id, title, description, publised, "createdAt", "updatedAt")
VALUES (4, 'fgdfgdg', 'dfgdfgdfg', NULL, '2022-05-10 10:17:59.271712+03', '2022-05-10 10:17:59.271712+03');

SET search_path = dashboard, pg_catalog;
--
-- Data for table dashboard.utilisateur (OID = 32781) (LIMIT 0,2)
--
INSERT INTO utilisateur (id_utilisateur, nom_utilisateur, matricule, password_utilisateur)
VALUES (3, 'test', 'test', 'test');

INSERT INTO utilisateur (id_utilisateur, nom_utilisateur, matricule, password_utilisateur)
VALUES (4, 'test ihany', 'test ihany', 'test ihany');

--
-- Data for table dashboard.menu (OID = 32797) (LIMIT 0,2)
--
INSERT INTO menu (id_menu, nom_menu, root_menu, icon_menu)
VALUES (1, 'Accueil', 'accueil', 'fa-solid fa-house');

INSERT INTO menu (id_menu, nom_menu, root_menu, icon_menu)
VALUES (2, 'Paramètres', 'parametre', 'fa-solid fa-gear');

--
-- Definition for index tutorials_pkey (OID = 24597) :
--
SET search_path = public, pg_catalog;
ALTER TABLE ONLY tutorials
    ADD CONSTRAINT tutorials_pkey
    PRIMARY KEY (id);
--
-- Definition for index utilisateur_pkey (OID = 32785) :
--
SET search_path = dashboard, pg_catalog;
ALTER TABLE ONLY utilisateur
    ADD CONSTRAINT utilisateur_pkey
    PRIMARY KEY (id_utilisateur);
--
-- Definition for index menu_pkey (OID = 32801) :
--
ALTER TABLE ONLY menu
    ADD CONSTRAINT menu_pkey
    PRIMARY KEY (id_menu);
--
-- Data for sequence public.tutorials_id_seq (OID = 24588)
--
SET search_path = public, pg_catalog;
SELECT pg_catalog.setval('tutorials_id_seq', 4, true);
--
-- Data for sequence dashboard.utilisateur_id_utilisateur_seq (OID = 32779)
--
SET search_path = dashboard, pg_catalog;
SELECT pg_catalog.setval('utilisateur_id_utilisateur_seq', 5, true);
--
-- Data for sequence dashboard.menu_id_menu_seq (OID = 32795)
--
SELECT pg_catalog.setval('menu_id_menu_seq', 2, true);
--
-- Comments
--
COMMENT ON SCHEMA public IS 'standard public schema';
