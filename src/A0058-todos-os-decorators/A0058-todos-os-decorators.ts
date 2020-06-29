// Tipo do construtor da classe
type Constructor = new (...args: any[]) => any;

// Classes
function decoradorDeClasse(construtor: Constructor): any {
  // Chamado na criação da classe
  console.log('CLASSE');
  console.log(construtor);
  console.log('###');
}

// Método de instância (normal)
function decoradorDeMetodo(
  prototipoDaClasse: any,
  nomeDoMetodo: string,
  descritorDePropriedade: PropertyDescriptor,
): any {
  // Chamado na criação do método (não precisa chamar o método)
  console.log('MÉTODO NORMAL');
  console.log(prototipoDaClasse);
  console.log(nomeDoMetodo);
  console.log(descritorDePropriedade);
  console.log('###');
}

// Método estático
function decoradorDeMetodoEstatico(
  classConstructor: Constructor,
  nomeDoMetodo: string,
  descritorDePropriedade: PropertyDescriptor,
): any {
  // Chamado na criação do método (não precisa chamar o método)
  console.log('MÉTODO ESTÁTICO');
  console.log(classConstructor);
  console.log(nomeDoMetodo);
  console.log(descritorDePropriedade);
  console.log('###');
}

// Parâmetro de método
function decoradorDeParametroDeMetodo(
  prototipoDaClasse: any,
  nomeDoMetodo: string,
  indiceDaPropriedade: number,
): any {
  // Chamado na criação do método
  console.log('PARÂMETRO DE MÉTODO');
  console.log(prototipoDaClasse);
  console.log(nomeDoMetodo);
  console.log(indiceDaPropriedade);
  console.log('###');
}

// Parâmetro de método estático
function decoradorDeParametroDeMetodoEstatico(
  classConstructor: Constructor,
  nomeDoMetodo: string,
  indiceDaPropriedade: number,
): any {
  // Chamado na criação do parâmetro (não precisa chamar o método)
  console.log('PARÂMETRO DE MÉTODO ESTÁTICO');
  console.log(classConstructor);
  console.log(nomeDoMetodo);
  console.log(indiceDaPropriedade);
  console.log('###');
}

// Propriedade
function decoradorDePropriedade(
  prototipoDaClasse: any,
  nomePropriedade: string,
): any {
  // Chamado na criação da propriedade
  console.log('DECORADOR DE PROPRIEDADE');
  console.log(prototipoDaClasse);
  console.log(nomePropriedade);
  console.log('###');
}

// Propriedade estática
function decoradorDePropriedadeEstatica(
  classConstructor: Constructor,
  nomePropriedade: string,
): any {
  // Chamado na criação da propriedade estática
  console.log('DECORADOR DE PROPRIEDADE ESTÁTICA');
  console.log(classConstructor);
  console.log(nomePropriedade);
  console.log('###');
}

// Getter/Setter
function decoradorDeGetterESetterNormal(
  prototipoDaClasse: any,
  nomePropriedade: string,
  descritorDePropriedade: PropertyDescriptor,
): any {
  // Chamado na criação do método
  // (só pode ser aplicado no getter ou no setter - não em ambos)
  console.log('GETTER/SETTER normal');
  console.log(prototipoDaClasse);
  console.log(nomePropriedade);
  console.log(descritorDePropriedade);
  console.log('###');
}

// Getter/Setter estático
function decoradorDeGetterESetterEstatico(
  classConstructor: Constructor,
  nomePropriedade: string,
  descritorDePropriedade: PropertyDescriptor,
): any {
  // Chamado na criação do método
  // (só pode ser aplicado no getter ou no setter - não em ambos)
  console.log('GETTER/SETTER estático');
  console.log(classConstructor);
  console.log(nomePropriedade);
  console.log(descritorDePropriedade);
  console.log('###');
}

// A classe e o uso dos decorators

@decoradorDeClasse
export class UmaPessoa {
  @decoradorDePropriedade
  nome: string;
  sobrenome: string;
  idade: number;

  @decoradorDePropriedadeEstatica
  static propriedadeEstatica = '';

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  @decoradorDeMetodo
  metodo(@decoradorDeParametroDeMetodo msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  @decoradorDeMetodoEstatico
  static metodoEstatico(
    @decoradorDeParametroDeMetodoEstatico msg: string,
  ): string {
    return UmaPessoa.propriedadeEstatica + msg;
  }

  @decoradorDeGetterESetterNormal
  get nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }

  @decoradorDeGetterESetterEstatico
  static get staticPropertyGetterSetter(): string {
    return UmaPessoa.propriedadeEstatica;
  }

  static set staticPropertyGetterSetter(value: string) {
    UmaPessoa.propriedadeEstatica = value;
  }
}

// Uso da classe

const pessoa = new UmaPessoa('Luiz', 'Otávio', 30);
const metodo = pessoa.metodo('Olá mundo!');
console.log(metodo);
