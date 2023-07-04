/*

1. Show  Customers  who has more than car Purchase.


select count(*),Cust_Id, concat(First_Name,'  ',Last_Name) as Name from customer natural join car_sales
 group by Cust_Id having count(*)>1 ;

+----------+---------+-----------------+
| count(*) | Cust_Id | Name            |
+----------+---------+-----------------+
|        2 |     100 | Madan  lal      |
|        2 |     103 | Presh  Patil    |
|        2 |     113 | Bajrang  Dal    |
|        2 |     118 | Savita  Gadhge  |
|        2 |     119 | Rohit  Joshi    |
|        2 |     127 | Morya  Pandit   |
|        2 |     134 | Gayatri  Shinde |
|        2 |     139 | Jyoti  Jagdhale |
|        2 |     140 | Tukaram  Thorat |
|        2 |     153 | Naseem  Yadav   |
|        2 |     158 | Lakshman  Deghe |
+----------+---------+-----------------+
11 rows in set (0.01 sec)



2.	Display Car_name, Car_brand, Car_model and NoOfSeats from given tables.

mysql> select c.Car_Name as Car_Name, m.NoOfSeats, m.Model_Type 
as Model_Name, b.Brand_Name as Brand_Name from cars c 
left join car_models m on c.Model_Id = m.Model_Id 
right join car_brands b on c.Brand_Id = b.Brand_Id;
+---------------------------------+-----------+------------------------+---------------------+
| Car_Name                        | NoOfSeats | Model_Name             | Brand_Name          |
+---------------------------------+-----------+------------------------+---------------------+
| Ford EcoScport                  |         5 | Sub_Compact_SUV        | Ford India          |
| Ford Endeavour                  |         7 | Large_SUV              | Ford India          |
| Hyundai Grand i10               |         5 | Mini_Hatchbacks        | Hyundai Motor India |
| Hyundai i20                     |         5 | Mini_Hatchbacks        | Hyundai Motor India |
| Hyundai Aura                    |         5 | Small_Sedan            | Hyundai Motor India |
| Hyundai Creta                   |         5 | Compact_SUV            | Hyundai Motor India |
| Hyundai Verna                   |         5 | Mid_Sedan              | Hyundai Motor India |
| Hyundai Venue                   |         5 | Sub_Compact_SUV        | Hyundai Motor India |
| Kia Seltos                      |         5 | Sub_Compact_SUV        | Kia India           |
| Kia Carnival                    |         7 | Large_MUV              | Kia India           |
| Kia Carens                      |         5 | Mini_MUV               | Kia India           |
| Skoda Slavia                    |         5 | Mid_Sedan              | Skoda India         |
| Skoda Kodiaq                    |         5 | Executive_Luxuary_Cars | Skoda India         |
| Tata Tigor                      |         5 | Small_Sedan            | Tata Motors         |
| Tata Nexon                      |         5 | Compact_SUV            | Tata Motors         |
| Tata Harrier                    |         7 | Mid_Size_SUV           | Tata Motors         |
| Tata Safari                     |         7 | Large_SUV              | Tata Motors         |
| Tata Tiago Ev                   |         5 | Small_Hatchbacks       | Tata Motors         |
| Tata Tigor Ev                   |         5 | Mid_Sedan              | Tata Motors         |
| Renault Triber                  |         5 | Mini_MUV               | Renault India       |
| Renault Kiwid                   |         5 | Small_Hatchbacks       | Renault India       |
| MG Comet EV                     |         5 | Small_Hatchbacks       | MG Motor India      |
| MG ZS EV                        |         5 | Compact_SUV            | MG Motor India      |
| MG Hector                       |         7 | Mid_Size_SUV           | MG Motor India      |
| Toyota Innova Crysta            |         7 | Mid_MUV                | Toyota India        |
| Toyota Vellfire                 |         7 | Large_MUV              | Toyota India        |
| Toyota Fortuner                 |         7 | Mid_MUV                | Toyota India        |
| Honda Amaze                     |         5 | Small_Sedan            | Honda India         |
| Honda City                      |         5 | Mid_Sedan              | Honda India         |
| Honda Accord                    |         5 | Mid_Sedan              | Honda India         |
| Mahindra Scorpio-N              |         7 | Mid_Size_SUV           | Mahindra            |
| Mahindra XUV 700                |         7 | Large_SUV              | Mahindra            |
| Mahindra THAR                   |         7 | Mid_Size_SUV           | Mahindra            |
| Mahindra Marazzo                |         7 | Mid_MUV                | Mahindra            |
| Maruti Suzuki Wagon R           |         5 | Mini_Hatchbacks        | Maruti Suzuki       |
| Maruti Suzuki Swift             |         5 | Small_Hatchbacks       | Maruti Suzuki       |
| Maruti Suzuki Baleno            |         5 | Small_Hatchbacks       | Maruti Suzuki       |
| Maruti Suzuki Alto 800          |         5 | Mini_Hatchbacks        | Maruti Suzuki       |
| Maruti Suzuki Dzire             |         5 | Small_Sedan            | Maruti Suzuki       |
| Maruti Suzuki Ertiga            |         5 | Mini_MUV               | Maruti Suzuki       |
| Maruti Suzuki XL6               |         7 | Large_MUV              | Maruti Suzuki       |
| BMW M8                          |         2 | Coupe                  | BMW India           |
| BMW Z4                          |         5 | Convertible            | BMW India           |
| BMW M2                          |         5 | Convertible            | BMW India           |
| BMW X1                          |         5 | Executive_Luxuary_Cars | BMW India           |
| Jeep Compass                    |         5 | Executive_Luxuary_Cars | Jeep India          |
| Jeep Wrangler                   |         7 | Mid_Size_SUV           | Jeep India          |
| Mercedes-AWG GT                 |         2 | Coupe                  | Mercedes-Benz India |
| Mercedes-Benz AMG E53 Cabriolet |         5 | Convertible            | Mercedes-Benz India |
| Mercedes-Benz AMG SL55 Roadster |         5 | Convertible            | Mercedes-Benz India |
| Mercedes-Benz A Class           |         5 | Executive_Luxuary_Cars | Mercedes-Benz India |
| Audi RS5 Coupe                  |         2 | Coupe                  | Audi India          |
| Audi A3 Cabriolet               |         5 | Convertible            | Audi India          |
| Jaguar F-Type                   |         5 | Convertible            | Jaguar India        |
| Jaguar I-Pace                   |         5 | Executive_Luxuary_Cars | Jaguar India        |
+---------------------------------+-----------+------------------------+---------------------+
55 rows in set (0.01 sec)




3.	Display Car details where Car Fuel type  is Electric with purchase date;

mysql> select c.Car_Name as Car_Name, m.Model_Type as Model_Name, b.Brand_Name as Brand_Name , 
c.Mileage, m.NoOfSeats , s.purchase_date from cars c 
left join car_models m on c.Model_Id = m.Model_Id 
right join car_brands b on c.Brand_Id = b.Brand_Id  
right join car_sales s on c.Car_Id = s.Car_Id  
where c.Fuel_Type = "Electric";
+---------------+------------------------+----------------+---------+-----------+---------------+
| Car_Name      | Model_Name             | Brand_Name     | Mileage | NoOfSeats | purchase_date |
+---------------+------------------------+----------------+---------+-----------+---------------+
| Jaguar I-Pace | Executive_Luxuary_Cars | Jaguar India   |  470.00 |         5 | 2023-08-19    |
| MG Comet EV   | Small_Hatchbacks       | MG Motor India |  230.00 |         5 | 2023-09-19    |
| MG ZS EV      | Compact_SUV            | MG Motor India |  461.00 |         5 | 2023-09-25    |
| Tata Tiago Ev | Small_Hatchbacks       | Tata Motors    |  250.00 |         5 | 2023-10-19    |
| Tata Tiago Ev | Small_Hatchbacks       | Tata Motors    |  250.00 |         5 | 2020-05-05    |
+---------------+------------------------+----------------+---------+-----------+---------------+
5 rows in set (0.01 sec)


4. Display Customers who have purchased cars under 15 lakhs with car name , brand name and purchase date.
mysql> select concat(cust.First_Name,' ',cust.Last_Name) as Name, c.Car_Name, b.Brand_Name, c.OnRoadPrice_In_Lakhs,
 s.purchase_date from cars c left join car_sales s on c.Car_Id = s.Car_Id left join car_brands b on c.Brand_Id = b.Brand_Id 
left join customer cust on s.Cust_Id = cust.Cust_Id where c.OnRoadPrice_In_Lakhs < 15.00 order by OnRoadPrice_In_Lakhs;
+---------------------+------------------------+---------------------+----------------------+---------------+
| Name                | Car_Name               | Brand_Name          | OnRoadPrice_In_Lakhs | purchase_date |
+---------------------+------------------------+---------------------+----------------------+---------------+
| Presh Patil         | Maruti Suzuki Alto 800 | Maruti Suzuki       |                 4.21 | 2023-01-09    |
| Wright Young        | Renault Kiwid          | Renault India       |                 5.55 | 2023-10-04    |
| Jamnat Bagal        | Hyundai Grand i10      | Hyundai Motor India |                 6.79 | 2023-01-16    |
| Sanit Dubal         | Maruti Suzuki Swift    | Maruti Suzuki       |                 7.03 | 2023-01-02    |
| Chaitanya Joshi     | Maruti Suzuki Swift    | Maruti Suzuki       |                 7.03 | 2021-03-24    |
| Raja Joshi          | Renault Triber         | Renault India       |                 7.40 | 2023-04-30    |
| Prathmesh Deshpande | Tata Tigor             | Tata Motors         |                 7.43 | 2023-01-31    |
| Mahesh Bhhat        | Hyundai Aura           | Hyundai Motor India |                 7.50 | 2023-02-04    |
| Yogesh Mohan        | Maruti Suzuki Baleno   | Maruti Suzuki       |                 7.69 | 2023-01-04    |
| Gayatri Shinde      | Maruti Suzuki Baleno   | Maruti Suzuki       |                 7.69 | 2023-12-23    |
| Sahil Mohan         | MG Comet EV            | MG Motor India      |                 8.40 | 2023-09-19    |
| Paresh Bapat        | Hyundai i20            | Hyundai Motor India |                 8.42 | 2023-01-22    |
| Naseem Yadav        | Hyundai i20            | Hyundai Motor India |                 8.42 | 2023-12-23    |
| Simran Thakur       | Maruti Suzuki Wagon R  | Maruti Suzuki       |                 8.63 | 2021-11-30    |
| Madan lal           | Maruti Suzuki Wagon R  | Maruti Suzuki       |                 8.63 | 2023-01-01    |
| Mandini Kapoor      | Tata Tiago Ev          | Tata Motors         |                 9.17 | 2023-10-19    |
| Deepti Tendulkar    | Tata Tiago Ev          | Tata Motors         |                 9.17 | 2020-05-05    |
| Tyler Carter        | Ford EcoScport         | Ford India          |                 9.28 | 2023-10-31    |
| Suraj Patil         | Maruti Suzuki Dzire    | Maruti Suzuki       |                 9.40 | 2023-01-26    |
| Pooja Kapur         | Honda Amaze            | Honda India         |                10.05 | 2023-02-08    |
| Henderson Cook      | Tata Nexon             | Tata Motors         |                11.89 | 2020-01-31    |
| Mahi Singh          | Tata Nexon             | Tata Motors         |                11.89 | 2023-02-21    |
| Madan lal           | Tata Nexon             | Tata Motors         |                11.89 | 2023-12-19    |
| Lakshman Deghe      | Maruti Suzuki Ertiga   | Maruti Suzuki       |                12.20 | 2020-08-14    |
| Savita Gadhge       | Maruti Suzuki Ertiga   | Maruti Suzuki       |                12.20 | 2023-04-01    |
| Wright Young        | Maruti Suzuki Ertiga   | Maruti Suzuki       |                12.20 | 2020-02-01    |
| Manjili Shah        | Hyundai Venue          | Hyundai Motor India |                12.58 | 2023-03-09    |
| Rohit Joshi         | Hyundai Venue          | Hyundai Motor India |                12.58 | 2023-12-14    |
| Carter Adams        | Mahindra THAR          | Mahindra            |                12.71 | 2023-09-13    |
| Bajrang Dal         | Mahindra THAR          | Mahindra            |                12.71 | 2023-11-14    |
| Savita Gadhge       | Mahindra THAR          | Mahindra            |                12.71 | 2023-11-12    |
| Alia Dhawan         | Kia Seltos             | Kia India           |                12.87 | 2023-03-18    |
| Tanuj Shetty        | Hyundai Verna          | Hyundai Motor India |                12.91 | 2023-03-04    |
| Wes Bell            | Tata Tigor Ev          | Tata Motors         |                13.23 | 2023-10-25    |
| Sramesh Gaikwad     | Honda City             | Honda India         |                13.68 | 2023-02-12    |
| Rohit Joshi         | Kia Carens             | Kia India           |                14.11 | 2023-04-13    |
| Ram Rajput          | Maruti Suzuki XL6      | Maruti Suzuki       |                14.21 | 2023-04-05    |
| Bajrang Dal         | Hyundai Creta          | Hyundai Motor India |                14.35 | 2023-02-28    |
| Jyoti Jagdhale      | Hyundai Creta          | Hyundai Motor India |                14.35 | 2023-12-09    |
+---------------------+------------------------+---------------------+----------------------+---------------+
39 rows in set (0.02 sec)

*/