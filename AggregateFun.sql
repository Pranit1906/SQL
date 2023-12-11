use assignments;
select * from employees;

-- Find Max Employee Salary --
select max(salary) as top_Salary, Name, Department   from employees;

-- Find Min Employee Salary --
select min(salary) as top_Salary, Name, Department  from employees;

-- Find Total no Of rows in employee Table --
select count(*) from employees ; 
-- count(*) will return count of rows in a Table

-- Find Salary Count in Employee Table --
select count(salary) from employees;

-- Find Unique Location for Employees to Work --
select distinct(Location) from employees;
-- distinct removes duplicate values --

-- Total Sum of Salary --
select sum(Salary) from employees; 

-- Find Sum of Salary for Unique Locations --
select distinct(Location), sum(salary) from employees group by Location;

select count(distinct(Salary)) from employees e where e.Salary <= Salary;