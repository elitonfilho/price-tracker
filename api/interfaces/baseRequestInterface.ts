export interface BaseRequestInterface {
    defaultRegex : RegExp
    getPage(url: string): Promise<string>
    getRegexMatch(pageData: string, regexExp: RegExp | string): RegExpMatchArray
}