// Price.ts

export class Price {
    private readonly value : number;
    constructor(value: number) {
      
      if (typeof value !=='number' || value <= 0) {
        throw new Error('O valor do preço deve ser maior que zero.');
      }
      this.value = value;
    }
  
    getValue(): number {
      return this.value;
    }

  }
  

  