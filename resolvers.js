import flight_details from "./models/flight_details.js";
import flight_path from "./models/flight_path.js";
import seating from "./models/seating.js";
import booking_details from "./models/booking_details.js";

const resolvers = {
    Query: {
        getAllFlightPaths: async () => {
            try {
                return await flight_path.findAll();
            } catch(e) {
                throw new Error("Error fetching flights");
            }
        },
        getAllFlightDetails: async () => {
            try {
                return await flight_details.findAll();
            } catch(e) {
                throw new Error("Error fetching flights");
            }
        },
        getAllSeatings: async () => {
            try {
                return await seating.findAll();
            } catch(e) {
                throw new Error("Error fetching seats");
            }
        },
        getAllBookingDetails: async () => {
            try {
                return await booking_details.findAll();
            } catch(e) {
                throw new Error("Error fetching bookings");
            }
        }
    },
    Mutation: {
        
    }
};

export default resolvers;