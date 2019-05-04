
const Rental = require('./rental');

class FakeDb {

    constructor() {
        this.rentals = [{
            title: "Central Apartment",
            city: "New York",
            street: "Times Sqaure",
            category: "apartment",
            image: "http://via.placeholder.com/350x250",
            bedrooms: 3,
            description: "Very nice apartment",
            dailyRate: 34,
            shared: false,
          },
          {
            title: "Central Apartment 2",
            city: "San Francisco",
            street: "Main street",
            category: "condo",
            image: "http://via.placeholder.com/350x250",
            bedrooms: 2,
            description: "Very nice apartment",
            dailyRate: 12,
            shared: true,
          },
          {
            title: "Central Apartment 3",
            city: "Bratislava",
            street: "Hlavna",
            category: "condo",
            image: "http://via.placeholder.com/350x250",
            bedrooms: 2,
            description: "Very nice apartment",
            dailyRate: 334,
            shared: true,
          },
          {
            title: "Central Apartment 4",
            city: "Berlin",
            street: "Haupt strasse",
            category: "house",
            image: "http://via.placeholder.com/350x250",
            bedrooms: 9,
            description: "Very nice apartment",
            dailyRate: 33,
            shared: true,
        }]
    }

    pushRentalsToDB() {
        this.rentals.forEach((rental) => {
            const newR = new Rental(rental);
            newR.save();
        });
    }

    seedDB() {
        this.pushRentalsToDB();
    }

}

module.exports = FakeDb;
