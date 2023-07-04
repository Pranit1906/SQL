/*

1. Display car details where mileage is maximum for emission_norm = 'BS VI'

mysql> select Car_Name,Engine_Type, Mileage, Transmission,Emission_Norm, OnRoadPrice_In_Lakhs from cars
 where Mileage = all (select max(Mileage) from cars where Emission_Norm = 'BS VI');
+---------------------+----------------------------+---------+--------------+---------------+----------------------+
| Car_Name            | Engine_Type                | Mileage | Transmission | Emission_Norm | OnRoadPrice_In_Lakhs |
+---------------------+----------------------------+---------+--------------+---------------+----------------------+
| Maruti Suzuki Swift | K series Dual Jet - 1197cc |   23.32 | Manual       | BS VI         |                 7.03 |
+---------------------+----------------------------+---------+--------------+---------------+----------------------+
1 row in set (0.01 sec)


2. Display Cars Car_Name, Mileage, Emission_Norm, OnRoadPrice_In_Lakhs delivered between 17th Nov 23 and 23rd Dec 23.

mysql> select Car_Name, Mileage, Emission_Norm, OnRoadPrice_In_Lakhs from cars where 
car_Id in (select car_Id from car_sales where Delivery_Date between'2023-11-17'and'2023-12-23');
+----------------------+---------+---------------+----------------------+
| Car_Name             | Mileage | Emission_Norm | OnRoadPrice_In_Lakhs |
+----------------------+---------+---------------+----------------------+
| Tata Safari          |   16.79 | BS VI 2.0     |                19.71 |
| Tata Tiago Ev        |  250.00 | ZEV           |                 9.17 |
| Tata Tigor Ev        |  306.00 | ZEV           |                13.23 |
| Ford Endeavour       |   13.90 | BS IV         |                35.53 |
| Mahindra XUV 700     |   16.50 | BS VI 2.0     |                17.54 |
| MG Hector            |   13.79 | BS VI         |                17.71 |
| Tata Harrier         |   16.35 | BS VI 2.0     |                18.29 |
| Mahindra Scorpio-N   |   21.10 | BS VI 2.0     |                16.48 |
| Hyundai Creta        |   21.12 | BS VI         |                14.35 |
| Hyundai Venue        |   18.00 | BS VI 2.0     |                12.58 |
| Tata Nexon           |   23.22 | BS VI 2.0     |                11.89 |
| Maruti Suzuki Baleno |   22.94 | BS VI         |                 7.69 |
| Hyundai i20          |   20.30 | BS VI         |                 8.42 |
+----------------------+---------+---------------+----------------------+
13 rows in set (0.00 sec)


3.Display Maximum  and 2nd  last Maximum On Road Price for car using Co-Relation Sub Query.

mysql>  select car_name, Engine_Type,Transmission,Fuel_Type,
 OnRoadPrice_In_Lakhs from cars c 
where 0 = (select count(OnRoadPrice_In_Lakhs) from cars b  
where b.OnRoadPrice_In_Lakhs > c.OnRoadPrice_In_Lakhs);
+-----------------+-------------------------------------------+--------------+-----------+----------------------+
| car_name        | Engine_Type                               | Transmission | Fuel_Type | OnRoadPrice_In_Lakhs |
+-----------------+-------------------------------------------+--------------+-----------+----------------------+
| Mercedes-AWG GT | 4.0-litre V8 (twin turbocharger) - 3982cc | Automatic    | Petrol    |               388.85 |
+-----------------+-------------------------------------------+--------------+-----------+----------------------+
1 row in set (0.00 sec)

mysql>  select car_name, Engine_Type,Transmission,Fuel_Type,
 OnRoadPrice_In_Lakhs from cars c 
 where 54 = (select count(OnRoadPrice_In_Lakhs) from cars b
 where b.OnRoadPrice_In_Lakhs > c.OnRoadPrice_In_Lakhs);
+------------------------+---------------------------+--------------+-----------+----------------------+
| car_name               | Engine_Type               | Transmission | Fuel_Type | OnRoadPrice_In_Lakhs |
+------------------------+---------------------------+--------------+-----------+----------------------+
| Maruti Suzuki Alto 800 | F8D Petrol Engine - 796cc | Manual       | CNG       |                 4.21 |
+------------------------+---------------------------+--------------+-----------+----------------------+
1 row in set (0.00 sec)

mysql>  select car_name, Engine_Type,Transmission,Fuel_Type,
 OnRoadPrice_In_Lakhs from cars c where 53 
= (select count(OnRoadPrice_In_Lakhs) from cars b 
 where b.OnRoadPrice_In_Lakhs > c.OnRoadPrice_In_Lakhs);
+---------------+---------------------------+--------------+-----------+----------------------+
| car_name      | Engine_Type               | Transmission | Fuel_Type | OnRoadPrice_In_Lakhs |
+---------------+---------------------------+--------------+-----------+----------------------+
| Renault Kiwid | Kwids 3 cylinder - 999 cc | Manual       | Petrol    |                 5.55 |
+---------------+---------------------------+--------------+-----------+----------------------+
1 row in set (0.00 sec)
*/