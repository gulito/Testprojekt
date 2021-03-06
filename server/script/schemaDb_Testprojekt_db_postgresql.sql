--
-- Database: testprojekt_db
--

CREATE DATABASE testprojekt_db;

-- ENTITIES

--
-- Schema entity bereich
--

CREATE TABLE IF NOT EXISTS "bereich" (
	Bereichsbeschreibung varchar(130)  NOT NULL,
	Bereichsname varchar(130)  NOT NULL,
	bereichsbild varchar(30) ,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity tool
--

CREATE TABLE IF NOT EXISTS "tool" (
	Inhalt varchar(30)  NOT NULL,
	Tooltitel varchar(130)  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity user
--

CREATE TABLE IF NOT EXISTS "user" (
	mail varchar(130) ,
	name varchar(130) ,
	password varchar(130)  NOT NULL,
	roles varchar(130) ,
	surname varchar(130) ,
	username varchar(130)  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);


-- Security

ALTER TABLE "user" ALTER COLUMN "password" TYPE varchar(128);

INSERT INTO "user" (username, password, _id) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS "roles" (
	role varchar(30) ,
	
	-- RELAZIONI

	_user INTEGER  NOT NULL REFERENCES "user"(_id),
	_id SERIAL PRIMARY KEY 

);
INSERT INTO "roles" (role, _user, _id) VALUES ('ADMIN', '1', 1);




-- relation 1:m bereich Tool - Bereich
ALTER TABLE tool ADD COLUMN bereich INTEGER  REFERENCES "bereich"(_id);
