import { BaseRequestStrategy } from "../strategies/baseRequestStrategy";

export class StrategyFactory {
    strategies: BaseRequestStrategy[];
    /**
     * createStrategies
     */

    public createStrategies() {
        this.strategies = [
            new BaseRequestStrategy()
        ]
        
    }
}