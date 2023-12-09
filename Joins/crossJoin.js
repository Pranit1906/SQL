/*
cross Join
 */
/*

-- Example --
-- Cross Join --
create table course (c_id int primary key, c_Name varchar(25));
create table student (s_id int primary key, s_Name varchar(25));
insert into course values(1, "Java"),(2,"Python"),(3,"C++");
insert into student values(1, "Pranit"),(2,"Sanit"),(3,"Mangesh"),(4,"Yogesh"),(5,"Anish");
select * from course;
select * from student;

select s.s_id, s.s_Name as student_name, c.c_Name as Course_Name from student s, course c;
*/