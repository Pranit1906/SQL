/*
                                                 Date Function

Date Functions: 

CURDATE(): Returns the current date.

mysql> select curdate();
+------------+
| curdate()  |
+------------+
| 2023-06-20 |
+------------+
1 row in set (0.00 sec)

mysql> select current_date();
+----------------+
| current_date() |
+----------------+
| 2023-06-20     |
+----------------+
1 row in set (0.01 sec)


NOW(): Returns the current date and time at which the statement executed.


mysql> select now();
+---------------------+
| now()               |
+---------------------+
| 2023-06-20 13:03:49 |
+---------------------+
1 row in set (0.00 sec)




SYSDATE(): Returns the current date. 

mysql> select sysdate();
+---------------------+
| sysdate()           |
+---------------------+
| 2023-06-20 13:06:48 |
+---------------------+
1 row in set (0.01 sec)



Last_day(date): returns the last day of the corresponding month for a date or datetime value.

mysql> select last_day(01-02-2023);
+----------------------+
| last_day(01-02-2023) |
+----------------------+
| NULL                 |
+----------------------+
1 row in set, 1 warning (0.01 sec)

mysql> select last_day(2023-02-01);
+----------------------+
| last_day(2023-02-01) |
+----------------------+
| NULL                 |
+----------------------+
1 row in set, 1 warning (0.00 sec)

mysql> select last_day('2023-02-01');
+------------------------+
| last_day('2023-02-01') |
+------------------------+
| 2023-02-28             |
+------------------------+
1 row in set (0.01 sec)

mysql> select last_day(curdate());
+---------------------+
| last_day(curdate()) |
+---------------------+
| 2023-06-30          |
+---------------------+
1 row in set (0.00 sec)


Caste:-

mysql> select cast('2020/04/20' as date);
+----------------------------+
| cast('2020/04/20' as date) |
+----------------------------+
| 2020-04-20                 |
+----------------------------+
1 row in set, 1 warning (0.01 sec)


mysql> select cast('2020/04/20  11/2/3' as datetime );
+-----------------------------------------+
| cast('2020/04/20  11/2/3' as datetime ) |
+-----------------------------------------+
| 2020-04-20 11:02:03                     |
+-----------------------------------------+
1 row in set, 1 warning (0.00 sec)

mysql> select cast('2020/04/20  11/2/3' as char );
+-------------------------------------+
| cast('2020/04/20  11/2/3' as char ) |
+-------------------------------------+
| 2020/04/20  11/2/3                  |
+-------------------------------------+
1 row in set (0.01 sec)


CONVERT:-


mysql> select convert('2020/03/20', date);
+-----------------------------+
| convert('2020/03/20', date) |
+-----------------------------+
| 2020-03-20                  |
+-----------------------------+
1 row in set, 1 warning (0.00 sec)

mysql> select convert('2020/03/20  11/05/89', datetime);
+-------------------------------------------+
| convert('2020/03/20  11/05/89', datetime) |
+-------------------------------------------+
| NULL                                      |
+-------------------------------------------+
1 row in set, 1 warning (0.00 sec)

mysql> select convert('2020/03/20  11:05:9', datetime);
+------------------------------------------+
| convert('2020/03/20  11:05:9', datetime) |
+------------------------------------------+
| 2020-03-20 11:05:09                      |
+------------------------------------------+
1 row in set, 1 warning (0.00 sec)
*/