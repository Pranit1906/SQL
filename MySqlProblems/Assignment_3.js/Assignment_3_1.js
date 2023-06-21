/*
Write sql queries and explain the  functions to perform the following operations:

i) To display the day like “Monday”, “Tuesday”,from the date when India got independence.
mysql> select date_format('1945-08-15','%W %d %M %Y');
+-----------------------------------------+
| date_format('1945-08-15','%W %d %M %Y') |
+-----------------------------------------+
| Wednesday 15 August 1945                |
+-----------------------------------------+
1 row in set (0.00 sec)

ii) To display the specified number of characters from a particular position of the given string.
mysql> select substr('My Name is Pranit',4,16);
+----------------------------------+
| substr('My Name is Pranit',4,16) |
+----------------------------------+
| Name is Pranit                   |
+----------------------------------+
1 row in set (0.00 sec)

iii) To display the name of the month in which you were born.
mysql> select monthname('1997-06-19');
+-------------------------+
| monthname('1997-06-19') |
+-------------------------+
| June                    |
+-------------------------+
1 row in set (0.01 sec)

iv) To display your name in capital letters.
mysql> select upper('Pranit');
+-----------------+
| upper('Pranit') |
+-----------------+
| PRANIT          |
+-----------------+
1 row in set (0.00 sec)
*/