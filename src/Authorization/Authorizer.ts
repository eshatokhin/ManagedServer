import { Account, sessionToken, TokenGenerator } from "../Server/Model";
import { UserCredentials } from "../Shared/Model";
import { SessionTokenDBAccess } from "./SeccionTokenDBAccess";
import { UserCredentialsDBAccess } from "./UserCredentialsDBAccess";


export class Authorizer implements TokenGenerator{

	private userCredDBAccess: UserCredentialsDBAccess = new UserCredentialsDBAccess()
	private sessionTokenDbAccess: SessionTokenDBAccess = new SessionTokenDBAccess();

	async generateToken(account: Account): Promise<sessionToken | undefined> {

		const resultAccount = await this.userCredDBAccess.getUserCredential(
			account.username, account.password
		)

		if (resultAccount){
			const token: sessionToken = {
				accessRights: resultAccount.accessRights,
				expirationTime: this.generateExpirationTime(),
				username: resultAccount.username,
				valid: true,
				tokenId: this.generateRandomTokenId()
			}
			await this.sessionTokenDbAccess.storeSessionToken(token);
			return token;
		} else {
			return undefined;
		}
	}

	private generateExpirationTime() {
		return new Date(Date.now() + 60 * 60 * 1000);
	}

	private generateRandomTokenId() {
		return Math.random().toString(36).slice(2);
	}
}