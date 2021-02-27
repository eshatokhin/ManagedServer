import {parse, URL} from "url";

export class Utils{
	public static getUrlBasePath(url: string | undefined): string{
		if (url){
			const parseUrl = parse(url);
			return parseUrl.pathname!.split("/")[1];
		}
		else {
			return "";
		}
	}
}