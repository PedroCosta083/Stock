export default interface BaseUseCaseInterface{
    execute(input:any): Promise<any>;
}