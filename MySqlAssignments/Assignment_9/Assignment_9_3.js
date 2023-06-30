/*

Consider the following MOVIE table and write the SQL queries based on it.

MovieID     MovieName       Category     ReleaseDate     ProductionCost    BusinessCost

001         Hindi_Movie      Musical      2018-04-23       124500            130000

002         Tamil_Movie      Action       2016-05-17       112000            118000

003         English_Movie    Horror       2017-08-06       245000            360000

004         Bengali_Movie    Adventure    2017-01-04       72000             100000

005         Telugu_Movie     Action          -             100000               -

006         Punjabi_Movie    Comedy          -              30500               -

a) Display all the information from the Movie table.

mysql> select * from Movie;
+---------+---------------+-----------+-------------+----------------+--------------+
| MovieID | MovieName     | Category  | ReleaseDate | ProductionCost | BusinessCost |
+---------+---------------+-----------+-------------+----------------+--------------+
|       1 | Hindi_Movie   | Musical   | 2018-04-23  |         124500 |       130000 |
|       2 | Tamil_Movie   | Action    | 2016-05-17  |         112000 |       118000 |
|       3 | English_Movie | Horror    | 2017-08-06  |         245000 |       360000 |
|       4 | Bengali_Movie | Adventure | 2017-01-04  |          72000 |       100000 |
|       5 | Telugu_Movie  | Action    | NULL        |         100000 |         NULL |
|       6 | Punjabi_Movie | Comedy    | NULL        |          30500 |         NULL |
+---------+---------------+-----------+-------------+----------------+--------------+
6 rows in set (0.00 sec)

b) List business done by the movies showing only MovieID, MovieName and Total_Earning. 
Total_Earning to be calculated as the sum of ProductionCost and BusinessCost.

mysql> select MovieId,MovieName,ProductionCost + BusinessCost as Total_Earning from Movie;
+---------+---------------+---------------+
| MovieId | MovieName     | Total_Earning |
+---------+---------------+---------------+
|       1 | Hindi_Movie   |        254500 |
|       2 | Tamil_Movie   |        230000 |
|       3 | English_Movie |        605000 |
|       4 | Bengali_Movie |        172000 |
|       5 | Telugu_Movie  |          NULL |
|       6 | Punjabi_Movie |          NULL |
+---------+---------------+---------------+
6 rows in set (0.00 sec)

c) List the different categories of movies.
mysql> select category from Movie;
+-----------+
| category  |
+-----------+
| Musical   |
| Action    |
| Horror    |
| Adventure |
| Action    |
| Comedy    |
+-----------+
6 rows in set (0.00 sec)

d) Find the net profit of each movie showing its MovieID, MovieName and NetProfit.
 Net Profit is to be calculated as the difference between Business Cost and Production Cost. 

 mysql> select MovieId,MovieName,BusinessCost - ProductionCost as NetEarning from Movie;
+---------+---------------+------------+
| MovieId | MovieName     | NetEarning |
+---------+---------------+------------+
|       1 | Hindi_Movie   |       5500 |
|       2 | Tamil_Movie   |       6000 |
|       3 | English_Movie |     115000 |
|       4 | Bengali_Movie |      28000 |
|       5 | Telugu_Movie  |       NULL |
|       6 | Punjabi_Movie |       NULL |
+---------+---------------+------------+
6 rows in set (0.01 sec)

*/