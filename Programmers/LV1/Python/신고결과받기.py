def solution(id_list, report, k):
    dict_report, dict_mail = {}, {key:0 for key in id_list}
   # dict_mail = {key:0 for key in id_list}

    for rep in list(dict.fromkeys(report)):
        key = rep.split(" ")[1]
        value = rep.split(" ")[0]

        if key in dict_report.keys():
            dict_report[key].append(value)
        else:
            dict_report[key] = [value]

    for x in dict_report.keys():
        if len(dict_report[x]) >= k:
            for user in dict_report[x]:
                dict_mail[user] += 1

    return list(dict_mail.values())


input_list_id = ["muzi", "frodo", "apeach", "neo"]
input_list_report = ["muzi frodo","muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]
num = 2

print(f'result : {solution(input_list_id, input_list_report, num)}')