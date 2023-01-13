def findTheGreatest(number1, number2):
    if number1 > number2:
        return number1
    return number2


print(findTheGreatest(10, 25))


def calculateMedia(list):
    total = 0
    for number in list:
        total += number
    return total / len(list)


print(calculateMedia([5, 5, 2, 3]))


def createSquare(n):
    for number in range(n):
        print(n * "*")


createSquare(5)


def biggestName(names):
    biggest_name = names[0]
    for name in names:
        if len(name) > len(biggest_name):
            biggest_name = name
        return biggest_name


biggestName(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])
