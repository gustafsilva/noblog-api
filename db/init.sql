CREATE TABLE Author(
  code_author SERIAL PRIMARY KEY,
  email VARCHAR(80) UNIQUE NOT NULL,
  name VARCHAR(50) NOT NULL,
  password CHAR(32) NOT NULL,
  status BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE Post(
  code_post SERIAL NOT NULL,
  code_author INT REFERENCES Author NOT NULL,
  title VARCHAR(80) NOT NULL,
  body VARCHAR(1000) NOT NULL,
  views INT NOT NULL DEFAULT 0,
  date_creation TIMESTAMP DEFAULT NOW(),
  date_modification TIMESTAMP,
  status BOOLEAN NOT NULL DEFAULT TRUE,

  PRIMARY KEY(code_post, code_author)
);

CREATE TABLE Tag(
  code_tag SERIAL PRIMARY KEY,
  title VARCHAR(30) UNIQUE NOT NULL,
  status BOOLEAN NOT NULL DEFAULT TRUE
);  

CREATE TABLE PostTag(
  code_post INT NOT NULL,
  code_author INT NOT NULL,
  code_tag INT REFERENCES Tag(code_tag) NOT NULL,
  status BOOLEAN NOT NULL DEFAULT TRUE,  
  
  PRIMARY KEY(code_post, code_author, code_tag),
  FOREIGN KEY (code_post, code_author) REFERENCES Post(code_post, code_author) 
);