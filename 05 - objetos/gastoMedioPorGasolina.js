/* 1 - Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/
class Carro {
marca;
cor;
gastosMedioPorKm;

    constructor(marca, cor, gastosMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastosMedioPorKm = gastosMedioPorKm;

    }

    calcularGastosDePercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastosMedioPorKm * precoCombustivel
    }
}
const uno = new Carro( 'Fiat', 'Prata', 1/12 );
console.log(uno.calcularGastosDePercurso(13,5));
