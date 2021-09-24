import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  private numero1!: string;
  private numero2!: string;
  private resultado!: string;
  private operacao!: string;

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit() {
    this.limpar();
  }
  /**
   * Inicializando todos os operadores para valores padrão.
   * 
   * @return void - retorna algo vazio/neutro
   */
  limpar(): void {
    this.numero1 = '0';
    this.numero2 = 'null';
    this.resultado = 'null';
    this.operacao = 'null';
  }
  /**
   * Esse metodo retorna o valor concatenado e trata o seprador decimal.
   * 
   * @param numAtual string
   * @param numConcat string
   * @return string
   */
  concatenaNumero(numAtual: string, numConcat: string): string {
    // Caso contenha apenas '0' ou 'null' , vai reiniciar o valor 
    if (numAtual === '0' || numAtual == 'null') {
      numAtual = '';
    }

    //Primeiro digito e '.', concatena '0' antes do ponto
    if (numConcat === '.' && numAtual === '0') {
      return '0.';
    }

    //caso '.' digitando e já contenha um '.', apenas retorna 
    if (numConcat ==='.' && numAtual.indexOf('.') > - 1){
      return numAtual;
    }

    return numAtual + numConcat;
  }
  /**
   * Metodo adiocna o numero selecionado para o calculo posteriormente 
   * 
   * @param numero string
   * @return Void - tipo vazio , retorna nada!
   * 
   */
  adicionaNumeros(numero:string):void{
    if (this.operacao == 'null'){
      this.numero1 = this.concatenaNumero(this.numero1,numero)
    }else {
      this.numero2 = this.concatenaNumero(this.numero2, numero)
    }

  }

  //apenas define a operação  caso não exista uma
  definirOperacao(operacao:string):void{
    if(this.operacao == 'null'){
      this.operacao = operacao;
      return;
    }

    if(this.numero2 !== 'null'){
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao
      ).toString();
      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = 'null';
      this.resultado = 'null';
    }

  }
  //operação da calculadora cientifica - Elevado ao quadrado
  elavadoQuadrado():void{
    this.resultado = this.calculadoraService.elavadoQuadrado(
      parseFloat(this.numero1)
    );
    this.numero1 = this.resultado
  }

  //operação da calculadora cientifica - Cubo
  cubo():void{
    this.resultado = this.calculadoraService.cubo(
      parseFloat(this.numero1)
    );
    this.numero1 = this.resultado
  }

  //operação para apagar numeros
  delete() {
    if (this.numero2 === 'null') {
      this.numero1 = this.numero1.toString().slice(0, -1);
    } else {
      this.numero2 = this.numero2.toString().slice(0, -1);
    }
  }
  //operação PI 
  inserirPi(): void{
    const PI = (Math.PI).toString();
    if(this.operacao == 'null'){
      this.numero1 = '';
    } else {
      this.numero2 = '';
    }
    
    this.adicionaNumeros(PI)
  }

  /**
   * efetua o calculo de uma operação.
   * @returns void
   */


  calcular():void{
    if(this.numero2 == 'null'){
      return;
    }

    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao
    ).toString();
    this.numero1= this.resultado;
    this.numero2= 'null';
    this.operacao = 'null';
  }

  get display(): string{
    if (this.resultado  != 'null'){
      return this.resultado.toString();
    }
    if (this.numero2 != 'null'){
      return this.numero2.toString();
    }

    return this.numero1.toString();
  }
}
