import { AccessRight } from "../Shared/Model";

export interface Account {
	username: string;
	password: string;
}

export interface Handler {
	handleRequest(): void;
}

export interface sessionToken {
	tokenId: string,
	username: string,
	valid: boolean,
	expirationTime: Date,
	accessRights: AccessRight[]
}

export interface TokenGenerator {
	generateToken(account: Account): Promise<sessionToken | undefined>
}