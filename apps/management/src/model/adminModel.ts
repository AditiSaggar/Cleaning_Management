import { DataTypes, Model } from "sequelize";
import sequelize from '../dbConfigure/dbConnection';
import Role from "../utils/enums/indexEnums";


interface AdminAttributes {

    id?: number;
    name:string;
    phonenumber:number;
    password: string;
    email: string;
    Role: Role; 
}


class Admin extends Model<AdminAttributes> implements AdminAttributes {
    public id!: number;
    public name!:string;
    public phonenumber!:number;
    public password!: string;
    public email!: string;
    public Role!: Role;

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Admin.init({ 
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phonenumber: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Role: {
        type: DataTypes.ENUM,
        values: Object.values(Role),
    },
}, {
    sequelize,
    modelName: 'Admin' 
});


sequelize.sync()
    .then(() => {
        console.log('Admin table linked successfully!');
    })
    .catch((error) => {
        console.error('Unable to create table: ', error);
    });

export default Admin;