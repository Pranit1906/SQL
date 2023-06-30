/*

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


mysql> select sysdate() 'Date', date_format(sysdate(),'%y'),'Year';
+---------------------+-----------------------------+------+
| Date                | date_format(sysdate(),'%y') | Year |
+---------------------+-----------------------------+------+
| 2023-06-20 19:59:07 | 23                          | Year |
+---------------------+-----------------------------+------+
1 row in set (0.00 sec)

mysql> select sysdate() 'Date', date_format(sysdate(),'%y')'Year';
+---------------------+------+
| Date                | Year |
+---------------------+------+
| 2023-06-20 19:59:31 | 23   |
+---------------------+------+
1 row in set (0.00 sec)



mysql> select sysdate() 'Date', date_format(sysdate(),'%W  %d' '%M' '%Y');
+---------------------+-------------------------------------------+
| Date                | date_format(sysdate(),'%W  %d' '%M' '%Y') |
+---------------------+-------------------------------------------+
| 2023-06-20 20:12:07 | Tuesday  20June2023                       |
+---------------------+-------------------------------------------+
1 row in set (0.00 sec)



mysql> select sysdate() 'Date', date_format(sysdate(),'%W  %e %m %Y');
+---------------------+---------------------------------------+
| Date                | date_format(sysdate(),'%W  %e %m %Y') |
+---------------------+---------------------------------------+
| 2023-06-20 20:13:18 | Tuesday  20 06 2023                   |
+---------------------+---------------------------------------+
1 row in set (0.00 sec)

mysql> select sysdate() 'Date', date_format(sysdate(),'%W  %e %M %Y');
+---------------------+---------------------------------------+
| Date                | date_format(sysdate(),'%W  %e %M %Y') |
+---------------------+---------------------------------------+
| 2023-06-20 20:13:24 | Tuesday  20 June 2023                 |
+---------------------+---------------------------------------+
1 row in set (0.00 sec)



*/