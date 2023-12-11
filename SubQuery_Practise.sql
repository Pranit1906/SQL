-- Nested SubQuery --
-- Also Knows As Bottom Up SubQuery --
-- subQuery Inner Query will return multiple values and provide list of value to Outer Query --

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


-- Multiple Column SubQuery --
select * from employees where (Department, Location) in (select Department,Location from employees where salary >=  5000);


-- Correlated Query (Synchronized Query) --
-- uses outer query value to slve Inner Query --
-- Top to Bottom Approach --
-- Outer Query Value will get compare with all values of Inner Query Till all outer Values gets over --

create table emp (e_id int primary key, name varchar(100), Location varchar(70));
create table dept(d_id int primary key, d_name varchar(100), e_id int, foreign key(e_id) references emp(e_id));
desc emp;
desc dept;
insert into emp values(1, "A", "Delhi"),(2, "B", "Mumbai"),(3, "C", "Gujurat"),(4, "D", "Rajasthan"),(5,"E","Punjab"),(6,"F","Gurgaon");
select* from emp;
insert into dept values(101,"IT",1),(102,"EC",3),(103,"CIVIL",4),(104,"Marketing",2);
select* from dept;

-- Find ALL Employess working and alotted a Department --
select * from emp where exists(select * from dept where emp.e_id = dept.e_id);
-- here for each e_id value Inner query compares each d_id till it finds a Match --
-- Exists operator returns True as Output so to confirm presence of e_id --

select * from employees;

-- https://stackoverflow.com/questions/15474216/nth-max-salary-query-in-sql --
-- find highest salary from emp table with all details --
select * from employees e1 where 1 = (select count(distinct(e2.Salary)) from employees e2 where e1.Salary<=e2.Salary);
-- 1 = count(salary)  ==> for each value we shall find count where e1.Salary <= e2.Salary  --
-- here e1.Salary will be first Salary Value from e1 table --
--  e2.Salary will values from e2 table --
-- after comparsion we shall have highest value of Salary from e2 table with count --
-- and count matches the 1 in Main query we shall get our 1st highest salary -- 


-- for highest salary we use <= --

-- find highest salary from emp table with all details --
select * from employees e1 where 1 = (select count(distinct(e2.Salary)) from employees e2 where e1.Salary>=e2.Salary);
-- for Lowest salary we use >= --

