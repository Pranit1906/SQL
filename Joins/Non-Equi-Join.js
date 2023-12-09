/*


A non-equijoin, also known as a non-equi join, involves joining tables based on conditions other than equality. 
Instead of using the = operator, you might use operators like <, >, <=, >=, or other comparison operators. 
Here's an example using the same employees and departments tables:

-- Create a simple employees table
CREATE TABLE employees (
    employee_id INT,
    employee_name VARCHAR(255),
    department_id INT,
    salary INT
);

-- Insert some data into the employees table
INSERT INTO employees VALUES (1, 'Alice', 101, 50000);
INSERT INTO employees VALUES (2, 'Bob', 102, 60000);
INSERT INTO employees VALUES (3, 'Charlie', 101, 55000);
INSERT INTO employees VALUES (4, 'David', 103, 70000);

-- Create a simple departments table
CREATE TABLE departments (
    department_id INT,
    department_name VARCHAR(255),
    min_salary INT,
    max_salary INT
);

-- Insert some data into the departments table
INSERT INTO departments VALUES (101, 'HR', 50000, 60000);
INSERT INTO departments VALUES (102, 'IT', 60001, 70000);
INSERT INTO departments VALUES (103, 'Finance', 70001, 80000);


Now, let's say you want to find employees whose salaries fall within the salary range 
for their respective departments. 
You can use a non-equi join in this case:

SELECT employees.employee_id, employees.employee_name, employees.salary, departments.department_name
FROM employees
JOIN departments ON employees.department_id = departments.department_id
WHERE employees.salary >= departments.min_salary AND employees.salary <= departments.max_salary;


In this example, the non-equijoin condition is specified in the WHERE clause,
 using the >= and <= operators to match rows where the employee's salary falls 
 within the range specified for their department. 
The result would look like:

+-------------+---------------+--------+------------------+
| employee_id | employee_name | salary | department_name  |
+-------------+---------------+--------+------------------+
| 1           | Alice         | 50000  | HR               |
| 2           | Bob           | 60000  | IT               |
| 4           | David         | 70000  | Finance          |
+-------------+---------------+--------+------------------+

*/