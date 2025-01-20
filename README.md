# SQL Schema for E-commerce System

This repository contains the SQL schema for an e-commerce platform. The database consists of several tables, each designed to handle various aspects of the platform, including users, companies, products, orders, and carts.

## Tables Overview

### 1. Users Table
The `users` table stores information about the platform's users.

| Column Name   | Description                                      |
|---------------|--------------------------------------------------|
| id            | A unique identifier for each user (UUID).        |
| name          | The user's name.                                 |
| email         | The user's email address (unique).               |
| phone         | The user's phone number.                         |
| address       | The user's address.                              |
| created_at    | Timestamp of when the user was created.          |

### 2. Companies Table
The `companies` table stores information about the companies selling products on the platform.

| Column Name   | Description                                      |
|---------------|--------------------------------------------------|
| id            | A unique identifier for each company (UUID).     |
| name          | The name of the company.                         |
| email         | The company's email address (unique).            |
| phone         | The company's phone number (unique).             |
| address       | The company's address (unique).                  |
| user_id       | The associated user (UUID) who manages the company.|
| created_at    | Timestamp of when the company was created.       |

### 3. Product Variations Table
The `product_variations` table groups variations under a common name for products.

| Column Name   | Description                                      |
|---------------|--------------------------------------------------|
| id            | A unique identifier for each product variation (UUID). |
| name          | The name of the product variation.               |
| company_id    | The company offering the product variation.      |
| created_at    | Timestamp of when the variation was created.     |

### 4. Products Table
The `products` table stores details about individual products available for sale.

| Column Name         | Description                                                  |
|---------------------|--------------------------------------------------------------|
| id                  | A unique identifier for each product (UUID).                 |
| name                | The name of the product.                                     |
| description         | A description of the product.                                |
| price               | The price of the product (must be non-negative).             |
| image_urls          | An array of image URLs for the product.                      |
| stock               | The number of items in stock.                                |
| product_variation_id| A reference to the product variation (nullable).             |
| company_id          | The company offering the product.                            |
| created_at          | Timestamp of when the product was created.                   |

### 5. Carts Table
The `carts` table stores items that users have added to their shopping cart.

| Column Name   | Description                                          |
|---------------|------------------------------------------------------|
| id            | A unique identifier for the cart (UUID).            |
| user_id       | The user to whom the cart belongs.                  |
| items         | A JSONB array of items in the cart.                 |
| created_at    | Timestamp of when the cart was created.              |

### 6. Orders Table
The `orders` table stores details about completed orders.

| Column Name   | Description                                          |
|---------------|------------------------------------------------------|
| id            | A unique identifier for the order (UUID).           |
| user_id       | The user who placed the order.                       |
| items         | A JSONB array of items in the order.                 |
| total         | The total price of the order.                        |
| status        | The status of the order (e.g., "pending", "completed").|
| created_at    | Timestamp of when the order was created.             |

## Relationships

- Each user can have multiple companies (`user_id` in `companies`).
- Each company can have multiple product variations (`company_id` in `product_variations`).
- Each product variation can contain multiple products (`product_variation_id` in `products`).
- Each user can have one shopping cart (`user_id` in `carts`).
- Each user can place multiple orders (`user_id` in `orders`).

## Website Areas

- Public
    - Main Page (having general products displayed)
    - Product Page
    - Login/Signup
- User
    - Cart
    - Orders
- Admin
    - General Settings
    - New/Edit Product
    - New/Edit Product Variation

jsonb to json
