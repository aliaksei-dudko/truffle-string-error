let vehicle_details = hostObject.getVehicleData();
let vehicle_color = hostObject.getColorAsString();

try {
    console.log("vehicle details: " + JSON.stringify(vehicle_details) + "\n")

    // assign color using spread syntax
    let vehicle_details_one = {...vehicle_details, ...vehicle_color};
    console.log("vehicle details with color using spread syntax: " + JSON.stringify(vehicle_details_one) + "\n")

    // assign color using for cycle
    let vehicle_details_two = vehicle_details;
    for (let field in vehicle_color) {
        vehicle_details_two[field] = vehicle_color[field]
    }
    console.log("vehicle details with color using for cycle: " + JSON.stringify(vehicle_details_two) + "\n")

    // assign to new field
    vehicle_details.new_field = vehicle_color;
    console.log("vehicle details with color using new field: " + JSON.stringify(vehicle_details) + "\n")
    // Object.assign
    Object.assign(vehicle_details, vehicle_color); // error 
    console.log("never reach here");
} catch (ex) {
    console.log(ex);
}


// transform(async (event) => {
//     var map = dc.getDataFromTideV2();
//     //JavaScript object named car with some defined properties inside it
//     var car = {
//         brand: 'BMW', //brand property of car object having 'BMW' as its assigned value
//         year: 2010 //year property of car object having 2010 as its assigned value
//     };
//
//     // car = Object.assign(car, map);
//     // car.new_field = map.key1;
//     Object.assign(car, map);
//     // for (var field in map) {
//     //     car[field] = map[field]
//
//     // }
//     console.log(JSON.stringify(car))
//     // dc.transformData(map);
//     // event.data.udo.string = map;
// //   await table.lookup(event.data.udo.email, ["gender", "first_name", "profession", "age"])
//     // .then(l => {
//     // const dc_resp = l.getData();
//     // event.data.udo = l;
//     // console.log(l.get(0))
//     // Object.assign(event.data.udo, l)
//     // })
// })