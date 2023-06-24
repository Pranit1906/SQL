/*

create a database called CARSHOWROOM having the schema as defined below It has the

following four relations:

1) INVENTORY: Stores name, price, model, year of manufacturing, and fuel type for each car in
inventory of the showroom,

2) CUSTOMER: Stores customer id, name, address, phone number and email for each customer,

3) SALE: Stores the invoice number, car id, customerid, sale date, mode of payment, sales person’s
employee id and selling price of the car sold,

4) EMPLOYEE: Stores employee id, name, date of birth, date of joining, designation and salary of
each employee in the showroom

Inventory:-
mysql> create table Car_Inventory(car_id int primary key,car_name varchar(20) not null,car_price bigint, car_model varchar(20) not null,Year_of_Manufacture date,fuel_type varchar(20));
Query OK, 0 rows affected (0.04 sec)

mysql> desc Car_Inventory;
+---------------------+-------------+------+-----+---------+-------+
| Field               | Type        | Null | Key | Default | Extra |
+---------------------+-------------+------+-----+---------+-------+
| car_id              | int         | NO   | PRI | NULL    |       |
| car_name            | varchar(20) | NO   |     | NULL    |       |
| car_price           | bigint      | YES  |     | NULL    |       |
| car_model           | varchar(20) | NO   |     | NULL    |       |
| Year_of_Manufacture | date        | YES  |     | NULL    |       |
| fuel_type           | varchar(20) | YES  |     | NULL    |       |
+---------------------+-------------+------+-----+---------+-------+
6 rows in set (0.02 sec)

Customer:-
mysql> create table Customer(cust_id int primary key,cust_name varchar(20),address varchar(40),phone_no char(10),email varchar(20));
Query OK, 0 rows affected (0.03 sec)

mysql> desc Customer;
+-----------+-------------+------+-----+---------+-------+
| Field     | Type        | Null | Key | Default | Extra |
+-----------+-------------+------+-----+---------+-------+
| cust_id   | int         | NO   | PRI | NULL    |       |
| cust_name | varchar(20) | YES  |     | NULL    |       |
| address   | varchar(40) | YES  |     | NULL    |       |
| phone_no  | char(10)    | YES  |     | NULL    |       |
| email     | varchar(20) | YES  |     | NULL    |       |
+-----------+-------------+------+-----+---------+-------+
5 rows in set (0.01 sec)


Employee:-
mysql> create table Showroom_Emp (emp_id int primary key,emp_name varchar(20) not null,date_of_joining date,date_of_birth date,designation varchar(25),salary bigint);
Query OK, 0 rows affected (0.03 sec)

mysql> desc Showroom_Emp;
+-----------------+-------------+------+-----+---------+-------+
| Field           | Type        | Null | Key | Default | Extra |
+-----------------+-------------+------+-----+---------+-------+
| emp_id          | int         | NO   | PRI | NULL    |       |
| emp_name        | varchar(20) | NO   |     | NULL    |       |
| date_of_joining | date        | YES  |     | NULL    |       |
| date_of_birth   | date        | YES  |     | NULL    |       |
| designation     | varchar(25) | YES  |     | NULL    |       |
| salary          | bigint      | YES  |     | NULL    |       |
+-----------------+-------------+------+-----+---------+-------+
6 rows in set (0.00 sec)


Sales:-
mysql> create table sales(sales_id int primary key,invoice bigint,car_id int, foreign key(car_id) references Car_Inventory(car_id),cust_id int, foreign key(cust_id) references Customer(cust_id),sales_date date,mode_of_payment varchar(15),
emp_id int, foreign key(emp_id) references Showroom_Emp(emp_id),sell_price int, foreign key(sell_price) references Car_Inventory(car_id));^C
mysql> desc Sales;
+-----------------+-------------+------+-----+---------+-------+
| Field           | Type        | Null | Key | Default | Extra |
+-----------------+-------------+------+-----+---------+-------+
| sales_id        | int         | NO   | PRI | NULL    |       |
| invoice         | bigint      | YES  |     | NULL    |       |
| car_id          | int         | YES  | MUL | NULL    |       |
| cust_id         | int         | YES  | MUL | NULL    |       |
| sales_date      | date        | YES  |     | NULL    |       |
| mode_of_payment | varchar(15) | YES  |     | NULL    |       |
| emp_id          | int         | YES  | MUL | NULL    |       |
| sell_price      | int         | YES  | MUL | NULL    |       |
+-----------------+-------------+------+-----+---------+-------+
8 rows in set (0.00 sec)
*/