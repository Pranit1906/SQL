/*


The FOREIGN KEY constraint is used to prevent actions that would destroy links between tables.

1.A FOREIGN KEY is a field (or collection of fields) in one table, that refers 
to the PRIMARY KEY in another table.
2. The table with the foreign key is called the child table, and the table with the
primary key is called the referenced or parent table.


create table Car_Types(Type_Id int primary key,Car_Type varchar(45),price_range bigint,NoOfSeats int);
desc Car_types;
+-------------+-------------+------+-----+---------+-------+
| Field       | Type        | Null | Key | Default | Extra |
+-------------+-------------+------+-----+---------+-------+
| Type_Id     | int         | NO   | PRI | NULL    |       |
| Car_Type    | varchar(45) | YES  |     | NULL    |       |
| price_range | bigint      | YES  |     | NULL    |       |
| NoOfSeats   | int         | YES  |     | NULL    |       |
+-------------+-------------+------+-----+---------+-------+
4 rows in set (0.00 sec)

create table Cars(Car_Id int primary key, Car_Name varchar(40), Type_Id int,Company_Id int,
Engine_Type varchar(30),Fuel_Type varchar(30),Mileage decimal(4,2),Transmission varchar(50),
OnRoadPrice bigint,Emission_Norm varchar(20),foreign key(Type_Id) references Car_Types(Type_Id),
foreign key(Company_Id) references Car_Companies(Company_Id));
desc Cars;

+---------------+--------------+------+-----+---------+-------+
| Field         | Type         | Null | Key | Default | Extra |
+---------------+--------------+------+-----+---------+-------+
| Car_Id        | int          | NO   | PRI | NULL    |       |
| Car_Name      | varchar(40)  | YES  |     | NULL    |       |
| Type_Id       | int          | YES  | MUL | NULL    |       |
| Company_Id    | int          | YES  | MUL | NULL    |       |
| Engine_Type   | varchar(30)  | YES  |     | NULL    |       |
| Fuel_Type     | varchar(30)  | YES  |     | NULL    |       |
| Mileage       | decimal(4,2) | YES  |     | NULL    |       |
| Transmission  | varchar(50)  | YES  |     | NULL    |       |
| OnRoadPrice   | bigint       | YES  |     | NULL    |       |
| Emission_Norm | varchar(20)  | YES  |     | NULL    |       |
+---------------+--------------+------+-----+---------+-------+
10 rows in set (0.01 sec)

*/






/*


/-------For Making Foreign Key Other than primary key, that column must be Unqiue to have some Relation----/ 

Can foreign key point to a non-primary key?
A foreign key can refer to either a unique or a primary key of the parent table.
If the foreign key refers to a non-primary unique key, you must specify the column names of the key explicitly.


use MySql_Project;
create table Customer(Cust_Id int primary key,First_Name varchar(30),
Last_Name varchar(30),gender int, purchase_date date,Contact char(10));
desc Customer;
alter table customer modify purchase_date date unique;

mysql> desc Customer;
+---------------+-------------+------+-----+---------+-------+
| Field         | Type        | Null | Key | Default | Extra |
+---------------+-------------+------+-----+---------+-------+
| Cust_Id       | int         | NO   | PRI | NULL    |       |
| First_Name    | varchar(30) | YES  |     | NULL    |       |
| Last_Name     | varchar(30) | YES  |     | NULL    |       |
| gender        | int         | YES  |     | NULL    |       |
| purchase_date | date        | YES  | UNI | NULL    |       |
| Contact       | char(10)    | YES  |     | NULL    |       |
+---------------+-------------+------+-----+---------+-------+
6 rows in set (0.01 sec)


create table Car_Sells(Sell_Id int primary key,Car_Id int,foreign key (Car_Id) references Cars(Car_Id),
Cust_Id int,foreign key (Cust_Id) references Customer(Cust_Id),purchase_date date,
foreign key (purchase_date) references Customer(purchase_date), Delivery_Date date);
desc Car_Sells;

mysql> desc Car_Sells;
+---------------+------+------+-----+---------+-------+
| Field         | Type | Null | Key | Default | Extra |
+---------------+------+------+-----+---------+-------+
| Sell_Id       | int  | NO   | PRI | NULL    |       |
| Car_Id        | int  | YES  | MUL | NULL    |       |
| Cust_Id       | int  | YES  | MUL | NULL    |       |
| purchase_date | date | YES  | MUL | NULL    |       |
| Delivery_Date | date | YES  |     | NULL    |       |
+---------------+------+------+-----+---------+-------+
5 rows in set (0.00 sec)

'Hyundai'),('Kia'),('Skoda'),
('Tata Motors'),('Renault'),('MG Motor'),('Toyota'),
('Honda'),('Mahindra'),('Skoda'),('Maruti Suzuki'),
('BMW'),('Jeep'),('Mercedes-Benz'),('Audi'),('Jaguar')

*/