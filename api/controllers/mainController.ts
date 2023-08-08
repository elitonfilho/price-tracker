import { StrategyFactory } from "../factories/strategyFactory.js";
import { DatabaseSingleton } from "../singletons/db/databaseSingleton.js";

export class MainController {
    strategies: StrategyFactory;
    db: DatabaseSingleton;
    
    constructor(){
        this.strategies = new StrategyFactory()
        this.db = new DatabaseSingleton()
    }

    async main(){
        // Fetch data compatible for that strategy
        let toFetch = this.db.getSearchObjects() // TODO: filter from strategy ?
        
        // TODO: pass data / strategy to watcher -> watcher will call strategy ?

        for (const strat of this.strategies.getStrategies){
            for (const {url} of toFetch){
                const page = await strat.getPage(url)
                const match = strat.getRegexMatch(page, '')
                console.log(match)
            }
        }
        // Launch strategy
        // Store results / launch effects
    }

}