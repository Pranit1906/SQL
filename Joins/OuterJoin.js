/*
Outer Join: 
1. An outer join returns all rows that satisfy the join condition 
 and also returns some or all of those rows from one table 
 for which no rows from the other table satisfy the join condition. 
 Such rows are not satisfied by a simple join.
2. The outer join is a type of join that returns all rows from one table 
 and the matched rows from another table. 
3. If there is no match, NULL values are returned 
 for columns from the table with no matching row.
*/
/*
Types Of Outer Join
1. Left Outer Join [left join] :-
   i. Returns all rows from the left table and the matched rows from the right table. 
  ii. If there is no match, NULL values are returned for columns from the right table.   
 iii. Syntax:-
     SELECT *FROM table1 LEFT OUTER JOIN 
     table2 ON table1.column_name = table2.column_name;

2. Right Outer Join[right join] :-
   i. Returns all rows from the right table and the matched rows from the left table. 
  ii. If there is no match, NULL values are returned for columns from the left table.
 iii. Syntax:-
     SELECT * FROM table1 RIGHT OUTER JOIN 
     table2 ON table1.column_name = table2.column_name;
    
3. FULL OUTER JOIN [FULL JOIN] :-
   i. Returns all rows when there is a match in either the left or right table. 
  ii. If there is no match, NULL values are returned for columns from the table with no matching row.
 iii. Syntax :-
      SELECT * FROM table1 FULL OUTER JOIN 
      table2 ON table1.column_name = table2.column_name;     

*/