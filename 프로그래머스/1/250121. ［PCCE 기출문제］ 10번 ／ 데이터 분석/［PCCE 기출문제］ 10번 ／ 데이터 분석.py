def solution(data, ext, val_ext, sort_by):
    position = ['code', 'date', 'maximum', 'remain']
    filter_index = position.index(ext)
    sort_index = position.index(sort_by)
    return sorted([d for d in data if d[filter_index] < val_ext], key = lambda x:x[sort_index])