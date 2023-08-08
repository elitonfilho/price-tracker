import { FactoryInterface } from "../interfaces/factoryInterface.js";
import { BaseRequestStrategy } from "../strategies/baseRequestStrategy.js";


// TODO: implement BasicAPStrategy
export class StrategyFactory implements FactoryInterface {
    strategies: (BaseRequestStrategy)[];
    activeStrategies: string
    /**
     * createStrategies
     */
    public createStrategies(): void {
        this.activeStrategies = `all`
        this.strategies = [
            new BaseRequestStrategy(``)
        ]
    }

    
    public get getStrategies() : Array<BaseRequestStrategy> {
        return this.strategies
    }
    
}