import { IncomingMessage, ServerResponse } from "http";
import { HTTP_CODES } from "../Shared/Model";

export abstract class BaseRequestHandler {

	protected req: IncomingMessage;
	protected res: ServerResponse;

	public constructor(req: IncomingMessage, res: ServerResponse) {
		this.req = req;
		this.res = res;
	}

	abstract handleRequest(): Promise<void>

	protected async handleNotFound() {
		this.res.statusCode = HTTP_CODES.NOT_FOUND;
		this.res.write('not found');
		console.log('not found')
	}

	protected respondJsonObject(code: HTTP_CODES, object: any) {
		this.res.writeHead(code, { "Content-Type": "application/JSON" });
		this.res.write(JSON.stringify(object));
		console.log(JSON.stringify(object));
	}

	protected respondBadRequest(message: string) {
		this.res.statusCode = HTTP_CODES.BAD_REQUEST;
		this.res.write(message);
		console.log(message);
	}

	protected respondUnAuthorized(message: string) {
		this.res.statusCode = HTTP_CODES.UNAUTHORIZED;
		this.res.write(message);
		console.log(message);
	}

	protected respondText(httpCode: HTTP_CODES, message: string) {
		this.res.statusCode = httpCode;
		this.res.write(message);
		console.log(message);
	}

	protected async getRequestBody(): Promise<any> {
		return new Promise((resolve, reject) => {
			let body = "";
			this.req.on("data", (data: string) => {
				body += data;
			});
			this.req.on("end", () => {
				try {
					resolve(JSON.parse(body));
				} catch (error) {
					reject(error);
				}
			});
			this.req.on("error", (error: any) => {
				reject(error);
			})
		});
	}
}