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
    price FLOAT,
    retailer TEXT,
    promo_text TEXT,
    product_pic TEXT    
);
CREATE TABLE IF NOT EXISTS itemfollowed(
    id SERIAL PRIMARY KEY,
    userid TEXT,
    productid TEXT
);