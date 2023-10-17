
import Base, { BaseProps } from "../base/base.entity";
import Address from "../objects/address/address";
import Status from "../objects/status/status";
import StockInterface from "./stock.interface";

export type StockProps = BaseProps &{
    depth:number;
    height:number;
    width:number;
    status:Status;
    address:Address;
    numberOfItensInStock:number;
    totalCapacity?:number;
}

export default class Stock extends Base implements StockInterface{

    private _depth:number;
    private _height:number;
    private _width:number;
    private _status:Status;
    private _address:Address;
    private _numberOfItensInStock:number;
    private _totalCapacity:number;

    constructor(props:StockProps){
        super(props),
        this._depth = props.depth,
        this._height = props.height,
        this._width = props.width,
        this._status = props.status,
        this._address = props.address
        this._numberOfItensInStock = props.numberOfItensInStock,
        this._totalCapacity = props.totalCapacity || 0
    }
 
   

    calculateArea():number{
        return  this._height*this._width
    }
    calculateSize(): number{
        return this.calculateArea() * this._depth
    }

    validateStock(): void {
        if(typeof this._depth !=='number' || this._depth === null){
            throw new Error("Depth field cannot be null and must be an number")
        }
        if(typeof this._height !=='number' || this._depth === null){
            throw new Error("Height field cannot be null and must be an number")
        }
        if(typeof this._width !=='number' || this._width === null){
            throw new Error("Width field cannot be null and must be an number")
        }
        if(typeof this._numberOfItensInStock !=='number' || this._numberOfItensInStock == null){
            throw new Error("Itens in Stock field cannot be null and must be an number")
        }
        if(typeof this._totalCapacity !=='number' || this._numberOfItensInStock == null){
            throw new Error("Total Capacity field cannot be null and must be an number")
        }
        if (!(this._status instanceof Status || this._status === null)) {
            throw new Error("Status field must be an instance of Status and cannot be null");
        }
        if (!(this._address instanceof Address) || this._address === null) {
            throw new Error("Address field must be an instance of Address and cannot be null");
        }
        

    }

    get depth(): number {
        return this._depth;
    }
    get height(): number {
        return this._height;
    }
    get width(): number {
        return this._width;
    }
    get status(): Status {
        return this._status;
    }
    get address(): Address {
        return this._address;
    }
    get numberOfItensInStock(): number {
        return this._numberOfItensInStock;
    }
    get totalCapacity(): number {
        return this._totalCapacity;
    }
    
}