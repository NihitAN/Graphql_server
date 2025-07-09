import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const flight_details = sequelize.define('flight_details', {
    flight_no: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    airline: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: false,
    freezeTableName: true,
})

const syncFlightDetails = async () => {
    try {
        sequelize.sync();
        console.log('Flight details table synced');
    }
    catch(err) {
        console.log('Unsuccessful', err);
    }
}

syncFlightDetails();

export default flight_details;