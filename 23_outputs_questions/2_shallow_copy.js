var person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
};


var copiedPerson = Object.assign({}, person);

copiedPerson.firstName = 'Jane'; // disconnected

copiedPerson.address.street = 'Amphitheatre Parkway'; // connected
copiedPerson.address.city = 'Mountain View'; // connected

console.log(copiedPerson);
/**
 * {
 *   address: {
 *      street: "Amphitheatre Parkway",
 *     city: "Mountain View",
 *       state: "CA",
 *       country: "USA"
 *   }
 *   firstName: "Jane"
 *   lastName: "Doe"
 * }
 **/

console.log(person);
/**
 * {
 *   address: {
 *      street: "Amphitheatre Parkway",
 *     city: "Mountain View",
 *       state: "CA",
 *       country: "USA"
 *   }
 *   firstName: "Jane"
 *   lastName: "Doe"
 * }
 **/