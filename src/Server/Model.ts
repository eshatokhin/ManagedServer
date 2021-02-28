export interface Account {
	username: string;
	password: string;
}

export interface Handler {
	handleRequest(): void;
}

export interface sessionToken {
	tokenId: string;
}

export interface TokenGenerator {
	generateToken(account: Account): Promise<sessionToken | undefined>
}