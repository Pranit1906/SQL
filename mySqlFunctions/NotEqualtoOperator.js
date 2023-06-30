/*

What is <> operator in mysql?

<=> Operator is used to compare NULL values with the fields. 
If normal =(equals) Operators return NULL if one of the comparison value is NULL.
With <=> operator returns true or false.



Here is the answer – Technically there is no difference between != and <>.
Both of them work the same way and there is absolutely no difference in terms of performance or result.

Here is the follow up question I received right I answer that there is no difference between those operator.

If != and <> both are the same, which one should be used in SQL queries?

Here is the answer – You can use either != or <> both in your queries as both technically same
but I prefer to use <> as that is SQL-92 standard.


Example:- Here we ignore id = 3 in below query by using id <>3;

mysql> select id, Student_Salary,Student_Age from employee where (Student_Salary,Student_Age) in 
(select Student_Salary,Student_Age from employee where id between 1 and 5) and id <> 3;
+----+----------------+-------------+
| id | Student_Salary | Student_Age |
+----+----------------+-------------+
|  1 |          35000 |          26 |
|  2 |          40000 |          18 |
|  4 |          27000 |          23 |
|  5 |          31000 |          26 |
+----+----------------+-------------+
4 rows in set (0.00 sec)


*/