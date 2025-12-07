# 🤸‍♂️ Projeto: Matriz de Avaliação de Atletas

> Uma aplicação em **JavaScript** orientada a objetos para gerenciar dados de atletas, calcular estatísticas corporais e processar pontuações de competições.

---

## 📋 Sobre o Projeto

Este projeto consiste na criação de uma classe `Atleta` capaz de receber atributos físicos e notas de desempenho. O sistema processa essas informações para entregar métricas essenciais para organizadores de competições esportivas.

### ✨ Funcionalidades

* **🧮 Cálculo de IMC:** Retorna o Índice de Massa Corporal baseado no peso e altura.
* **🏆 Média Válida:** Implementa a lógica de competição que **elimina a maior e a menor nota** da lista, calculando a média apenas das notas intermediárias.
* **🏷️ Categorização Automática:** Classifica o atleta automaticamente com base em sua idade.

---

## 📏 Regras de Negócio

### Categorias por Idade
| Faixa Etária | Categoria |
| :--- | :--- |
| **9 a 11 anos** | Infantil |
| **12 e 13 anos** | Juvenil |
| **14 e 15 anos** | Intermediário |
| **16 a 30 anos** | Adulto |
| *Outras* | Sem categoria |

### Cálculo de Notas
O cálculo da média segue a metodologia de certificação:
1. Ordena as notas recebidas.
2. Remove a **maior** nota.
3. Remove a **menor** nota.
4. Calcula a média aritmética das notas restantes.

---

## 🚀 Como Executar

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.

1. Clone este repositório ou baixe o arquivo `atleta.js`.
2. No terminal, execute:

```bash
node atleta.js
