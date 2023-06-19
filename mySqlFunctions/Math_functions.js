/*

Math Functions: Take numeric values and return numeric values. The values returned are accurate up to 38 decimal digits.

ABS(X): Returns the absolute value of X.


mysql> select abs(22);
+---------+
| abs(22) |
+---------+
|      22 |
+---------+
1 row in set (0.02 sec)

mysql> select abs(-22);
+----------+
| abs(-22) |
+----------+
|       22 |
+----------+
1 row in set (0.00 sec)



CEIL(X): CEIL() is a synonym for CEILING()

mysql> select ceil(7.23);
+------------+
| ceil(7.23) |
+------------+
|          8 |
+------------+
1 row in set (0.01 sec)

mysql> select ceil(7.73);
+------------+
| ceil(7.73) |
+------------+
|          8 |
+------------+
1 row in set (0.00 sec)

mysql> select ceil(-7.73);
+-------------+
| ceil(-7.73) |
+-------------+
|          -7 |
+-------------+
1 row in set (0.00 sec)

mysql> select ceil(-7.23);
+-------------+
| ceil(-7.23) |
+-------------+
|          -7 |
+-------------+
1 row in set (0.00 sec)



FLOOR(X): Returns the largest integer value not greater than X.

mysql> select floor(7.73);
+-------------+
| floor(7.73) |
+-------------+
|           7 |
+-------------+
1 row in set (0.01 sec)

mysql> select floor(7.23);
+-------------+
| floor(7.23) |
+-------------+
|           7 |
+-------------+
1 row in set (0.00 sec)

mysql> select floor(-7.23);
+--------------+
| floor(-7.23) |
+--------------+
|           -8 |
+--------------+
1 row in set (0.00 sec)

mysql> select floor(-7.83);
+--------------+
| floor(-7.83) |
+--------------+
|           -8 |
+--------------+
1 row in set (0.00 sec)



MOD(N,M), N % M, N MOD M: Modulo operation. Returns the remainder of N divided by M.


mysql> select mod(29,2);
+-----------+
| mod(29,2) |
+-----------+
|         1 |
+-----------+
1 row in set (0.01 sec)

mysql> select mod(29,9);
+-----------+
| mod(29,9) |
+-----------+
|         2 |
+-----------+
1 row in set (0.00 sec)

mysql> select 234 mod 10;
+------------+
| 234 mod 10 |
+------------+
|          4 |
+------------+
1 row in set (0.00 sec)



ROUND(X), ROUND(X,D): Rounds the argument X to D decimal places. The rounding algorithm depends on the data type of X. D defaults to 0 if not specified. D can be negative to cause D digits left of the decimal point of the value X to become zero.

mysql> select round(1.23);
+-------------+
| round(1.23) |
+-------------+
|           1 |
+-------------+
1 row in set (0.00 sec)

mysql> select round(1.53);
+-------------+
| round(1.53) |
+-------------+
|           2 |
+-------------+
1 row in set (0.00 sec)

mysql> select round(-1.53);
+--------------+
| round(-1.53) |
+--------------+
|           -2 |
+--------------+
1 row in set (0.00 sec)

mysql> select round(-1.23);
+--------------+
| round(-1.23) |
+--------------+
|           -1 |
+--------------+
1 row in set (0.00 sec)

mysql> select round(-1.2376,2);
+------------------+
| round(-1.2376,2) |
+------------------+
|            -1.24 |
+------------------+
1 row in set (0.00 sec)

mysql> select round(-1.2376,1);
+------------------+
| round(-1.2376,1) |
+------------------+
|             -1.2 |
+------------------+
1 row in set (0.00 sec)

mysql> select round(-1.2376,0);
+------------------+
| round(-1.2376,0) |
+------------------+
|               -1 |
+------------------+
1 row in set (0.00 sec)

mysql> select round(-1.2376,-1);
+-------------------+
| round(-1.2376,-1) |
+-------------------+
|                 0 |
+-------------------+
1 row in set (0.01 sec)

mysql> select round(21.298,-1); here -1 we shall go on left side decimal that
is 21 side and round it by 1 i.e 20
+------------------+
| round(21.298,-1) |
+------------------+
|               20 |
+------------------+
1 row in set (0.00 sec)


mysql> select round(291.298,-1); here we can see it rounded 291 to 290 by rounding
1 from 291 as it -1
+-------------------+
| round(291.298,-1) |
+-------------------+
|               290 |
+-------------------+
1 row in set (0.00 sec)


TRUNCATE(X,D): Returns the number X, truncated to D decimal places. If D is 0, the result has no decimal point or fractional part. D can be negative to cause D digits left of the decimal point of the value X to become zero.

mysql> select truncate(1.999,2);
+-------------------+
| truncate(1.999,2) |
+-------------------+
|              1.99 |
+-------------------+
1 row in set (0.00 sec)

mysql> select truncate(1.999,0);
+-------------------+
| truncate(1.999,0) |
+-------------------+
|                 1 |
+-------------------+
1 row in set (0.00 sec)

mysql> select truncate(122,-1);
+------------------+
| truncate(122,-1) |
+------------------+
|              120 |
+------------------+
1 row in set (0.01 sec)

mysql> select truncate(1222,-3);
+-------------------+
| truncate(1222,-3) |
+-------------------+
|              1000 |
+-------------------+
1 row in set (0.00 sec)




EXP(X): Returns the value of e (the base of natural logarithms) raised to the power of X. The inverse of this function is LOG() (using a single argument only) or LN().


mysql> select exp(2);
+------------------+
| exp(2)           |
+------------------+
| 7.38905609893065 |
+------------------+
1 row in set (0.01 sec)

mysql> select exp(-2);
+--------------------+
| exp(-2)            |
+--------------------+
| 0.1353352832366127 |
+--------------------+
1 row in set (0.00 sec)

mysql> select exp(0);
+--------+
| exp(0) |
+--------+
|      1 |
+--------+
1 row in set (0.00 sec)


POW(X,Y) / POWER(X,Y): Returns the value of X raised to the power of Y.

mysql> select power(2,2);
+------------+
| power(2,2) |
+------------+
|          4 |
+------------+
1 row in set (0.01 sec)

mysql> select power(2,3);
+------------+
| power(2,3) |
+------------+
|          8 |
+------------+
1 row in set (0.00 sec)

mysql> select power(2,-2);
+-------------+
| power(2,-2) |
+-------------+
|        0.25 |
+-------------+
1 row in set (0.00 sec)



SQRT(X): Returns the square root of a nonnegative number X.


mysql> select sqrt(24);
+-------------------+
| sqrt(24)          |
+-------------------+
| 4.898979485566356 |
+-------------------+
1 row in set (0.01 sec)

mysql> select sqrt(16);
+----------+
| sqrt(16) |
+----------+
|        4 |
+----------+
1 row in set (0.00 sec)

mysql> select sqrt(-16);
+-----------+
| sqrt(-16) |
+-----------+
|      NULL |
+-----------+
1 row in set (0.00 sec)





*/