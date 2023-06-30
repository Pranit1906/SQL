/*

ITEMS_ORDERED:

customerid	      order_date	  item	      quantity   price

10330	         30-Jun-1999	Pogo stick  	1	      28.00

10101	         30-Jun-1999	   Raft	        1	      58.00

10298	          01-Jul-1999	 Skateboard	    1	      33.00

10101	          01-Jul-1999	 Life Vest	    4	      125.00

10299	          06-Jul-1999	 Parachute	    1	      1250.00

10339	          27-Jul-1999	 Umbrella	    1 	       4.50

10449	          13-Aug-1999	 Unicycle	    1 	      180.79



CUSTOMERS:

customerid	             firstname	   lastname	        city	         state	 

10101	                John	        Gray	       Lynden	         Washington

10298	                Leroy	       Brown	       Pinetop	         Arizona

10299	                Elroy	        Keller	       Snoqualmie      Washington

10315	                Lisa	       Jones	       Oshkosh	        Wisconsin

10325	                Ginger	        Schultz	      Pocatello	        Idaho

10329	                Kelly	       Mendoza	        Kailua	         Hawaii

10330	                Shawn	       Dalton	       Cannon Beach      Oregon

10338	                Michael	        Howell	        Tillamook	     Oregon

10339	               Anthony	         Sanchez	      Winslow	    Arizona

10408	                Elroy	        Cleaver	           Globe	    Arizona

mysql> desc customers;
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| customerId | int         | NO   | PRI | NULL    |       |
| firstName  | varchar(20) | YES  |     | NULL    |       |
| lastName   | varchar(20) | YES  |     | NULL    |       |
| city       | varchar(20) | YES  |     | NULL    |       |
| State      | varchar(25) | YES  |     | NULL    |       |
+------------+-------------+------+-----+---------+-------+
5 rows in set (0.02 sec)

mysql> desc item_ordered;
+------------+---------------+------+-----+---------+-------+
| Field      | Type          | Null | Key | Default | Extra |
+------------+---------------+------+-----+---------+-------+
| customerId | int           | NO   |     | NULL    |       |
| order_date | varchar(20)   | YES  |     | NULL    |       |
| item       | varchar(20)   | YES  |     | NULL    |       |
| quantity   | int           | YES  |     | NULL    |       |
| price      | decimal(10,2) | YES  |     | NULL    |       |
+------------+---------------+------+-----+---------+-------+
5 rows in set (0.00 sec)

mysql> select * from customers;
+------------+-----------+----------+--------------+------------+
| customerId | firstName | lastName | city         | State      |
+------------+-----------+----------+--------------+------------+
|      10101 | John      | Gray     | Lynden       | Washington |
|      10298 | Leroy     | Brown    | Pinetop      | Arizona    |
|      10299 | Elroy     | Keller   | Lynden       | Washington |
|      10315 | Lisa      | Jones    | Oshkosh      | Wisconsin  |
|      10325 | Ginger    | Schultz  | Pocatello    | Idaho      |
|      10329 | Kelly     | Mendoza  | Kailua       | Hawaii     |
|      10330 | Shawn     | Dalton   | Cannon Beach | Oregon     |
|      10338 | Michael   | Howell   | Tillamook    | Oregon     |
|      10339 | Anthony   | Sanchez  | Winslow      | Arizona    |
|      10408 | Elroy     | Cleaver  | Globe        | Arizona    |
+------------+-----------+----------+--------------+------------+
10 rows in set (0.01 sec)

mysql> select * from item_ordered;
+------------+-------------+------------+----------+---------+
| customerId | order_date  | item       | quantity | price   |
+------------+-------------+------------+----------+---------+
|      10330 | 30-Jun-1999 | Pogo Stick |        1 |   28.00 |
|      10101 | 30-Jun-1999 | Raft       |        1 |   58.00 |
|      10298 | 01-Jul-1999 | Skateboard |        1 |   33.00 |
|      10101 | 01-Jul-1999 | Life Vest  |        4 |  125.00 |
|      10299 | 06-Jul-1999 | Parachute  |        1 | 1250.00 |
|      10339 | 27-Jul-1999 | Umbrella   |        1 |    4.50 |
|      10449 | 13-Aug-1999 | Unicycle   |        1 |  180.79 |
+------------+-------------+------------+----------+---------+
7 rows in set (0.00 sec)

1.How many people are in each unique state in the customers table? Select the state and display the number of people in each. 
Hint: count is used to count rows in a column, sum works on numeric data only.

mysql> select count(customerId) as countOfPeople,State from customers group by State order by count(customerId) DESC;
+---------------+------------+
| countOfPeople | State      |
+---------------+------------+
|             3 | Arizona    |
|             2 | Washington |
|             2 | Oregon     |
|             1 | Wisconsin  |
|             1 | Idaho      |
|             1 | Hawaii     |
+---------------+------------+
6 rows in set (0.00 sec)


2.From the items_ordered table, select the item, maximum price, and minimum price for each specific item in the table. 
Hint: The items will need to be broken up into separate groups. separate commom id into two.

mysql> select item, price as Maximum_price from item_ordered where item in (select item from item_ordered) order by price Desc;
+------------+---------------+
| item       | Maximum_price |
+------------+---------------+
| Parachute  |       1250.00 |
| Unicycle   |        180.79 |
| Life Vest  |        125.00 |
| Raft       |         58.00 |
| Skateboard |         33.00 |
| Pogo Stick |         28.00 |
| Umbrella   |          4.50 |
+------------+---------------+
7 rows in set (0.00 sec)

mysql> select item, price as Mimimum_price from item_ordered where item in (select item from item_ordered) order by price;
+------------+---------------+
| item       | Mimimum_price |
+------------+---------------+
| Umbrella   |          4.50 |
| Pogo Stick |         28.00 |
| Skateboard |         33.00 |
| Raft       |         58.00 |
| Life Vest  |        125.00 |
| Unicycle   |        180.79 |
| Parachute  |       1250.00 |
+------------+---------------+
7 rows in set (0.00 sec)


3.How many orders did each customer make? Use the items_ordered table. Select the customerid, number of orders they made, 
and the sum of their orders. 


mysql> select customerId,count(item) as Item_count,sum(price) as Total from item_ordered group by customerId;
+------------+------------+---------+
| customerId | Item_count | Total   |
+------------+------------+---------+
|      10330 |          1 |   28.00 |
|      10101 |          2 |  183.00 |
|      10298 |          1 |   33.00 |
|      10299 |          1 | 1250.00 |
|      10339 |          1 |    4.50 |
|      10449 |          1 |  180.79 |
+------------+------------+---------+
6 rows in set (0.00 sec)

*/