import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const booking_details = sequelize.define('booking_details', {
    pnr: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    passenger_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
    freezeTableName: true,
})

const syncBookingDetails = async () => {
    try {
        sequelize.sync();
        console.log('Booking details table synced');
    }
    catch(err) {
        console.log('Unsuccessful', err);
    }
}

syncBookingDetails();

export default booking_details;