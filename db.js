import { Sequelize } from "sequelize";

const sequelize = new Sequelize('flight_db', 'root', 'nihit', {host: 'localhost', dialect: 'mysql'});

const connectDB = async () => {
    try {
        sequelize.authenticate();
        console.log('Connection successful');
    }
    catch(err) {
        console.log('Unsuccessful', err);
    }
}

connectDB();

export default sequelize;