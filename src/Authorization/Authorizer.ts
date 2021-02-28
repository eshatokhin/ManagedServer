import { Account, sessionToken, TokenGenerator } from "../Server/Model";


export class Authorizer implements TokenGenerator{
	async generateToken(account: Account): Promise<sessionToken | undefined> {
		if (account.username === 'abcd' && account.password === '1234') {
			return {
				tokenId: 'someTokenId'
			};
		} else {
			return undefined;
		}
	}

}