INSERT INTO users (userid, pword) VALUES ('keenkeen', 'hundredacrewood' );
INSERT INTO users (userid, pword) VALUES ('ken', '12345');
INSERT INTO users (userid, pword) VALUES ('blackie', 'blackie');
INSERT INTO products (productid, brand, product_name, price, retailer ,promo_text ,product_pic) VALUES ('kssnv', 'kettle', 'SEA SALT AND VINEGAR',3.95, 'NTUC', '','https://s3-ap-southeast-1.amazonaws.com/www8.fairprice.com.sg/fpol/media/images/product/L/11461590_L1.jpg');
INSERT INTO products (productid, brand, product_name, price, retailer ,promo_text ,product_pic) VALUES ('kssnv', 'kettle', 'SEA SALT AND VINEGAR',4.95, 'Cold Storage', '','https://vendorcontentportal.s3.ap-southeast-1.amazonaws.com/product_thumb/084114009968.jpg');
INSERT INTO products (productid, brand, product_name, price, retailer ,promo_text ,product_pic) VALUES ('khd', 'kettle', 'HONEY DIJON',3.95, 'NTUC', '','https://s3-ap-southeast-1.amazonaws.com/www8.fairprice.com.sg/fpol/media/images/product/L/11461574_L1.jpg');
INSERT INTO products (productid, brand, product_name, price, retailer ,promo_text ,product_pic) VALUES ('khd', 'kettle', 'HONEY DIJON',4.95, 'Cold Storage', '','https://vendorcontentportal.s3.ap-southeast-1.amazonaws.com/product_thumb/084114030702.jpg');
INSERT INTO products (productid, brand, product_name, price, retailer ,promo_text ,product_pic) VALUES ('kss', 'kettle', 'SEA SALT',3.95, 'NTUC', '','https://s3-ap-southeast-1.amazonaws.com/www8.fairprice.com.sg/fpol/media/images/product/L/11461603_L1.jpg');
INSERT INTO products (productid, brand, product_name, price, retailer ,promo_text ,product_pic) VALUES ('kss', 'kettle', 'SEA SALT',4.95, 'Cold Storage', '','https://vendorcontentportal.s3.ap-southeast-1.amazonaws.com/product_thumb/084114009982_1.jpg');
INSERT INTO products (productid, brand, product_name, price, retailer ,promo_text ,product_pic) VALUES ('kbb', 'kettle', 'BACKYARD BARBEQUE',3.95, 'NTUC', '','https://s3-ap-southeast-1.amazonaws.com/www8.fairprice.com.sg/fpol/media/images/product/L/13018923_L1.jpg');
INSERT INTO products (productid, brand, product_name, price, retailer ,promo_text ,product_pic) VALUES ('kkb', 'kettle', 'KOREAN BARBEQUE',4.95, 'Cold Storage', '','https://vendorcontentportal.s3.ap-southeast-1.amazonaws.com/product_thumb/KTT-12957-1.jpg');
INSERT INTO products (productid, brand, product_name, price, retailer ,promo_text ,product_pic) VALUES ('scno', 'lays', 'SOUR CREAM AND ONION', 4.60, 'NTUC', 'Buy any 2 and get $0.55 off','https://s3-ap-southeast-1.amazonaws.com/www8.fairprice.com.sg/fpol/media/images/product/L/328387_L1.jpg');
INSERT INTO products (productid, brand, product_name, price, retailer ,promo_text ,product_pic) VALUES ('scno', 'lays', 'SOUR CREAM AND ONION', 4.35, 'Cold Storage', '','https://vendorcontentportal.s3.ap-southeast-1.amazonaws.com/product_thumb/1005636_1528885405625.jpg');
INSERT INTO products (productid, brand, product_name, price, retailer ,promo_text ,product_pic) VALUES ('clas', 'lays', 'CLASSIC', 4.60, 'NTUC', 'Buy any 2 and get $0.55 off','https://s3-ap-southeast-1.amazonaws.com/www8.fairprice.com.sg/fpol/media/images/product/L/328379_L1.jpg');
INSERT INTO products (productid, brand, product_name, price, retailer ,promo_text ,product_pic) VALUES ('clas', 'lays', 'CLASSIC', 4.35, 'Cold Storage', '','https://vendorcontentportal.s3.ap-southeast-1.amazonaws.com/product_thumb/1005662_1528887646982.jpg');
INSERT INTO products (productid, brand, product_name, price, retailer ,promo_text ,product_pic) VALUES ('guin', 'burts', 'GUINNESS POTATO CHIPS', 5.50, 'NTUC', '','https://s3-ap-southeast-1.amazonaws.com/www8.fairprice.com.sg/fpol/media/images/product/L/13127391_L1.jpg');
INSERT INTO products (productid, brand, product_name, price, retailer ,promo_text ,product_pic) VALUES ('bluc', 'terra', 'POTATO CHIPS BLUES', 6.95, 'Cold Storage', '','https://coldstorage.com.sg/assets/easyimage/0/0f208f2d3fe35a955c0cfdd811598b91.jpg');

INSERT INTO itemfollowed(userid, productid) VALUES ('ken', 'khd');
INSERT INTO itemfollowed(userid, productid) VALUES ('ken', 'bluc');
INSERT INTO itemfollowed(userid, productid) VALUES ('ken', 'kssnv');