class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
  }

  // --- Métodos de Cálculo ---

  calculaCategoria() {
    if (this.idade >= 9 && this.idade <= 11) {
      return "Infantil";
    } else if (this.idade >= 12 && this.idade <= 13) {
      return "Juvenil";
    } else if (this.idade >= 14 && this.idade <= 15) {
      return "Intermediário";
    } else if (this.idade >= 16 && this.idade <= 30) {
      return "Adulto";
    } else {
      return "Sem categoria";
    }
  }

  calculaIMC() {
    // Fórmula: peso / (altura * altura)
    return this.peso / (this.altura * this.altura);
  }

  calculaMediaValida() {
    // 1. Cria uma cópia para não alterar o array original e ordena numericamente
    // O sort((a, b) => a - b) é essencial para ordenar números corretamente em JS
    let notasOrdenadas = [...this.notas].sort((a, b) => a - b);

    // 2. Elimina a menor (primeira) e a maior (última) nota
    // O método slice(1, 4) pega do índice 1 até o 3 (o 4 é exclusivo), sobrando as 3 notas do meio
    let notasComputadas = notasOrdenadas.slice(1, notasOrdenadas.length - 1);

    // 3. Soma as notas restantes
    let soma = notasComputadas.reduce(
      (acumulador, notaAtual) => acumulador + notaAtual,
      0
    );

    // 4. Calcula a média
    return soma / notasComputadas.length;
  }

  // --- Métodos de Obtenção (Getters) ---

  obtemNomeAtleta() {
    return this.nome;
  }

  obtemIdadeAtleta() {
    return this.idade;
  }

  obtemPesoAtleta() {
    return this.peso;
  }

  obtemNotasAtleta() {
    return this.notas;
  }

  obtemCategoria() {
    return this.calculaCategoria();
  }

  obtemIMC() {
    return this.calculaIMC();
  }

  obtemMediaValida() {
    return this.calculaMediaValida();
  }
}

// --- Exemplo de Uso (Entrada fornecida no enunciado) ---

const atleta = new Atleta(
  "Cesar Abascal",
  30,
  80,
  1.7,
  [10, 9.34, 8.42, 10, 7.88]
);

// --- Exibição dos Dados (Saída) ---

console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
console.log(`Peso: ${atleta.obtemPesoAtleta()}`);
console.log(`Altura: ${atleta.altura}`); // Acesso direto ou poderia criar um getter obtemAlturaAtleta se necessário
console.log(`Notas: ${atleta.obtemNotasAtleta().join(",")}`); // .join para formatar com vírgulas
console.log(`Categoria: ${atleta.obtemCategoria()}`);
console.log(`IMC: ${atleta.obtemIMC()}`);
console.log(`Média válida: ${atleta.obtemMediaValida()}`);
