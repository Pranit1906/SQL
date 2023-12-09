/*

TCL(Transaction Control Language):-
TCL commands can only use with DML commands like INSERT, DELETE and UPDATE only.
These operations are automatically committed in the database that's why they cannot be 
used while creating tables or dropping them.

Here are some commands that come under TCL:
a. Commit:- Commit command is used to save all the transactions to the database.

Syntax:-
COMMIT; 

Example 1:-
DELETE FROM CUSTOMERS WHERE AGE = 25;  
COMMIT; 

Example 2:-
// -- Start a transaction --
BEGIN;

// -- Update data --
UPDATE employees SET salary = salary * 1.1 WHERE department = 'IT';

// -- Commit the transaction --
COMMIT;
In this example, the BEGIN statement marks the start of a transaction,
the UPDATE statement modifies data, and the COMMIT statement makes the changes permanent.

mysql> insert into employee values( 11, 'Gandhi', 44000, 89, '1945-05-21');commit;
Query OK, 1 row affected (0.00 sec)

Query OK, 0 rows affected (0.01 sec)

mysql> select * from employee;
+----+----------+--------+------+------------+
| id | name     | salary | age  | Date       |
+----+----------+--------+------+------------+
|  1 | Pranit   |  35000 |   26 | 1997-06-19 |
|  2 | Sanit    |  40000 |   18 | 2004-07-26 |
|  3 | Soumitra |  25000 |   29 | 1993-09-15 |
|  4 | Monu     |  27000 |   23 | 1987-03-10 |
|  5 | Yogesh   |  31000 |   26 | 1998-03-29 |
|  6 | Pramod   |  28000 |   28 | 1987-12-09 |
|  7 | Sonu     |  42000 |   24 | 1995-07-16 |
|  8 | Goma     |  19000 |   19 | 1991-08-01 |
|  9 | Ganesh   |  33000 |   33 | 1999-01-19 |
| 10 | Mogesh   |  25600 |   23 | 1988-07-22 |
| 11 | Gandhi   |  44000 |   89 | 1945-05-21 |
+----+----------+--------+------+------------+
11 rows in set (0.00 sec)


NOTE:- if we want stop auto commit we shall use following commands:-
set autocommit = 0; or start transcations;

b. Rollback:- Rollback command is used to undo transactions that have not already been saved to the database.
we can't use rollback without doing SET autocommit = 0; as MySql will implicitly commit the changes

Syntax:-
ROLLBACK;  

Example:-
DELETE FROM CUSTOMERS WHERE AGE = 25;  
ROLLBACK;

mysql> set autocommit = 0;
Query OK, 0 rows affected (0.01 sec)

mysql> insert into employee values( 11, 'Gandhi', 44000, 89, '1945-05-21');
Query OK, 1 row affected (0.01 sec)

mysql> select * from employee;
+----+----------+--------+------+------------+
| id | name     | salary | age  | Date       |
+----+----------+--------+------+------------+
|  1 | Pranit   |  35000 |   26 | 1997-06-19 |
|  2 | Sanit    |  40000 |   18 | 2004-07-26 |
|  3 | Soumitra |  25000 |   29 | 1993-09-15 |
|  4 | Monu     |  27000 |   23 | 1987-03-10 |
|  5 | Yogesh   |  31000 |   26 | 1998-03-29 |
|  6 | Pramod   |  28000 |   28 | 1987-12-09 |
|  7 | Sonu     |  42000 |   24 | 1995-07-16 |
|  8 | Goma     |  19000 |   19 | 1991-08-01 |
|  9 | Ganesh   |  33000 |   33 | 1999-01-19 |
| 10 | Mogesh   |  25600 |   23 | 1988-07-22 |
| 11 | Gandhi   |  44000 |   89 | 1945-05-21 |
+----+----------+--------+------+------------+
11 rows in set (0.00 sec)

mysql> rollback;
Query OK, 0 rows affected (0.04 sec)

mysql> select * from employee;
+----+----------+--------+------+------------+
| id | name     | salary | age  | Date       |
+----+----------+--------+------+------------+
|  1 | Pranit   |  35000 |   26 | 1997-06-19 |
|  2 | Sanit    |  40000 |   18 | 2004-07-26 |
|  3 | Soumitra |  25000 |   29 | 1993-09-15 |
|  4 | Monu     |  27000 |   23 | 1987-03-10 |
|  5 | Yogesh   |  31000 |   26 | 1998-03-29 |
|  6 | Pramod   |  28000 |   28 | 1987-12-09 |
|  7 | Sonu     |  42000 |   24 | 1995-07-16 |
|  8 | Goma     |  19000 |   19 | 1991-08-01 |
|  9 | Ganesh   |  33000 |   33 | 1999-01-19 |
| 10 | Mogesh   |  25600 |   23 | 1988-07-22 |
+----+----------+--------+------+------------+
10 rows in set (0.00 sec)


c. SAVEPOINT: It is used to roll the transaction back to a certain point without rolling back the entire transaction.

Syntax:-
SAVEPOINT SAVEPOINT_NAME;  


mysql> select * from employee;
+----+----------+--------+------+------------+
| id | name     | salary | age  | Date       |
+----+----------+--------+------+------------+
|  1 | Pranit   |  35000 |   26 | 1997-06-19 |
|  2 | Sanit    |  40000 |   18 | 2004-07-26 |
|  3 | Soumitra |  25000 |   29 | 1993-09-15 |
|  4 | Monu     |  27000 |   23 | 1987-03-10 |
|  5 | Yogesh   |  31000 |   26 | 1998-03-29 |
|  6 | Pramod   |  28000 |   28 | 1987-12-09 |
|  7 | Sonu     |  42000 |   24 | 1995-07-16 |
|  8 | Goma     |  19000 |   19 | 1991-08-01 |
|  9 | Ganesh   |  33000 |   33 | 1999-01-19 |
| 10 | Mogesh   |  25600 |   23 | 1988-07-22 |
| 11 | Gandhi   |  44000 |   89 | 1945-05-21 |
+----+----------+--------+------+------------+
11 rows in set (0.00 sec)

mysql> savepoint sp1;
Query OK, 0 rows affected (0.01 sec)

mysql> delete from employee where id = 11;
Query OK, 1 row affected (0.01 sec)


mysql> rollback to sp1;
Query OK, 0 rows affected (0.00 sec)

mysql> select * from employee;
+----+----------+--------+------+------------+
| id | name     | salary | age  | Date       |
+----+----------+--------+------+------------+
|  1 | Pranit   |  35000 |   26 | 1997-06-19 |
|  2 | Sanit    |  40000 |   18 | 2004-07-26 |
|  3 | Soumitra |  25000 |   29 | 1993-09-15 |
|  4 | Monu     |  27000 |   23 | 1987-03-10 |
|  5 | Yogesh   |  31000 |   26 | 1998-03-29 |
|  6 | Pramod   |  28000 |   28 | 1987-12-09 |
|  7 | Sonu     |  42000 |   24 | 1995-07-16 |
|  8 | Goma     |  19000 |   19 | 1991-08-01 |
|  9 | Ganesh   |  33000 |   33 | 1999-01-19 |
| 10 | Mogesh   |  25600 |   23 | 1988-07-22 |
| 11 | Gandhi   |  44000 |   89 | 1945-05-21 |
+----+----------+--------+------+------------+
11 rows in set (0.00 sec)


*/