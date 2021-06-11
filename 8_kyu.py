# Write a function called repeatStr which repeats the given string string exactly n times.

def repeat_str(repeat, string):
    return repeat * string


# create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

def filter_list(names):
    return_list = []
    for i in names:
        if isinstance(i, int):
            return_list.append(i)
    return return_list


# the same as up with list comprehension

def filter_list_2(l):
    return [i for i in l if not isinstance(i, str)]


def likes(names):
    if len(names) == 0:
        return "no one likes this"
    elif len(names) == 1:
        return f"{names[0]} likes this"
    elif len(names) == 2:
        return f"{names[0]} and {names[1]} like this"
    elif len(names) == 3:
        return f"{names[0]}, {names[1]} and {names[2]} like this"
    else:
        return f"{names[0]}, {names[1]} and {len(names) - 2} others like this"


# print(likes(["Alex", "Jacob", "Mark", "Max"]))

# def likes(names):
#     n = len(names)
#     return {
#         0: 'no one likes this',
#         1: '{} likes this',
#         2: '{} and {} like this',
#         3: '{}, {} and {} like this',
#         4: '{}, {} and {others} others like this'
#     }[min(4, n)].format(*names[:3], others=n-2)

def greet(name):
    return f"Hello, {name} how are you doing today?"


def disemvowel(input_string):
    output_string = ""
    vowels = "aeiouAEIOU"
    for sign in input_string:
        if sign not in vowels:
            output_string += sign

    return output_string


# print(disemvowel("This website is for losers LOL!"))

# the same but with translate
def disemvowel_2(s):
    return s.translate(None, "aeiouAEIOU")


def kaprekar_split(n):
    if n == 1:
        return 0
    n_square = n * n
    str_n_square = str(n_square)
    for i in range(1, len(str_n_square)):
        left_digit = int(str_n_square[:i])
        right_digit = int(str_n_square[i:])
        digit_sum = left_digit + right_digit
        if n == digit_sum:
            return i
    return -1


print(kaprekar_split(45))
