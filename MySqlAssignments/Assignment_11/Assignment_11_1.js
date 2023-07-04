/*

SUBQUERIES:

CUSTOMER TABLE:



CUST_ID 	NAME	  OCCUPATION	  AGE
101	        PETER	   ENGINEER	      32
102	        JOSEPH	   DEVELOPER	  30
103	        JOHN	    LEADER	      28
104	        STEPHEN	   SCIENTIST	  45
105  	    SUZI	   CARPENTER	  26
106	        BOB	        ACTOR	      25
107	        NULL	    NULL	     NULL


ORDERS TABLE:



ORDER_ID	CUST_ID	 PROD_NAME	 ORDER_DATE
1	        101	      LAPTOP	2022-01-10
2	        103	      DESKTOP	2022-02-11
3	        106	      IPHONE	2022-03-13
4	        104	      MOBILE	2022-03-05
5	        102	        TV	    2022-03-20


mysql> desc customer_table;
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| Cust_Id    | int         | NO   | PRI | NULL    |       |
| Name       | varchar(20) | YES  |     | NULL    |       |
| Occupation | varchar(25) | YES  |     | NULL    |       |
| Age        | int         | YES  |     | NULL    |       |
+------------+-------------+------+-----+---------+-------+
4 rows in set (0.00 sec)

mysql> desc order_table;
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| Order_Id   | int         | NO   | PRI | NULL    |       |
| Cust_Id    | int         | YES  | MUL | NULL    |       |
| Prod_Name  | varchar(30) | YES  |     | NULL    |       |
| Order_Date | date        | YES  |     | NULL    |       |
+------------+-------------+------+-----+---------+-------+
4 rows in set (0.00 sec)


mysql> select * from customer_table;
+---------+---------+------------+------+
| Cust_Id | Name    | Occupation | Age  |
+---------+---------+------------+------+
|     101 | Peter   | Engineer   |   32 |
|     102 | Joseph  | Developer  |   30 |
|     103 | John    | Leader     |   28 |
|     104 | Stephen | Scientist  |   45 |
|     105 | Suzi    | Carpenter  |   26 |
|     106 | Bob     | Actor      |   25 |
|     107 | NULL    | NULL       | NULL |
+---------+---------+------------+------+
7 rows in set (0.00 sec)

mysql> select * from order_table;
+----------+---------+-----------+------------+
| Order_Id | Cust_Id | Prod_Name | Order_Date |
+----------+---------+-----------+------------+
|        1 |     101 | Laptop    | 2022-01-10 |
|        2 |     103 | Desktp    | 2022-02-11 |
|        3 |     106 | Iphone    | 2022-03-13 |
|        4 |     104 | Mobile    | 2022-03-05 |
|        5 |     102 | TV        | 2022-03-20 |
+----------+---------+-----------+------------+
5 rows in set (0.00 sec)


1. Find the details of the customers whose details is not in the customer table.

mysql> select * from customer_table where Cust_Id in(select Cust_Id from customer_Table where Name is Null);
+---------+------+------------+------+
| Cust_Id | Name | Occupation | Age  |
+---------+------+------------+------+
|     107 | NULL | NULL       | NULL |
+---------+------+------------+------+
1 row in set (0.00 sec)



2.     The customer details who have not placed an order.


mysql> select * from Customer_table where Cust_Id not in (select Cust_Id from Order_table);
+---------+------+------------+------+
| Cust_Id | Name | Occupation | Age  |
+---------+------+------------+------+
|     105 | Suzi | Carpenter  |   26 |
|     107 | NULL | NULL       | NULL |
+---------+------+------------+------+
2 rows in set (0.01 sec)


3.     Find the name of the customers who has purchased laptop.
mysql> select Name from Customer_Table where Cust_Id in (select Cust_Id from order_table where Prod_Name = "Laptop");
+-------+
| Name  |
+-------+
| Peter |
+-------+
1 row in set (0.00 sec)

4.     Find the details of customers who purchased iphone.
mysql> select * from Customer_Table where Cust_Id in (select Cust_Id from order_table where Prod_Name = "Iphone");
+---------+------+------------+------+
| Cust_Id | Name | Occupation | Age  |
+---------+------+------------+------+
|     106 | Bob  | Actor      |   25 |
+---------+------+------------+------+
1 row in set (0.00 sec)

5.     Find the details of the customers whose details is not in the orders table.
mysql> select * from Customer_table where Cust_Id not in (select Cust_Id from order_table);
+---------+------+------------+------+
| Cust_Id | Name | Occupation | Age  |
+---------+------+------------+------+
|     105 | Suzi | Carpenter  |   26 |
|     107 | NULL | NULL       | NULL |
+---------+------+------------+------+
2 rows in set (0.00 sec)

6.     How many customers from customers table has made an order.
mysql> select count(*),Cust_Id,Name from Customer_table where Cust_Id  in (select Cust_Id from order_table) group by Cust_Id;
+----------+---------+---------+
| count(*) | Cust_Id | Name    |
+----------+---------+---------+
|        1 |     101 | Peter   |
|        1 |     102 | Joseph  |
|        1 |     103 | John    |
|        1 |     104 | Stephen |
|        1 |     106 | Bob     |
+----------+---------+---------+
5 rows in set (0.01 sec)

*/