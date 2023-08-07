import { StrategyFactory } from "../factories/strategyFactory";
import { DatabaseSingleton } from "../singletons/db/databaseSingleton";

class MainController {
    strategies: StrategyFactory;
    db: DatabaseSingleton;
    
    constructor(){
        this.strategies = new StrategyFactory()
        this.db = new DatabaseSingleton()
    }

    main(){
        // Fetch data compatible for that strategy
        let toFetch = this.db.getSearchObjects()
        
        // TODO: pass data / strategy to watcher -> watcher will call strategy ?

        for (let strat of this.strategies.getStrategies){
            strat.getPage(toFetch)
        }
        // Launch strategy
        // Store results / launch effects
    }

}