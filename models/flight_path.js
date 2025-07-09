import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const flight_path = sequelize.define('flight_path', {
    flight_no: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    from: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    to: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
}, {
    timestamps: false,
    freezeTableName: true,
})

const syncFlightPath = async () => {
    try {
        sequelize.sync();
        console.log('Flight path table synced');
    }
    catch(err) {
        console.log('Unsuccessful', err);
    }
}

syncFlightPath();

export default flight_path;