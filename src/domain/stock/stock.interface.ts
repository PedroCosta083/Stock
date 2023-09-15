import Address from "../objects/address/address";
import Status from "../objects/status/status";

export default interface StockInterface{
    get  depth (): number;
    get  height():number;
    get  width():number;
    get  status():Status;
    get  address():Address;
    get numberOfItensInStock() :number;
    get totalCapacity() :number;
    validateStock():void;
    calculateArea():number;
    calculateSize():number;
}