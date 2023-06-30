/*

Write a algorithm for the following:

Given  the  speed  of  the  wind  in  mph,  display  its  category,  based  on  the following table: 

Wind Speed (mph)                  Category

Below 25                       Not a strong wind

[25, 39)                         Strong wind

[39, 55)                           Gale

[55, 72]                         Whole Gale

Above 72                         Hurricane

*/

const windSpeed  = (speed)=>{
    switch (speed > 0) {
        case speed < 25:
            console.log(`${speed} is Not a Strong Wind`);
            break;
        
        case(speed>=25 && speed<39):
        console.log(`${speed} is a Strong Wind`);
        break;

        case(speed>=39 && speed<55):
        console.log(`${speed} is a Gale Wind`);
        break;

        case(speed>=55 && speed<=72):
        console.log(`${speed} is a Whole Gale Wind`);
        break;
    
        case(speed>72):
        console.log(`${speed} is a Hurricane`);
        break;

        default:
            console.log('Failed to Calculate Wind Speed ')
            break;
    }

}

windSpeed(25);
windSpeed(40);
windSpeed(55);
windSpeed(73);