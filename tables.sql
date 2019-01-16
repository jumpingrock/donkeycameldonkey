CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    userid TEXT,
    pword TEXT
);
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    productid TEXT,
    brand TEXT,
    product_name TEXT,
    price INT,
    retailer TEXT,
    promo_text TEXT,
    product_pic TEXT    
);
CREATE TABLE IF NOT EXISTS itemFollowed(
    id SERIAL PRIMARY KEY,
    userid TEXT,
    productid TEXT
);