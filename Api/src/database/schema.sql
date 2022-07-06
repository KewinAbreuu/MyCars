CREATE DATABASE mycars;

CREATE EXTENSION "uuid-ossp";

CREATE TABLE IF NOT EXISTS  cars(
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  marca VARCHAR NOT NULL,
  cor VARCHAR NOT NULL,
  ano VARCHAR NOT NULL,
  placa VARCHAR NOT NULL,
  descricao VARCHAR NOT NULL);
