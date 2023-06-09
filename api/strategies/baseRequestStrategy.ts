import axios, { AxiosResponse } from 'axios'
import { BaseRequestInterface } from "../interfaces/baseRequestInterface";

export class BaseRequestStrategy implements BaseRequestInterface {
    async getPage(url: string): Promise<string> {
        try {
            const response: AxiosResponse = await axios.get(url)
            return response.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(`Failed to fetch page: ${error.message}`)
            } else {
                throw new Error(`Unexpected error: ${error}`)
            }
        }
    }

    getRegexMatch(pageData: string, regexExp: RegExp): string | null {
        const match =  pageData.match(regexExp)
        return match ? match[0] : null
    }
}