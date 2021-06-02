# Write a function called repeatStr which repeats the given string string exactly n times.

def repeat_str(repeat, string):
    return repeat * string


# create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

def filter_list(gived_list):
    return_list = []
    for i in gived_list:
        if isinstance(i, int):
            return_list.append(i)
    return return_list




