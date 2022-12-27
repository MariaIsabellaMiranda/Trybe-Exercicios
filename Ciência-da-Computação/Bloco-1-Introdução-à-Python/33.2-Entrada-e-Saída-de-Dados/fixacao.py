# NAME = input("Digite seu nome: ")

# for letter in NAME:
#     print(letter)


# NUMBERS = input("Digite apenas números naturais, entre espaços: ").split(" ")

# sumNumber = 0

# for number in NUMBERS:
#     if number.isdigit():  # Na próxima, lembrar de tratar o erro!
#         sumNumber += int(number)

# print(f"A soma dos valores válidos é: {sumNumber}")

# a, b = "acd"
# print(a)  # saída: c
# print(b)  # saída: d

# head, *tail = (1, 2, 3,)
# # Quando um * está presente no desempacotamento,
# # os valores são desempacotados em formato de lista.
# print(head)  # saída: 1
# print(tail)  # saída: [2, 3]

# arquivos = []
# for index in range(10240):
#     arquivos.append(open(f"arquivo{index}.txt", "w"))

import json  # json é um modulo que vem embutido, porém precisamos importá-lo


with open("pokemons.json") as file:
    content = file.read()  # leitura do arquivo
    pokemons = json.loads(content)["results"]
    # o conteúdo é transformado em estrutura python equivalente,
    # dicionário neste caso.
    # acessamos a chave results que é onde contém nossa lista de pokemons

print(pokemons[0])  # imprime o primeiro pokemon da lista
