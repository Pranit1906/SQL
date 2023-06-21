/*

Write commands in SQL for (i) to (iii) and output for (iv) and (v).

Table : Store

StoreId             Name             Location           City          NoOfEmp         DateOpen         SalesAmt

S101            Planet Fashion        Bandra            Mumbai          7             2015-10-16         40000

S102                Vogue           Karol Bagh          Delhi           8             2015-07-14         120000

S103                Trends             Powai            Mumbai          10            2015-06-24         30000

S104            Super Fashion          Thane            Mumbai          11            2015-02-06         45000

S105              Annabelle          South Extn.        Delhi           8             2015-04-09         60000

S106                 Rage          Defence Colony       Delhi           5             2015-03-01         20000

(i) To display names of stores along with Sales Amount of those stores that are located in Mumbai.
mysql> select* from Store;
+---------+----------------+----------------+--------+---------+------------+----------+
| StoreId | Name           | Location       | City   | NoOfEmp | Date       | SalesAmt |
+---------+----------------+----------------+--------+---------+------------+----------+
| S101    | Planet Fashion | Bandra         | Mumbai |       7 | 2015-10-16 |    40000 |
| S102    | Vogue          | Karol Bagh     | Delhi  |       8 | 2015-07-14 |   120000 |
| S103    | Trends         | Powai          | Mumbai |      10 | 2015-06-24 |    30000 |
| S104    | Super Fashion  | Thane          | Mumbai |      11 | 2015-02-06 |    45000 |
| S105    | Annabelle      | South Extn     | Delhi  |       8 | 2015-04-09 |    60000 |
| S106    | Rage           | Defence Colony | Delhi  |       5 | 2015-03-01 |    20000 |
+---------+----------------+----------------+--------+---------+------------+----------+
6 rows in set (0.00 sec)

mysql> select Name,SalesAmt from Store where City = 'Mumbai';
+----------------+----------+
| Name           | SalesAmt |
+----------------+----------+
| Planet Fashion |    40000 |
| Trends         |    30000 |
| Super Fashion  |    45000 |
+----------------+----------+
3 rows in set (0.00 sec)

(ii) To display the details of store in alphabetical order of name.
mysql> select * from Store order by Name;
+---------+----------------+----------------+--------+---------+------------+----------+
| StoreId | Name           | Location       | City   | NoOfEmp | Date       | SalesAmt |
+---------+----------------+----------------+--------+---------+------------+----------+
| S105    | Annabelle      | South Extn     | Delhi  |       8 | 2015-04-09 |    60000 |
| S101    | Planet Fashion | Bandra         | Mumbai |       7 | 2015-10-16 |    40000 |
| S106    | Rage           | Defence Colony | Delhi  |       5 | 2015-03-01 |    20000 |
| S104    | Super Fashion  | Thane          | Mumbai |      11 | 2015-02-06 |    45000 |
| S103    | Trends         | Powai          | Mumbai |      10 | 2015-06-24 |    30000 |
| S102    | Vogue          | Karol Bagh     | Delhi  |       8 | 2015-07-14 |   120000 |
+---------+----------------+----------------+--------+---------+------------+----------+
6 rows in set (0.00 sec)

(iii) To display the City and the number of stores located in that City, only if number of stores is more than 2.
mysql> Select count(*) as No_Of_Stores,City from store group by City having count(*)>2;
+--------------+--------+
| No_Of_Stores | City   |
+--------------+--------+
|            3 | Mumbai |
|            3 | Delhi  |
+--------------+--------+
2 rows in set (0.00 sec)

(iv) SELECT MIN(DATEOPEN) FROM STORE;
mysql> select min(Date) from Store;
+------------+
| min(Date)  |
+------------+
| 2015-02-06 |
+------------+
1 row in set (0.00 sec)

(v) SELECT COUNT(STOREID), NOOFEMP FROM STORE GROUP BY NOOFEMP HAVING MAX(SALESAMT)<60000;
mysql> select count(StoreId),NoOfEmp From Store group by NoOfEmp having max(SalesAmt) < 60000;
+----------------+---------+
| count(StoreId) | NoOfEmp |
+----------------+---------+
|              1 |       7 |
|              1 |      10 |
|              1 |      11 |
|              1 |       5 |
+----------------+---------+
4 rows in set (0.01 sec)
*/