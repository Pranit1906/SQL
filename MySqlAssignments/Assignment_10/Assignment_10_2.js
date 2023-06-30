/*


ITEMS_ORDERED:

customerid	              order_date	     item	       quantity	       price

10330	               30-Jun-1999	     Pogo stick	          1	           28.00

10101	               30-Jun-1999	     Raft	              1	           58.00

10298	               01-Jul-1999	     Skateboard	          1	           33.00

10101	               01-Jul-1999	      Life Vest	          4	           125.00

10299	               06-Jul-1999	      Parachute	          1	          1250.00

10339	               27-Jul-1999	     Umbrella	          1	            4.50

10449	               13-Aug-1999	     Unicycle	          1	           180.79

10439	               14-Aug-1999	     Ski Poles	          2	            25.50

10101	              18-Aug-1999	      Rain Coat	          1	            18.30

CUSTOMERS:

customerid	firstname	     lastname	      city	                 state	 

10101	     John	           Gray	         Lynden	               Washington

10298	     Leroy	           Brown	     Pinetop	            Arizona

10299	     Elroy	           Keller 	     Snoqualmie	           Washington

10315	     Lisa	           Jones	     Oshkosh	           Wisconsin

10325	     Ginger	           Schultz	     Pocatello	            Idaho

10329	     Kelly	           Mendoza	     Kailua	                Hawaii

10330	     Shawn	            Dalton	     Cannon Beach	        Oregon

10338	     Michael	        Howell   	 Tillamook	            Oregon

10339	     Anthony	        Sanchez	      Winslow               Arizona

10408	      Elroy	            Cleaver	      Globe               	Arizona

1.Write a query using a join to determine which items were ordered by each of the customers in the customers table.
Select the customerid, firstname, lastname, order_date, item, and price for everything each customer purchased in the items_ordered table.

mysql> select  customers.customerId, concat(customers.firstname," ",customers.lastname) as Name, item_ordered.order_date, item_ordered.item,item_ordered.price
from item_ordered right join customers on customers.customerId = Item_ordered.customerId;
+------------+-----------------+-------------+------------+---------+
| customerId | Name            | order_date  | item       | price   |
+------------+-----------------+-------------+------------+---------+
|      10101 | John Gray       | 18-Aug-1999 | Rain Coat  |   18.30 |
|      10101 | John Gray       | 01-Jul-1999 | Life Vest  |  125.00 |
|      10101 | John Gray       | 30-Jun-1999 | Raft       |   58.00 |
|      10298 | Leroy Brown     | 01-Jul-1999 | Skateboard |   33.00 |
|      10299 | Elroy Keller    | 06-Jul-1999 | Parachute  | 1250.00 |
|      10315 | Lisa Jones      | NULL        | NULL       |    NULL |
|      10325 | Ginger Schultz  | NULL        | NULL       |    NULL |
|      10329 | Kelly Mendoza   | NULL        | NULL       |    NULL |
|      10330 | Shawn Dalton    | 30-Jun-1999 | Pogo Stick |   28.00 |
|      10338 | Michael Howell  | NULL        | NULL       |    NULL |
|      10339 | Anthony Sanchez | 27-Jul-1999 | Umbrella   |    4.50 |
|      10408 | Elroy Cleaver   | NULL        | NULL       |    NULL |
+------------+-----------------+-------------+------------+---------+
12 rows in set (0.00 sec)

2.Repeat exercise #1, however display the results sorted by state in descending order

mysql> select  customers.customerId, concat(customers.firstname," ",customers.lastname) as Name, item_ordered.order_date, item_ordered.item,item_ordered.price,customers.State 
from item_ordered right join customers on customers.customerId = Item_ordered.customerId order by customers.State Desc;
+------------+-----------------+-------------+------------+---------+------------+
| customerId | Name            | order_date  | item       | price   | State      |
+------------+-----------------+-------------+------------+---------+------------+
|      10315 | Lisa Jones      | NULL        | NULL       |    NULL | Wisconsin  |
|      10101 | John Gray       | 18-Aug-1999 | Rain Coat  |   18.30 | Washington |
|      10101 | John Gray       | 01-Jul-1999 | Life Vest  |  125.00 | Washington |
|      10101 | John Gray       | 30-Jun-1999 | Raft       |   58.00 | Washington |
|      10299 | Elroy Keller    | 06-Jul-1999 | Parachute  | 1250.00 | Washington |
|      10330 | Shawn Dalton    | 30-Jun-1999 | Pogo Stick |   28.00 | Oregon     |
|      10338 | Michael Howell  | NULL        | NULL       |    NULL | Oregon     |
|      10325 | Ginger Schultz  | NULL        | NULL       |    NULL | Idaho      |
|      10329 | Kelly Mendoza   | NULL        | NULL       |    NULL | Hawaii     |
|      10298 | Leroy Brown     | 01-Jul-1999 | Skateboard |   33.00 | Arizona    |
|      10339 | Anthony Sanchez | 27-Jul-1999 | Umbrella   |    4.50 | Arizona    |
|      10408 | Elroy Cleaver   | NULL        | NULL       |    NULL | Arizona    |
+------------+-----------------+-------------+------------+---------+------------+
12 rows in set (0.00 sec)
*/