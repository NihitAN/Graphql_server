import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const seating = sequelize.define('seating', {
    flight_no: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    seat_no: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    pnr: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    timestamps: false,
    freezeTableName: true,
})

const syncSeating = async () => {
    try {
        sequelize.sync();
        console.log('Seating table synced');
    }
    catch(err) {
        console.log('Unsuccessful', err);
    }
}

syncSeating();

export default seating;