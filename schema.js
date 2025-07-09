export const typeDefs = `#graphql
    type Flight_Details {
        flight_no: ID!
        airline: String!
        model: String!
        capacity: Int!
    }
    type Flight_Path {
        flight_no: ID!
        from: String!
        to: String!
        time: String!
    }
    type Seating {
        flight_no: ID!
        seat_no: ID!
        pnr: ID
    }
    type Booking_Details {
        pnr: ID!
        passenger_name: String!
    }
    type Searching_Flights {
        details: [Flight_Details]
        path: [Flight_Path]
    }
    type Query {
        getAllFlightPaths: [Flight_Path]
        getAllFlightDetails: [Flight_Details]
        getAllSeatings: [Seating]
        getAllBookingDetails: [Booking_Details]
        searchFlight: []
    }
`
