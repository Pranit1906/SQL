/*
There are five types of Sql commands :
 DDL(Data Defination Language), 
 DML(Data Manipulation Language),
 DCL(Data Control Langauge), 
 TCL(Transaction Control Language), 
 DQL(Data Query Language).


1.DDL(Data Defination Language):-
 DDL changes the structure of the table like creating a table, deleting a table, altering a table, etc.
 All the command of DDL are auto-committed that means it permanently save all the changes in the database.
 
 Here are some commands that come under DDL:

a.CREATE :- It is used to create a new table in the database.

Syntax:-
CREATE TABLE TABLE_NAME (COLUMN_NAME DATATYPES[,....]);  

Example:-
CREATE TABLE EMPLOYEE(Name VARCHAR2(20), Email VARCHAR2(100), DOB DATE);   

b. DROP: It is used to delete both the structure and record stored in the table.

Syntax:-
DROP TABLE table_name;  

Example:-
DROP TABLE EMPLOYEE;  


c. ALTER:- It is used to alter the structure of the database. This change could be either 
to modify the characteristics of an existing attribute or probably to add a new attribute.

Syntax:-To add a new column in the table
ALTER TABLE table_name ADD column_name COLUMN-definition;    

To modify existing column in the table:
ALTER TABLE table_name MODIFY(column_definitions....);  

EXAMPLE:-
ALTER TABLE STU_DETAILS ADD(ADDRESS VARCHAR2(20));  
ALTER TABLE STU_DETAILS MODIFY (NAME VARCHAR2(20));  


d. TRUNCATE:- It is used to delete all the rows from the table and free the space containing the table.

Syntax:-
TRUNCATE TABLE table_name;  

Example:-
TRUNCATE TABLE EMPLOYEE;  

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\\

2.DML(Data Manipulation Language):-
DML commands are used to modify the database. It is responsible for all form of changes in the database.
The command of DML is not auto-committed that means it can't permanently save all the changes in the database. 
They can be rollback.

Here are some commands that come under DML:-
a. INSERT:- The INSERT statement is a SQL query. It is used to insert data into the row of a table.

Syntax:-
INSERT INTO TABLE_NAME (col1, col2, col3,.... col N)  VALUES (value1, value2, value3, .... valueN);  

Or
INSERT INTO TABLE_NAME VALUES (value1, value2, value3, .... valueN);    

For example:-
INSERT INTO javatpoint (Author, Subject) VALUES ("Sonoo", "DBMS");  


b. UPDATE: This command is used to update or modify the value of a column in the table.

Syntax:-
UPDATE table_name SET [column_name1= value1,...column_nameN = valueN] [WHERE CONDITION]   

For example:-
UPDATE students SET User_Name = 'Sonoo' WHERE Student_Id = '3'  

c. DELETE: It is used to remove one or more row from a table.

Syntax:-
DELETE FROM table_name [WHERE condition];  

For example:-
DELETE FROM javatpoint  WHERE Author="Sonoo"; 


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\\

3.DCL(Data Control Langauge):-
DCL commands are used to grant and take back authority from any database user.

Here are some commands that come under DCL:
a. Grant:- It is used to give user access privileges to a database.

Example:-
GRANT SELECT, UPDATE ON MY_TABLE TO SOME_USER, ANOTHER_USER;  


b. Revoke:- It is used to take back permissions from the user.

Example:-
REVOKE SELECT, UPDATE ON MY_TABLE FROM USER1, USER2;  


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\\

4.TCL(Transaction Control Language):-
TCL commands can only use with DML commands like INSERT, DELETE and UPDATE only.
These operations are automatically committed in the database that's why they cannot be 
used while creating tables or dropping them.

Here are some commands that come under TCL:
a. Commit:- Commit command is used to save all the transactions to the database.

Syntax:-
COMMIT; 

Example:-
DELETE FROM CUSTOMERS WHERE AGE = 25;  
COMMIT; 

NOTE:- if we want stop auto commit we shall use following commands:-
set autocommit = 0; or start transcations;

b. Rollback:- Rollback command is used to undo transactions that have not already been saved to the database.
we can't use rollback without doing SET autocommit = 0; as MySql will implicitly commit the changes

Syntax:-
ROLLBACK;  

Example:-
DELETE FROM CUSTOMERS WHERE AGE = 25;  
ROLLBACK;

c. SAVEPOINT: It is used to roll the transaction back to a certain point without rolling back the entire transaction.

Syntax:-
SAVEPOINT SAVEPOINT_NAME;  


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\\
 
5.DQL(Data Query Language):-
DQL is used to fetch the data from the database.
It uses only one command:
a. SELECT: This is the same as the projection operation of relational algebra. It is used to select the attribute based on the condition described by WHERE clause.

Syntax:-
SELECT expressions FROM TABLES  WHERE conditions;  

For example:-
SELECT emp_name  FROM employee  WHERE age > 20;  

*/