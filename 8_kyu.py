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
