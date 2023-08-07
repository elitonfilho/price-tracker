import { BaseAPIInterface } from "../interfaces/baseAPIInterface";

export class BaseAPIStrategy implements BaseAPIInterface {
    getPage(url: string): Promise<string> {
    }

    getRegexMatch(pageData: string, regexExp: RegExp): string | null {
        
    }
}