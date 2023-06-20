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




Date_format(date, format): To format a date value to a specific format, you use the DATE_FORMAT function.



Format

Description

%a : Abbreviated weekday name (Sun to Sat)

%b : Abbreviated month name (Jan to Dec)

%c : Numeric month name (0 to 12)

%D : Day of the month as a numeric value, followed by suffix (1st, 2nd, 3rd, ...)

%d : Day of the month as a numeric value (01 to 31)

%e : Day of the month as a numeric value (0 to 31)

%f : Microseconds (000000 to 999999)

%H : Hour (00 to 23)

%h : Hour (00 to 12)

%I : Hour (00 to 12)

%i : Minutes (00 to 59)

%j : Day of the year (001 to 366)

%k : Hour (0 to 23)

%l : Hour (1 to 12)

%M : Month name in full (January to December)

%m : Month name as a numeric value (00 to 12)

%p : AM or PM

%r : Time in 12 hour AM or PM format (hh:mm:ss AM/PM)

%S : Seconds (00 to 59)

%s : Seconds (00 to 59)

%T : Time in 24 hour format (hh:mm:ss)

%U : Week where Sunday is the first day of the week (00 to 53)

%u : Week where Monday is the first day of the week (00 to 53)

%V : Week where Sunday is the first day of the week (01 to 53). Used with %X

%v : Week where Monday is the first day of the week (01 to 53). Used with %X

%W : Weekday name in full (Sunday to Saturday)

%w : Day of the week where Sunday=0 and Saturday=6

%X : Year for the week where Sunday is the first day of the week. Used with %V

%x : Year for the week where Monday is the first day of the week. Used with %V

%Y : Year as a numeric, 4-digit value

%y : Year as a numeric, 2-digit value

Examples:-

mysql> select date_format(curdate(),'%d-%m-%Y');
+-----------------------------------+
| date_format(curdate(),'%d-%m-%Y') |
+-----------------------------------+
| 20-06-2023                        |
+-----------------------------------+
1 row in set (0.01 sec)

mysql> select date_format(curdate(),'%D-%M-%Y');
+-----------------------------------+
| date_format(curdate(),'%D-%M-%Y') |
+-----------------------------------+
| 20th-June-2023                    |
+-----------------------------------+
1 row in set (0.01 sec)

mysql> select date_format('2023-07-26','%W : %D-%M-%Y');
+-------------------------------------------+
| date_format('2023-07-26','%W : %D-%M-%Y') |
+-------------------------------------------+
| Wednesday : 26th-July-2023                |
+-------------------------------------------+
1 row in set (0.00 sec)

mysql> select date_format('2023-07-19','%a : %D-%b-%Y');
+-------------------------------------------+
| date_format('2023-07-19','%a : %D-%b-%Y') |
+-------------------------------------------+
| Wed : 19th-Jul-2023                       |
+-------------------------------------------+
1 row in set (0.00 sec)

mysql> select date_format('2023-07-19','%c : %D-%b-%Y');
+-------------------------------------------+
| date_format('2023-07-19','%c : %D-%b-%Y') |
+-------------------------------------------+
| 7 : 19th-Jul-2023                         |
+-------------------------------------------+
1 row in set (0.00 sec)

mysql> select date_format('2023-07-19','%e : %D-%b-%Y');
+-------------------------------------------+
| date_format('2023-07-19','%e : %D-%b-%Y') |
+-------------------------------------------+
| 19 : 19th-Jul-2023                        |
+-------------------------------------------+
1 row in set (0.00 sec)




DATEDIFF(expr1,expr2): returns expr1 - expr2 expressed as a value in days from one date to the other. expr1 and expr2 are date or date-and-time expressions. Only the date parts of the values are used in the calculation.

mysql> select datediff(sysdate(),'2023-06-21');
+----------------------------------+
| datediff(sysdate(),'2023-06-21') |
+----------------------------------+
|                               -1 |
+----------------------------------+
1 row in set (0.01 sec)

mysql> select datediff(sysdate(),'2023-06-19');
+----------------------------------+
| datediff(sysdate(),'2023-06-19') |
+----------------------------------+
|                                1 |
+----------------------------------+
1 row in set (0.00 sec)

mysql> select datediff(now(),'2023-06-10');
+------------------------------+
| datediff(now(),'2023-06-10') |
+------------------------------+
|                           10 |
+------------------------------+
1 row in set (0.00 sec)



MONTH(date): Returns the month for date, in the range 1 to 12 for January to December,
or 0 for dates such as '0000-00-00' or '2008-00-00' that have a zero month part.

mysql> select month('2022-06-19');
+---------------------+
| month('2022-06-19') |
+---------------------+
|                   6 |
+---------------------+
1 row in set (0.01 sec)

mysql> select month(now());
+--------------+
| month(now()) |
+--------------+
|            6 |
+--------------+
1 row in set (0.00 sec)



YEAR(date): Returns the year for date, in the range 1000 to 9999, or 0 for the "zero" date.


mysql> select year(sysdate());
+-----------------+
| year(sysdate()) |
+-----------------+
|            2023 |
+-----------------+
1 row in set (0.00 sec)

mysql> select year("1997-05-12");
+--------------------+
| year("1997-05-12") |
+--------------------+
|               1997 |
+--------------------+
1 row in set (0.00 sec)


DAYNAME:- 

mysql> select dayname("2023-05-16");
+-----------------------+
| dayname("2023-05-16") |
+-----------------------+
| Tuesday               |
+-----------------------+
1 row in set (0.01 sec)
*/