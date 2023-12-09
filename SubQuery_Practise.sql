use assignments;
show tables;
select * from customer_table;
select * from order_table;

--  Find the details of the customers whose details is not in the customer table. --
select Cust_Id from customer_table where Cust_Id in (select Cust_Id from customer_table where Name is null); 

-- The customer details who have not placed an order --
select * from customer_table where Cust_Id  not in (select Cust_Id from order_table);

-- Find the name of the customers who has purchased laptop. --
select Cust_Id,  Name from customer_table  where Cust_Id in (select Cust_Id from order_table  where Prod_Name = 'Laptop');  

-- Find the details of customers who purchased iphone. --
select * from customer_table where Cust_Id in (select Cust_Id from order_table where Prod_name = 'Iphone');

--   How many customers from customers table has made an order. --
select Cust_Id,count(Cust_Id), Name as Total_Count_Order_Placed from customer_table 
where Cust_Id in (select Cust_Id from order_table) group by Cust_Id;


-- Single Row SubQuery --
select * from employee;

select Name, Department, Salary from employee where Salary < (select Avg(Salary) from employee);


-- Multiple Row SubQuery --
-- Exists Operator --
-- Returns True if Row Exists and will ignore row which is not present in table 2 --
select * from customer_table;
select * from order_table;
select * from customer_table c where exists(select 1 from order_table o where o.Cust_Id = c.Cust_Id);


-- In Operator --
-- In is similar to = --
select c.Cust_Id, c.Name from customer_table c where Cust_Id in 
(select Cust_Id from order_table where Prod_Name in('Laptop','TV'));


-- Any Operator --
-- Any compares with any value from value sets --
select * from employees;
-- Inner Query Gives Us Min Salary of Emp located at Chennai --
-- Outer Query will then compared depending on inner o/p --
select Name, Department, Salary from employees where Salary < ANY
(select min(salary) from employees where Location = 'Chennai');


-- All Operator --
select Name, Department, Salary from employees where Salary >= ALL
(select min(salary) from employees where Location = 'Chennai');
