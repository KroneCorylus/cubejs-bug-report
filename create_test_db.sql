-- Create the 'brand' table
CREATE TABLE IF NOT EXISTS brand (
    id_brand INTEGER PRIMARY KEY,
    description TEXT
);

-- Create the 'model' table
CREATE TABLE IF NOT EXISTS model (
    id_model INTEGER PRIMARY KEY,
    id_brand INTEGER,
    description TEXT,
    FOREIGN KEY (id_brand) REFERENCES brand(id_brand)
);

-- Create the 'category' table
CREATE TABLE IF NOT EXISTS category (
    id_category TEXT PRIMARY KEY,
    description TEXT
);

-- Create the 'sub_category' table
CREATE TABLE IF NOT EXISTS sub_category (
    id_sub_category INTEGER PRIMARY KEY,
    id_category TEXT,
    description TEXT,
    FOREIGN KEY (id_category) REFERENCES category(id_category)
);

-- Create the 'product' table
CREATE TABLE IF NOT EXISTS product (
    id_product INTEGER PRIMARY KEY,
    description TEXT,
    id_model INTEGER,
    id_sub_category INTEGER,
    FOREIGN KEY (id_model) REFERENCES model(id_model),
    FOREIGN KEY (id_sub_category) REFERENCES sub_category(id_sub_category)
);

-- Create the 'fact' table
CREATE TABLE IF NOT EXISTS fact (
    id INTEGER PRIMARY KEY,
    id_product INTEGER,
    quantity INTEGER,
    FOREIGN KEY (id_product) REFERENCES product(id_product)
);


-- Populate 'brand' table
INSERT INTO brand (description) VALUES ('brand');
INSERT INTO brand (description) VALUES ('brand2');

-- Populate 'model' table
INSERT INTO model (id_brand, description) VALUES (1, 'model');
INSERT INTO model (id_brand, description) VALUES (2, 'model2');

-- Populate 'category' table
INSERT INTO category (id_category, description) VALUES ('category', 'Category 1');
INSERT INTO category (id_category, description) VALUES ('category2', 'Category 2');

-- Populate 'sub_category' table
INSERT INTO sub_category (id_category, description) VALUES ('category', 'Subcategory 1');
INSERT INTO sub_category (id_category, description) VALUES ('category2', 'Subcategory 2');

-- Populate 'product' table
INSERT INTO product (description, id_model, id_sub_category) VALUES ('product', 1, 1);
INSERT INTO product (description, id_model, id_sub_category) VALUES ('product2', 2, 1);
INSERT INTO product (description, id_model, id_sub_category) VALUES ('product3', 1, 2);

-- Populate 'fact' table
INSERT INTO fact (id_product, quantity) VALUES (1, 10);
INSERT INTO fact (id_product, quantity) VALUES (2, 20);
INSERT INTO fact (id_product, quantity) VALUES (3, 30);
