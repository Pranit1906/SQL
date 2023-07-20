/*

INTERSECT in SQL
The INTERSECT operator in SQL is used to retrieve the records that are identical/common between the result
 sets of two SELECT (tables) statements.

In real-time scenarios, there will be a huge number of tables in a database that contains information. 
The user may find it challenging to gather common information from various tables.
So we use the INTERSECT operator to accomplish that. It helps to retrieve the common data from various tables.

Syntax
To retrieve identical records from two different tables, we use the following syntax −

SELECT column1, column2,…, columnN
FROM table1, table2,…, tableN
INTERSECT
SELECT column1, column2,…, columnN
FROM table1, table2,…, tableN

Note − There are some mandatory rules for INTERSECT operations such as the number of columns, data types, and
 other columns must be the same in both SELECT statements for the INTERSECT operator to work correctly.






 Example
First of all, let us create a table named “STUDENTS” using the following query −

SQL> CREATE TABLE STUDENTS(
ID INT NOT NULL, 
NAME VARCHAR(20) NOT NULL, 
HOBBY VARCHAR(20) NOT NULL, 
AGE INT NOT NULL, 
PRIMARY KEY(ID)
);
Once the table is created, let us insert some values to the table using the query below −

SQL> INSERT INTO STUDENTS(ID, NAME, HOBBY, AGE) VALUES(1, 'Vijay', 'Cricket', 18);
INSERT INTO STUDENTS(ID, NAME, HOBBY, AGE) VALUES(2, 'Varun', 'Football', 26);
INSERT INTO STUDENTS(ID, NAME, HOBBY, AGE) VALUES(3, 'Surya', 'Cricket', 19);
INSERT INTO STUDENTS(ID, NAME, HOBBY, AGE) VALUES(4, 'Karthik', 'Cricket', 25);
INSERT INTO STUDENTS(ID, NAME, HOBBY, AGE) VALUES(5, 'Sunny', 'Football', 26);
INSERT INTO STUDENTS(ID, NAME, HOBBY, AGE) VALUES(6, 'Dev', 'Cricket', 23);
Let us verify whether the table “STUDENTS” is created or not using the following query −

SQL> SELECT * FROM STUDENTS;
As we can see in the below output, the table has been created in the database.

+-----+----------+--------------+-------+
| ID  |  NAME    |    HOBBY     |  AGE  |
+-----+----------+--------------+-------+
| 1   |  Vijay   |   Cricket    |   18  |
| 2   |  Varun   |   Football   |   26  |
| 3   |  Surya   |   Cricket    |   19  |
| 4   |  Karthik |   Cricket    |   25  |
| 5   |  Sunny   |   Football   |   26  |
| 6   |  Dev     |   Cricket    |   23  |
+-----+----------+--------------+-------+
Let us create another table “ASSOCIATES” using the following query −

SQL> CREATE TABLE ASSOCIATES(
ID INT NOT NULL, 
NAME VARCHAR(20) NOT NULL, 
SUBJECT VARCHAR(20) NOT NULL, 
AGE INT NOT NULL, 
HOBBY VARCHAR(20) NOT NULL, 
PRIMARY KEY(ID)
);
Let’s insert some values into the table using the following query −

SQL> INSERT INTO ASSOCIATES(ID, NAME, SUBJECT, AGE, HOBBY) VALUES(1, 'Naina', 'Maths', 24, 'Cricket');
INSERT INTO ASSOCIATES(ID, NAME, SUBJECT, AGE, HOBBY) VALUES(2, 'Varun', 'Physics', 26, 'Football');
INSERT INTO ASSOCIATES(ID, NAME, SUBJECT, AGE, HOBBY) VALUES(3, 'Dev', 'Maths', 23, 'Cricket');
INSERT INTO ASSOCIATES(ID, NAME, SUBJECT, AGE, HOBBY) VALUES(4, 'Priya', 'Physics', 25, 'Cricket');
INSERT INTO ASSOCIATES(ID, NAME, SUBJECT, AGE, HOBBY) VALUES(5, 'Aditya', 'Chemistry', 21, 'Cricket');
INSERT INTO ASSOCIATES(ID, NAME, SUBJECT, AGE, HOBBY) VALUES(6, 'Kalyan', 'Maths', 30, 'Football');
Let us verify whether the table “ASSOCIATES” is created or not using the following query −

SQL> SELECT * FROM ASSOCIATES;
As we can see in the below output, the table has been created in the database.

+-----+----------+---------------+-------+----------+
| ID  |  NAME    |    SUBJECT    |  AGE  |  HOBBY   |
+-----+----------+---------------+-------+----------+
| 1   |  Naina   |   Mathematics |   24  | Cricket  |
| 2   |  Varun   |   Physics     |   26  | Football | 
| 3   |  Dev     |   Mathematics |   23  | Cricket  |
| 4   |  Priya   |   Physics     |   25  | Cricket  |
| 5   |  Adithya |   Chemistry   |   21  | Cricket  |
| 6   |  Kalyan  |   Mathematics |   30  | Football |
+-----+----------+--------------+-------+-----------+
Now, we are trying to retrieve the common records from both the tables using the following query −

SQL> SELECT NAME, AGE, HOBBY FROM STUDENTS
INTERSECT 
SELECT NAME, AGE, HOBBY FROM ASSOCIATES
Output
When we execute the above query, the output is obtained as follows −

+-----------+-------+----------+
|   NAME    |  AGE  |  HOBBY   |
+-----------+-------+----------+
|   Dev     |   23  | Cricket  |
|   Varun   |   26  | Football |
+-----------+-------+----------+
INTERSECT with BETWEEN operator
As we discussed in the initial syntax, we can also use the INTERSECT operator along with conditional operators.

We can use the INTERSECT operator with the BETWEEN operator in SQL to find rows that fall within a specified range.

Example
Now, let us retrieve the records that are common in both tables. In addition; we are retrieving the records who are aged between 25 and 30 using the following query.

SQL> SELECT NAME, AGE, HOBBY FROM STUDENTS
WHERE AGE BETWEEN 25 AND 30

INTERSECT

SELECT NAME, AGE, HOBBY FROM ASSOCIATES
WHERE AGE BETWEEN 20 AND 30
Output
The output for the above query is produced as given below −

+-----------+-------+----------+
|   NAME    |  AGE  |  HOBBY   |
+-----------+-------+----------+
|   Varun   |   26  | Football |
+-----------+-------+----------+
INTERSECT with IN operator
We can also use the INTERSECT operator with the IN operator in SQL to find the common rows that have the specified values. The IN operator is used to filter a result set based on a list of specified values.

Example
Here, we are trying to retrieve the common records from both tables. In addition; we are using the IN operator to retrieve the records whose hobby is ‘Cricket’.

SQL> SELECT NAME, AGE, HOBBY FROM STUDENTS
WHERE HOBBY IN('Cricket')

INTERSECT

SELECT NAME, AGE, HOBBY FROM ASSOCIATES
WHERE HOBBY IN('Cricket')
Output
When we execute the above query, the output is obtained as follows −

+-----------+-------+----------+
|   NAME    |  AGE  |  HOBBY   |
+-----------+-------+----------+
|   Dev     |   26  | Cricket  |
+-----------+-------+----------+
INTERSECT with LIKE operator
The LIKE operator is used to perform pattern matching on a string. The INTERSECT operator can also be used with the LIKE operator in SQL to find the common rows that matches with the specified pattern.

Example
Let us use the wildcard ‘%’ with the LIKE operator to retrieve the names which starts with ‘v’ from the common names of both tables.

SQL> SELECT NAME, AGE, HOBBY FROM STUDENTS
WHERE NAME LIKE 'v%'

INTERSECT

SELECT NAME, AGE, HOBBY FROM ASSOCIATES
WHERE NAME LIKE 'v%'
Output
The output for the above query is produced as given below −

+-----------+-------+----------+
|   NAME    |  AGE  |  HOBBY   |
+-----------+-------+----------+
|   Varun   |   26  | Football |
+-----------+-------+----------+
*/