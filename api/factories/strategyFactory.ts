import { FactoryInterface } from "../interfaces/factoryInterface";
import { BaseRequestStrategy } from "../strategies/baseRequestStrategy";
import { BaseAPIStrategy } from "../strategies/baseAPIStrategy";

export class StrategyFactory implements FactoryInterface {
    strategies: (BaseRequestStrategy | BaseAPIStrategy)[];
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

    
    public get getStrategies() : Array<BaseRequestStrategy | BaseAPIStrategy> {
        return this.strategies
    }
    
}