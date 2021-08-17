/**
 * A class for a parking system containing big, medium and small parking spaces 
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
const ParkingSystem = function(big, medium, small) {
    // Contains the number of spaces available for each size.
    this.data = { 1: big, 2: medium, 3: small }
}

/** 
 * Attempts to park a car in a parking space.
 * @param {number} carType // The size of vehicle
 * @return {boolean} // Whether or not the car was parked.
 */
ParkingSystem.prototype.addCar = function(carType) {
    // There is a parking space available that matches the car size.
    if (this.data[carType]) {
        // Decrement the amount of spaces available for that car size.
        this.data[carType] -= 1
        // Car is parked.
        return true
    }
    
    // No spaces available matching the car size, car cannot park.
    return false
}

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */