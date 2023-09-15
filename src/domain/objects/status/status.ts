// Price.ts

export default class Status {
    private readonly value : string;
    constructor(value: string) {
      
      if (typeof value !=='string' || value.length <= 0 || value === '') {
        throw new Error('A informação não pode ser nula ou vazia e deve ser do tipo string');
      }
      this.value = value;
    }
  
    getValue(): string {
      return this.value;
    }

  }
  

  