import Stock from "./stock.entitie";

export default interface StockRepositoryInterface{
    add(stock: Stock) : Promise<void>;
    deactivate(stockId : string) : Promise<void>;
    findById(stockId : string) : Promise<Stock>;
    findAll():Promise<Stock[]>;
}