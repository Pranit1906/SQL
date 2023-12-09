use practise;

-- Equal Join--
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


-- Inner Join --
-- Example 1 --
create table cricket(c_id int primary key, c_name varchar(20));
create table football(f_id int primary key, f_name varchar(20));
desc cricket;
desc football;
insert into cricket values(1, "Pranit"),(2, "Sanit"),(3, "Anish"),(4, "Atharva"),(5,"Aryan");
insert into football values(1, "Pranit"),(2, "Yogesh"),(3, "Sanit"),(4, "Nikhil"),(5,"Aryan"),(6, "Anish");
select * from cricket;
select * from football;
select c.c_name as Names, c.c_id as cricket_id, f.f_id as football_id  from cricket c inner join football f on c.c_name = f.f_name ;


-- Example 2 --
create table product (prod_id int primary key, cost_price int);
create table sales (sale_id int primary key, prod_id int, foreign key (prod_id) references product(prod_id), sell_price int, quantity int); 
insert into product values(121, 290),(125, 310),(131, 330);
insert into sales values(1, 125, 340, 4),(2, 121, 310, 2),(3, 125, 335, 3),(4, 131, 360, 5),
(5, 131, 390, 2),(6, 125, 340, 6),(7, 131, 354, 3),(8,121, 300, 10); 
select * from product;
select * from sales;
select p.prod_id, sum((s.sell_price - p.cost_price)*s.quantity) as Overall_profit, sum(s.quantity) as Quantity 
from sales s inner join product p on s.prod_id = p.prod_id group by p.prod_id;  



-- left Join --
create table customer (cust_id int primary key, cust_name varchar(20));
create table orders (order_id int primary key, amount int, cust_id int);
insert into customer values(1, "Pranit"),(2, "Sanit"),(3, "Yogesh"),(4, "Mangesh");
insert into orders values(1, 450, 8),(2, 350, 4),(3, 150, 1),(4, 200, 2),(5, 340, 7),(6, 330, 3);
desc customer;
desc orders;
select * from customer;
select * from orders;

select c.cust_id, c.cust_name as Customer_Name, o.order_id as Order_Id, o.amount as Total_Amount
from customer c left join orders o on c.cust_id = o.cust_id;
select c.cust_id, c.cust_name as Customer_Name, o.order_id as Order_Id, o.amount as Total_Amount
from orders o left join customer c on c.cust_id = o.cust_id;


-- Right Join --
select * from customer right join orders on customer.cust_id = orders.cust_id;
select * from orders right join customer on customer.cust_id = orders.cust_id;


-- Natural Join --
select * from customer natural join orders;

-- Self Join --
create table emp (emp_id int primary key, first_name varchar(50),last_name varchar(50), 
project varchar(120), reports_To int); 
desc emp;
insert into emp values(101, 'Pranit', 'Dubal', 'Car_sale', 103),(102, 'Sanit','Dubal', 'E-commerce',101),
(103,'Pandurang', 'Dubal','Pet Store',104),(104, 'Sangeeta','Dubal', null, null),(105, 'Yogesh','Yadav','Game',104);
select * from emp;

select concat(e.first_name,'',e.last_name) as Employee, 
concat(m.first_name,'',m.last_name) as Manager, e.project as Projected_Assign
from emp e, emp m where e.reports_TO = m.emp_id; 


-- Cross Join --
create table course (c_id int primary key, c_Name varchar(25));
create table student (s_id int primary key, s_Name varchar(25));
insert into course values(1, "Java"),(2,"Python"),(3,"C++");
insert into student values(1, "Pranit"),(2,"Sanit"),(3,"Mangesh"),(4,"Yogesh"),(5,"Anish");
select * from course;
select * from student;

select s.s_id, s.s_Name as student_name, c.c_Name as Course_Name from student s, course c;

