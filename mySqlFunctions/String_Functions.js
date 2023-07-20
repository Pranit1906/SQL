/*

String Function
String Functions: Return string values. Return values with varchar or char. 
If the length of the return values exceeds the limit, the return value is truncated 
without any error message.

CONCAT(exp1, exp2, � , expn): Concatenate two or more strings into one.

mysql> select concat("Good","Morning");
+--------------------------+
| concat("Good","Morning") |
+--------------------------+
| GoodMorning              |
+--------------------------+
1 row in set (0.00 sec)

mysql> select concat("Good"," ","Morning");
+------------------------------+
| concat("Good"," ","Morning") |
+------------------------------+
| Good Morning                 |
+------------------------------+
1 row in set (0.00 sec)

mysql> select concat("Good "," Morning");
+----------------------------+
| concat("Good "," Morning") |
+----------------------------+
| Good  Morning              |
+----------------------------+
1 row in set (0.00 sec)





LOWER(expr): converts all the characters to Lowercase

mysql> select lower('DATABASE MANAGEMENT SYSTEM');
+-------------------------------------+
| lower('DATABASE MANAGEMENT SYSTEM') |
+-------------------------------------+
| database management system          |
+-------------------------------------+
1 row in set (0.00 sec)


UPPER(expr): converts all the characters to Uppercase

mysql> select upper('database management system');
+-------------------------------------+
| upper('database management system') |
+-------------------------------------+
| DATABASE MANAGEMENT SYSTEM          |
+-------------------------------------+
1 row in set (0.00 sec)



REPLACE(expr1,char to be replaced, with what): Search and replace a substring in a string.

mysql> select replace('Let us Learn','Learn','Earn');
+----------------------------------------+
| replace('Let us Learn','Learn','Earn') |
+----------------------------------------+
| Let us Earn                            |
+----------------------------------------+
1 row in set (0.01 sec)


SUBSTR(expr1,m,n): Extracts �n� number of characters from �mth� position. 
m can be positive or negative. If m is positive, extracting of characters 
starts from left hand side. If m is negative, extracting of characters starts 
from right hand side. If m is a floating point, it is converted to integer.

mysql> select substr("Extracting Characters",2,5);// here 2 is start index , 5 is no of characters.
+-------------------------------------+
| substr("Extracting Characters",2,5) |
+-------------------------------------+
| xtrac                               |
+-------------------------------------+
1 row in set (0.00 sec)

mysql> select substr("Extracting Characters",2.5,5);
+---------------------------------------+
| substr("Extracting Characters",2.5,5) |
+---------------------------------------+
| tract                                 |
+---------------------------------------+
1 row in set (0.00 sec)

mysql> select substr("Extracting Characters",12,5);
+--------------------------------------+
| substr("Extracting Characters",12,5) |
+--------------------------------------+
| Chara                                |
+--------------------------------------+
1 row in set (0.00 sec)

mysql> select substr("Extracting Characters",-2.5,5);
+----------------------------------------+
| substr("Extracting Characters",-2.5,5) |
+----------------------------------------+
| ers                                    |
+----------------------------------------+
1 row in set (0.01 sec)



LENGTH(expr) and CHAR_LENGTH(exp): Returns the length of the string

mysql> select length('My Name Is Khan');
+---------------------------+
| length('My Name Is Khan') |
+---------------------------+
|                        15 |
+---------------------------+
1 row in set (0.00 sec)



*/