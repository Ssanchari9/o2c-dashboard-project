CREATE DATABASE o2c_project;

USE o2c_project;

CREATE TABLE invoices (
  Invoice_ID INT,
  Customer_ID INT,
  Invoice_Date DATE,
  Due_Date DATE,
  Payment_Date DATE,
  Invoice_Amount FLOAT,
  Region VARCHAR(50)
);
