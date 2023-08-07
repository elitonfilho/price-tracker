export interface BaseAPIInterface {
    getPage(url: string): Promise<string>
    getRegexMatch(pageData: string, regexExp: RegExp): string | null
}