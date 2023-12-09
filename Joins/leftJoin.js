/*
-- left Join --
*/

/*
-- Example --
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
*/