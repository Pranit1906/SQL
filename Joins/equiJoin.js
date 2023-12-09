/*
Equi Join

Equi Join: 
1. An equijoin is a join which contains an equality operator.
2. An equi join is a type of join that involves using the equality operator(=) 
  to match rows in two tables based on a specified column or columns.
3. It's essentially a specific case of an INNER JOIN where the join condition is based on equality.

Syntax:
SELECT tab1.fieldname, tab1.fieldname,
tab2.fieldname, tab2.fieldname,
FROM table1, table2
WHERE table1.fieldname = table2.fieldname

*/
/*

-- Example --
create table students (s_id int primary key, s_name varchar(120), age int);
desc students;
create table Courses(c_id int primary key, c_name varchar(220), s_id int, foreign key (s_id) references students(s_id));
desc Courses;
insert into students values(1,'Pranit Dubal',26),(2,'Sanit Dubal', 20),(3,'Pandurang Dubal', 56),(4, 'Sangeeta Dubal',53);
select * from students;
insert into Courses values(101,'Backend Developer', 1),(102, 'Electrical Equi', 3),(103, 'Teaching', 4),(104,'Software Developer',2),(105, 'Data Science', 2),(106, 'AI Learning',1);
select * from Courses;

select s.s_id, s.s_name as Student_Name, c.c_name as Course_Name, s.age as Age from students s, 
Courses c where s.s_id = c.s_id;  


*/