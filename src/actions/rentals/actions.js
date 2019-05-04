export class InitRentals {
    
    static Type = 'RENTALS.INIT_RENTALS';
    type = InitRentals.Type;

    constructor(payload) {
        this.payload = payload;
    }
}

export class FetchRentalById {
    
    static Type = 'RENTALS.FETCH_RENTAL_BY_ID';
    type = FetchRentalById.Type;

    constructor(payload) {
        this.payload = payload;
    }
}
