/*

1.DCL(Data Control Langauge):-
DCL commands are used to grant and take back authority from any database user.

Here are some commands that come under DCL:
a. Grant:- It is used to give user access privileges to a database.

Example:-
GRANT SELECT, UPDATE ON MY_TABLE TO SOME_USER, ANOTHER_USER;  


b. Revoke:- It is used to take back permissions from the user.

Example:-
REVOKE SELECT, UPDATE ON MY_TABLE FROM USER1, USER2;  


 
2.DQL(Data Query Language):-
DQL is used to fetch the data from the database.
It uses only one command:
a. SELECT: This is the same as the projection operation of relational algebra. It is used to select the attribute based on the condition described by WHERE clause.

Syntax:-
SELECT expressions FROM TABLES  WHERE conditions;  

For example:-
SELECT emp_name  FROM employee  WHERE age > 20;  

*/