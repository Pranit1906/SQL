/*

1. Car_Brand:-
mysql> desc Car_Brands;
+------------------+-------------+------+-----+---------+-------+
| Field            | Type        | Null | Key | Default | Extra |
+------------------+-------------+------+-----+---------+-------+
| Brand_Id         | int         | NO   | PRI | NULL    |       |
| Brand_Name       | varchar(45) | YES  |     | NULL    |       |
| CEO              | varchar(40) | YES  |     | NULL    |       |
| Established_year | year        | YES  |     | NULL    |       |
| Website          | varchar(40) | YES  |     | NULL    |       |
+------------------+-------------+------+-----+---------+-------+
5 rows in set (0.04 sec)

2. Car_Models:-
mysql> desc Car_Models;
+-------------+-------------+------+-----+---------+-------+
| Field       | Type        | Null | Key | Default | Extra |
+-------------+-------------+------+-----+---------+-------+
| Model_Id    | int         | NO   | PRI | NULL    |       |
| Model_Type  | varchar(45) | YES  |     | NULL    |       |
| price_range | varchar(35) | YES  |     | NULL    |       |
| NoOfSeats   | int         | YES  |     | NULL    |       |
+-------------+-------------+------+-----+---------+-------+
4 rows in set (0.02 sec)

3. Cars:-
mysql> desc Cars;
+----------------------+--------------+------+-----+---------+-------+
| Field                | Type         | Null | Key | Default | Extra |
+----------------------+--------------+------+-----+---------+-------+
| Car_Id               | int          | NO   | PRI | NULL    |       |
| Car_Name             | varchar(60)  | YES  |     | NULL    |       |
| Model_Id             | int          | YES  | MUL | NULL    |       |
| Brand_Id             | int          | YES  | MUL | NULL    |       |
| Engine_Type          | varchar(60)  | YES  |     | NULL    |       |
| Fuel_Type            | varchar(30)  | YES  |     | NULL    |       |
| Mileage              | decimal(5,2) | YES  |     | NULL    |       |
| Transmission         | varchar(50)  | YES  |     | NULL    |       |
| OnRoadPrice_In_Lakhs | decimal(5,2) | YES  |     | NULL    |       |
| Emission_Norm        | varchar(20)  | YES  |     | NULL    |       |
+----------------------+--------------+------+-----+---------+-------+
10 rows in set (0.00 sec)

4. Customer:-
mysql> desc Customer;
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| Cust_Id    | int         | NO   | PRI | NULL    |       |
| First_Name | varchar(30) | YES  |     | NULL    |       |
| Last_Name  | varchar(30) | YES  |     | NULL    |       |
| email      | varchar(50) | YES  |     | NULL    |       |
| Contact    | char(10)    | YES  |     | NULL    |       |
+------------+-------------+------+-----+---------+-------+
5 rows in set (0.00 sec)

5. Car_Sales:-
mysql> desc car_sales;
+---------------+------+------+-----+---------+-------+
| Field         | Type | Null | Key | Default | Extra |
+---------------+------+------+-----+---------+-------+
| Sale_Id       | int  | NO   | PRI | NULL    |       |
| Car_Id        | int  | YES  | MUL | NULL    |       |
| Cust_Id       | int  | YES  | MUL | NULL    |       |
| purchase_date | date | YES  |     | NULL    |       |
| Delivery_Date | date | YES  |     | NULL    |       |
+---------------+------+------+-----+---------+-------+
5 rows in set (0.01 sec)





*/