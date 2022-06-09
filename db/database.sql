-- Database: carros

-- DROP DATABASE IF EXISTS carros;

CREATE DATABASE carros
    WITH
    OWNER = carros
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

-- Table: public.clients

-- DROP TABLE IF EXISTS public.clients;

CREATE TABLE IF NOT EXISTS public.clients
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    name text COLLATE pg_catalog."default" NOT NULL,
    cpf text COLLATE pg_catalog."default",
    cnpj text COLLATE pg_catalog."default",
    adress text COLLATE pg_catalog."default",
    "number" numeric,
    complement text COLLATE pg_catalog."default",
    district text COLLATE pg_catalog."default",
    city text COLLATE pg_catalog."default",
    state text COLLATE pg_catalog."default",
    phone text COLLATE pg_catalog."default",
    cell text COLLATE pg_catalog."default",
    CONSTRAINT clients_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.clients
    OWNER to carros;
