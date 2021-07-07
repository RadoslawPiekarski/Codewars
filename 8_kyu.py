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


# print(kaprekar_split(45))

class Song:
    def __init__(self, title, artist):
        self.title = title
        self.artist = artist
        self.listened_by = set()  # set will delete duplicates

    def how_many(self, listened_today):
        listened_today = set([x.lower() for x in listened_today])  # lowercase elements
        new_listeners = len([i for i in listened_today if i not in self.listened_by])
        self.listened_by.update(listened_today)
        return new_listeners


# mount_moose = Song('Mount Moose', 'The Snazzy Moose')
# print(mount_moose.how_many(['John', 'Fred', 'BOb', 'carl', 'RyAn']))
# print(mount_moose.how_many(['JoHn', 'Luke', 'AmAndA']))


def last_survivor(letters, coords):
    for i in coords:
        letters = letters[:i] + letters[i + 1:]
    return letters


# last_survivor('abc', [1, 1])

def quarter_of(month):
    return (month + 2) // 3


# quarter_of(3)

def reverse_words(input_sentence):
    output_sentence = input_sentence.split()
    output_sentence.reverse()
    return " ".join(output_sentence)


# reverse_words("Please split this string")
# Clever version:
# def reverseWords(str):
#     return " ".join(str.split(" ")[::-1])

def make_negative(number):
    if number > 0:
        return -number
    else:
        return number


# print(make_negative(5))


def over_the_road(address, n):
    return n * 2 + 1 - address


def close_compare(a, b, margin=0):
    if abs(a - b) <= margin:
        return 0
    if a > b:
        return 1
    return -1


def count_letters(input_string):
    counter = {}
    for letter in input_string:
        if letter not in counter:
            counter[letter] = 0
        counter[letter] += 1

    print(counter)


count_letters('Ala ma kota')

# from collections import Counter
#
# # Use a string as an argument
# Counter("mississippi")
# >> Counter({'i': 4, 's': 4, 'p': 2, 'm': 1})
