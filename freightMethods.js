class FreightMethodModel {
    constructor(name) {
        // The name of the movement type
        this.type = name;
        this.active = false;

        // The activity units (Ton-Miles or Miles) and the corresponding scalar
        this.activityUnits = "";
        this.activityQuantity = 0;

        // The current calculated amounts of pollution
        this.CO2 = 0;
        this.NOx = 0;
        this.PM = 0;

        // The general ranking, 1-6 with 6 being NON
        this.smartWayGeneral = 0;
        // The specific smartway usage, from Bin 1 to NON
        this.percentSmartWay = [0,0,0,0,0,0]
    }
}

var freightMethods = [
    new FreightMethodModel("Auto Carrier Trucking"),
    new FreightMethodModel("Dray Trucking"),
    new FreightMethodModel("Expedited Trucking"),
    new FreightMethodModel("Flatbed Trucking"),
    new FreightMethodModel("Heavy and Bulk Trucking"),
    new FreightMethodModel("Mixed Trucking"),
    new FreightMethodModel("Moving Van Trucking"),
    new FreightMethodModel("Package Delivery Trucking"),
    new FreightMethodModel("Refrigerated Trucking"),
    new FreightMethodModel("Specialty Haul Trucking"),
    new FreightMethodModel("Tanker Trucking"),
    new FreightMethodModel("Truckload Dry Van"),
    new FreightMethodModel("Logistics"),
    new FreightMethodModel("Multimodal"),
    new FreightMethodModel("Rail"),
    new FreightMethodModel("Barge")];
    
    var freightUnits = [
        "Miles",
        "Ton-Miles"
    ]
    
    var currentFreightUnit = "Miles"