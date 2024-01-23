/*2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;

 IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularImc() {
        return this.peso / (this.altura * this.altura);

    }

    classificarImc() {
        let imc = this.calcularImc();
        if (imc < 18.5) {
            return ('abaixo do peso');
        }
        else if (imc >= 18.5 && imc < 25) {
            return ('Peso normal');
        }
        else if (imc >= 25 && imc < 30) {
            return ('Acima do peso');
        }
        else if (imc >= 30 && imc < 40) {
            return ('Obeso');  
        }
        else {
            return ('Obesidade Grave');
        }




    }



}

let felipe = new Pessoa('felipe', 62, 1.73);


let jessica = new Pessoa('jessica', 59, 1.69);
console.log(jessica.calcularImc());

console.log (felipe.calcularImc());

console.log (felipe.classificarImc());
