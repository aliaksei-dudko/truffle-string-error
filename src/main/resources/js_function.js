let vehicle_details = hostObject.getVehicleData();
let vehicle_color = hostObject.getColorAsString();
console.log("vehicle details: " + JSON.stringify(vehicle_details) + "\n")

try {

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

    // !!!!ERROR
    // Object.assign
    Object.assign(vehicle_details, vehicle_color); // com.oracle.truffle.api.dsl.UnsupportedSpecializationException, java string was not converted to TruffleString
    console.log("never reach here");
} catch (ex) {
    console.log(ex);
}