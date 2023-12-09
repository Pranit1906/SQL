/*
-- Inner Join --
- It returns all those rows that have matching values in both the tables based on the join condition.
- An INNER JOIN is used to retrieve records that have matching values in both tables. 
- It filters out the rows where there is no match between the tables based on the specified condition.

Syntax:
Select list_columns
From TableA  INNER JOIN TableB
On  A.key=B.key

*/

/*
-- Example 1 --
create table cricket(c_id int primary key, c_name varchar(20));
create table football(f_id int primary key, f_name varchar(20));
desc cricket;
desc football;
insert into cricket values(1, "Pranit"),(2, "Sanit"),(3, "Anish"),(4, "Atharva"),(5,"Aryan");
insert into football values(1, "Pranit"),(2, "Yogesh"),(3, "Sanit"),(4, "Nikhil"),(5,"Aryan"),(6, "Anish");
select * from cricket;
select * from football;

select c.c_name as Names, c.c_id as cricket_id, f.f_id as football_id  from cricket c 
inner join football f on c.c_name = f.f_name ;



*/

/*
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

*/



