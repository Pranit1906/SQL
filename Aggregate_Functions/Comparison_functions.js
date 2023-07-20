/*
Aggregate Function
Comparison Functions:

COALESCE(value,...): Returns the first non-NULL value in the list, or NULL if there are no non-NULL values.

mysql> select coalesce(Null,1);
+------------------+
| coalesce(Null,1) |
+------------------+
|                1 |
+------------------+
1 row in set (0.00 sec)

mysql> select coalesce(Null,Null,Null,1);
+----------------------------+
| coalesce(Null,Null,Null,1) |
+----------------------------+
|                          1 |
+----------------------------+
1 row in set (0.00 sec)

mysql> select coalesce(Null,Null,Null);
+--------------------------+
| coalesce(Null,Null,Null) |
+--------------------------+
|                     NULL |
+--------------------------+
1 row in set (0.00 sec)




ISNULL(expr): If expr is NULL, ISNULL() returns 1, otherwise it returns 0.

mysql> select isNull(Null);
+--------------+
| isNull(Null) |
+--------------+
|            1 |
+--------------+
1 row in set (0.01 sec)

mysql> select isNull(1);
+-----------+
| isNull(1) |
+-----------+
|         0 |
+-----------+
1 row in set (0.00 sec)

mysql> select isNull(1+1);
+-------------+
| isNull(1+1) |
+-------------+
|           0 |
+-------------+
1 row in set (0.00 sec)


mysql> select isNull(1/0);
+-------------+
| isNull(1/0) |
+-------------+
|           1 |
+-------------+
1 row in set (0.00 sec)



GREATEST(value1,value2,...) / LEAST(value1, value2,...): With two or more arguments, 
returns the largest (maximum-valued) argument. The arguments are compared using the same rules as for LEAST().

mysql> select greatest(1,23,4,-1,10);
+------------------------+
| greatest(1,23,4,-1,10) |
+------------------------+
|                     23 |
+------------------------+
1 row in set (0.01 sec)

mysql> select least(1,23,4,-1,10);
+---------------------+
| least(1,23,4,-1,10) |
+---------------------+
|                  -1 |
+---------------------+
1 row in set (0.00 sec)



IF(expr1,expr2,expr3): If expr1 is TRUE (expr1 <> 0 and expr1 <> NULL) then IF() returns expr2; otherwise it returns expr3. IF() returns a numeric or string value, depending on the context in which it is used.

mysql> select if(1<2,'ya','na');
+-------------------+
| if(1<2,'ya','na') |
+-------------------+
| ya                |
+-------------------+
1 row in set (0.00 sec)

mysql> select if(1>2,'ya','na');
+-------------------+
| if(1>2,'ya','na') |
+-------------------+
| na                |
+-------------------+
1 row in set (0.00 sec)







*/