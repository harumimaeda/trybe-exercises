# Ex 1: Faça um programa que solicite o nome de uma pessoa usuária e imprima-o na vertical. 
def print_name(name):
    name = input("Digite seu nome: ")

    for letter in name:
        print(letter.upper())

# print_name('Harumi')

# Ex 2: Escreva um programa que receba vários números naturais e calcule a soma desses valores. Caso algum valor da entrada seja inválido (por exemplo uma letra), uma mensagem deve ser exibida na saída de erros no seguinte formato: “Erro ao somar valores, {valor} é um valor inválido”. Ao final, você deve imprimir a soma dos valores válidos.

