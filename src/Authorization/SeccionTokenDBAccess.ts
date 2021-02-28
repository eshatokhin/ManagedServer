import { rejects } from "assert";
import Nedb = require("nedb");
import { resolve } from "path";
import { sessionToken } from "../Server/Model";


export class SessionTokenDBAccess {

	private nedb: Nedb;

	constructor () {
		this.nedb = new Nedb('database/SessionToken.db');
		this.nedb.loadDatabase();
	}

	public async storeSessionToken(token: sessionToken): Promise<void> {
		return new Promise((resolve, reject) => {
			this.nedb.insert(token, (err) => {
				if (err) {
					reject(err);
				} else {
					resolve();
				}
			})
		})
	}
}
