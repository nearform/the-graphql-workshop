CREATE TABLE owners(
  id SERIAL PRIMARY KEY,
  name VARCHAR (50) NOT NULL
);

CREATE TABLE dogs(
  id SERIAL PRIMARY KEY,
  name VARCHAR (50) NOT NULL,
  owner integer NOT NULL,
  CONSTRAINT fk_owner
    FOREIGN KEY(owner)
    REFERENCES owners(id)
);
