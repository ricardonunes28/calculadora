import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  /* DEFININDO AS CONSTANTES UTILIZADAS PARA INDENTIFICAR AS OPERAÇÕES DE CALCULO. */
    static readonly SOMA: string = '+';
    static readonly SUBTRACAO: string = '-';
    static readonly DIVISAO: string = '/';
    static readonly MULTIPLICACAO: string = '*';
    static readonly RAIZQUADRADA:string ='√';
    static readonly QUADRADO:string ='^2';
    static readonly CUBO:string ='³';
    static readonly PI:string ='π';
  
    constructor() { }
  /**
   * Metodo que calcula uma operação matematica dado 
   * dois numeros e uam operação.
   * Suporta as operações de soma,subtração, divisão e multiplicação
   * @param num1 number
   * @param num2 number
   * @param operacao string operação a ser executada
   * @returns number Resultado da minhas operações
   */

    elavadoQuadrado(num1: number): string{
      let resultado: number;
      resultado = num1*num1;
      return resultado.toString();
    }

    cubo(num1: number): string{
      let resultado: number;
      resultado = num1*3;
      return resultado.toString();
    }
    

    calcular(num1: number, num2: number, operacao:String): number {
      let resultado: number
      
      switch(operacao){
        case CalculadoraService.SOMA:
          resultado = num1 + num2;
        break;
        case CalculadoraService.SUBTRACAO:
          resultado = num1 - num2;
        break;
        case CalculadoraService.DIVISAO:
          resultado = num1 / num2;
        break;
        case CalculadoraService.MULTIPLICACAO:
          resultado = num1 * num2;
        break;
        case CalculadoraService.RAIZQUADRADA:
          resultado = Math.sqrt(num2);
        break;
        default:
          resultado =0;
        break;
      }
      return resultado;
    }
    
  }
  
