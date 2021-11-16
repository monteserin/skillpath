import { ManagementClient, verifyAuthToken } from '../auth0';
import UserModel from '../../user/model';

const AuthService = () => ({
    async signIn(providerToken) {
        const { id, email, email_verified } = await verifyAuthToken(providerToken);
        console.log(id)

        const [user] = await UserModel.findOrCreate({auth0Id:id}, {email});

        console.log(9)

        return { user, verified: email_verified };
    },
    deleteUser(userProviderId) {
        return ManagementClient.deleteUser({ id: userProviderId });
    },
});

export default AuthService;