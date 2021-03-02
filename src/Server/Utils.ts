import { Console } from "console";
import {parse, URL, UrlWithParsedQuery, UrlWithStringQuery} from "url";

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

	public static getUrlParameters(url: string | undefined): UrlWithParsedQuery | undefined{
		if (url) {
			return parse(url, true);
		} else {
			return undefined;
		}
	}
}