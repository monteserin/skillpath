import { db, DataTypes } from '@Application/database';

export default db.define('user', {
	auth0Id: DataTypes.STRING,
	email: DataTypes.STRING,
});

