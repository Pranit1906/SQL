/*

Natural Join :-
  i. A NATURAL JOIN is a type of join that automatically performs the join 
     by matching columns with the same name in both tables.
 ii. It's a shorthand for specifying an INNER JOIN with the ON clause 
     based on columns with the same name
iii. Syntax:- 
     SELECT * FROM tableA NATURAL JOIN tableB


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

select * from customer natural join orders;

*/