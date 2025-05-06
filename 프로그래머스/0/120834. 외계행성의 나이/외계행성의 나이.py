def solution(age):
    return ''.join(chr(int(c) + 97) for c in str(age))