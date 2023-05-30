# Ex 1: Faça um programa que solicite o nome de uma pessoa usuária e imprima-o na vertical.


def print_name():
    name = input("Digite seu nome: ")

    for letter in name:
        print(letter.upper())

# print_name('Harumi')


# Ex 2: Escreva um programa que receba vários números naturais e calcule a soma desses valores. Caso algum valor da entrada seja inválido (por exemplo uma letra), uma mensagem deve ser exibida na saída de erros no seguinte formato: “Erro ao somar valores, {valor} é um valor inválido”. Ao final, você deve imprimir a soma dos valores válidos.


def sum_number():
    getter = input("Insira números naturais, separados por espaço: ")
    numbers_list = getter.split()

    invalid_value = None

    for number in numbers_list:
        if not number.isdigit():
            invalid_value = number
            break

    if invalid_value is not None:
        print(f'Erro ao somar valores, {invalid_value} é um valor inválido')
    else:
        numbers = [int(element) for element in numbers_list]
        result = sum(numbers)
        print(f'A soma dos elementos é {result}')


sum_number()
