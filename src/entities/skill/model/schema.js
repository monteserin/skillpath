import { db, DataTypes } from '@Application/database';

export default db.define('skill', {
	userId: DataTypes.STRING,
	name: DataTypes.STRING,
	value: DataTypes.INTEGER,
	isActive:DataTypes.BOOLEAN
});

