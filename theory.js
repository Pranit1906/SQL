/*

Example:


Let's say the mayor of the city wants to purchase some courses for his public as per gender.

The number that the mayor has is 100000 is population of the city. With this number it is difficult to decide how many courses to be purchased for Male, females and children.

Mayor ordered his employee to do a survey and get the number of Male, females and children in the city.

After the survey they got the output as 40000 Male,40000 Female and 20000 are children.

In the above example,100000 population is processed through surveys to get output as 40000 Male,40000 Female and 20000 Children.


                                                                 Survey                                                   40000 Male

100000   -----------------------------------------------------> 40000 Female

Population                                                                                                             20000 Children

                                                               Process

Data         ------------------------------------------------------> Information


Data

Unprocessed facts that are recorded.


Information

Processed Data is called Information.

*/


/*

Differentiate between data and information

       Data                                      Information
 1. It's unorganised and                1. Processed Data organised with
   raw facts which is requires            meaningful context.
   processing to be meaningful.    

2. Data doesn't depend on               2. Data is required to process
  any Information                         information from the data.

3. Data are text and numerical          3. Information is refined form
 values                                    of Data.

4. Bits and Bytes are the               4.Information is measured in 
 measuring unit of data.	             meaningful units like time, 
                                          quantity, etc.

5. Data can be easily                   5.Information can also be 
structured as Tabular data,             structured as Language,
Graph,Data tree	                         Ideas,Thoughts.

6.It's Low Level Language               6.It's Second Level Language.

7. Data doesn't helps                   7. It helps directly in
 in decision making                      decision making.

8. Example:- No of Employees            8. Example:- Details of employee
  in an organization                    like address, age, contact,etc.


*/

/*
Differentiate between sql and mysql
 
              MySQL                               SQL
 1.  It's Open Source Database          1.Structured Query Language
    used for Sql commands to            a programming language used for
    store data.                         managing RDBMS
    
 2. It's used for data                  2.It's used to query and 
   handling,storing,deleting,           to all required operations 
   updating the data in                 with commands to execute the
   tabular form.                        program.

 3. MySql is used as                    3.MySql uses Sql commands
  RDBMS for managing                    for data handling.
  relational databases. 
 
 4.It is available only                 4.It is available in many  
 in the English language.	            different languages.

 5. It supports for offering            5.SQL supports only a 
   multiple storage engine               single storage engine.
   along with plugin storage.

 6. Adavantage:-                        6.No need for coding
 Open-Source.                            High Speed
 Data security.                          Portability
 High Performance.                       Multiple views of data
 Data Security.                          Interactive Language
 Complete workflow controls.

 7. It Provides WorkBench tool          7. No connectors are 
  to design and development             available in SQL

  Error Code: 1452. Cannot add or update a child row: a foreign key
   constraint fails (`mysql_project`.`car_sells`, CONSTRAINT `car_sells_ibfk_1` FOREIGN KEY (`Car_Id`) REFERENCES `cars` (`Car_Id`))


*/

