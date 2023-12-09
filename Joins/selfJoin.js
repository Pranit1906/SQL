/*

-- Self Join --
-It is used to compare or combine rows within the same table
-It uses table aliases to avoid repeating the same table name in a single query.
*/

/*
-- Example --
create table emp (emp_id int primary key, first_name varchar(50),last_name varchar(50), 
project varchar(120), reports_To int); 
desc emp;
insert into emp values(101, 'Pranit', 'Dubal', 'Car_sale', 103),(102, 'Sanit','Dubal', 'E-commerce',101),
(103,'Pandurang', 'Dubal','Pet Store',104),(104, 'Sangeeta','Dubal', null, null),(105, 'Yogesh','Yadav','Game',104);
select * from emp;

select concat(e.first_name,'',e.last_name) as Employee, 
concat(m.first_name,'',m.last_name) as Manager, e.project as Projected_Assign
from emp e, emp m where e.reports_TO = m.emp_id; 

*/