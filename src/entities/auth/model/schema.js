import { db , DataTypes} from '@Application/database';

export default db.define('user', {
	auth0Id: DataTypes.STRING,
	teacherId: DataTypes.STRING,
	cod: DataTypes.STRING,
	student: DataTypes.BOOLEAN
});