/*




-- (1 ,1031,130,'2023-07-01','2023-08-12'),
-- (2,1002,101,'2023-01-02','2023-01-16'),
-- (3,1034,133,'2023-07-27','2023-08-29'),
-- (4,1004,103,'2023-01-09','2023-01-26'),
-- (5,1036,135,'2023-08-13','2023-09-08'),
-- (6,1006,105,'2023-01-22','2023-02-17'),
-- (7,1039,138,'2023-08-27','2023-09-28'),
-- (8,1008,107,'2023-01-31','2023-02-26'),
-- (9,1042,141,'2023-09-13', '2023-10-28'),
-- (10,1010,109,'2023-02-08','2023-03-17'),
-- (11,1046,145,'2023-10-04', '2023-11-09'),
-- (12,1012,111,'2023-02-17','2023-03-19'),
-- (13,1019,158,'2020-08-14', '2023-08-14'),
-- (14,1014,113,'2023-02-28','2023-04-10'),
-- (15,1042,113,'2023-11-14','2023-11-14'),
-- (16,1043,142,'2023-09-19', '2023-10-18'),
-- (17,1048,147,'2023-10-16', '2023-12-06'),
-- (18,1049,148,'2023-10-19', '2023-11-25'),
-- (19,1019,118,'2023-04-01','2023-05-11'),
-- (20,1050,149,'2023-10-25', '2023-11-30'),
-- (21,1052,151,'2023-11-01', '2023-12-17'),
-- (22,1022,121,'2023-04-30','2023-06-12'),
-- (23,1054,153,'2023-11-15', '2023-11-15'),
-- (24,1024,123,'2023-05-11','2023-06-21'),
-- (25,1001,155, '2021-11-30', '2024-11-30'),
-- (26,1049,160,'2020-05-05', '2023-05-05'),
-- (27,1027,126,'2023-06-06','2023-07-30'),
-- (28,1041,140,'2023-09-09','2023-11-27'),
-- (29,1029,128,'2023-06-19','2023-07-04'),
-- (30,1013,157,'2020-01-31', '2023-01-31'),
-- (31,1001,100,'2023-01-01','2023-01-31'),
-- (32,1032,131,'2023-07-14','2023-08-24'),
-- (33,1033,132,'2023-07-20','2023-09-01'),
-- (34,1015,114,'2023-03-04','2023-04-14'),
-- (35,1035,134,'2023-08-03','2023-09-13'),
-- (36,1013,112,'2023-02-21','2023-03-25'),
-- (37,1037,136,'2023-08-19','2023-10-09'),
-- (38,1038,137,'2023-08-21','2023-09-14'),
-- (39,1009,108,'2023-02-04','2023-03-10'),
-- (40,1040,139,'2023-09-02','2023-10-23'),
-- (41,1016,115,'2023-03-09','2023-04-21'),
-- (42,1011,110,'2023-02-12','2023-03-12'),
-- (43,1017,116,'2023-03-18','2023-04-20'),
-- (44,1044,143,'2023-09-25', '2023-10-30'),
-- (45,1045,144,'2023-09-30', '2023-12-21'),
-- (46,1007,106,'2023-01-26','2023-02-22'),
-- (47,1047,146,'2023-10-08', '2023-11-18'),
-- (48,1018,117,'2023-03-27','2023-04-30'),
-- (49,1020,119,'2023-04-13','2023-05-23'),
-- (50,1021,120,'2023-04-25','2023-06-01'),
-- (51,1051,150,'2023-10-31', '2023-12-24'),
-- (52,1025,124,'2023-05-23','2023-06-30'),
-- (53,1053,152,'2023-11-07', '2023-12-27'),
-- (54,1026,125,'2023-05-29','2023-07-22'),
-- (55,1055,154,'2021-03-11', '2024-03-11'),
-- (56,1030,129,'2023-06-26','2023-08-03'),
-- (57,1002,156,'2021-03-24', '2024-03-24'),
-- (58,1028,127,'2023-06-12','2023-07-18'),
-- (59,1005,104,'2023-01-16','2023-02-10'),
-- (60,1019,159,'2020-02-01', '2023-02-01'),
(61 , 1023, 122, '2023-05-05', '2023-06-10');
-- (62,1042,118,'2023-11-12','2023-11-12'),
-- (63,1003,102,'2023-01-04','2023-01-29'),
-- (64,1047,103,'2023-11-17','2023-11-17');
-- (65,1048,127,'2023-11-19','2023-11-19'),
-- (66,1040,140,'2023-11-23','2023-11-23'),
-- (67,1041,158,'2023-12-03','2023-12-03'),
-- (68,1014,139,'2023-12-09','2023-12-09'),
-- (69,1016,119,'2023-12-14','2023-12-14'),
-- (70,1013,100,'2023-12-19','2023-12-19'),
-- (71,1003,134,'2023-12-23','2023-12-23'),
-- (72,1006,153,'2023-12-23','2023-12-23');


*/