create table books(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    isbn VARCHAR(20) NOT NULL,
    openId VARCHAR(50) NOT NULL,
    titile VARCHAR(100) NOT NULL,
    image VARCHAR(100),
    alt  VARCHAR(100) NOT NULL,
    publisher  VARCHAR(100) NOT NULL,
    summary  VARCHAR(1000) NOT NULL,
    price  VARCHAR(100),
    rate  FLOAT,
    tags  VARCHAR(100),
    author VARCHAR(100)
);