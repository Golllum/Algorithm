def solution(today, terms, privacies):
    dict_terms = {k:v for k, v in zip([x.split(" ")[0] for x in terms], [int(x.split(" ")[1]) for x in terms])}
    print(dict_terms)
    today = int(today.replace('.', ''))
    result = []

    for x in range(len(privacies)):
        privacyInfo = privacies[x]
        agreeDate = privacyInfo.split(" ")[0].split(".")
        dueDate = ""

        year = dict_terms[privacyInfo.split(" ")[1]] // 12
        month = dict_terms[privacyInfo.split(" ")[1]] % 12
        
        if int(agreeDate[1]) + month > 12:
            dueDate = str(int(agreeDate[0]) + year + 1) + str(int(agreeDate[1]) + month - 12).rjust(2, '0') + agreeDate[2]
        else:
            dueDate = str(int(agreeDate[0]) + year) + str(int(agreeDate[1]) + month).rjust(2, '0') + agreeDate[2]
            
        if int(dueDate) <= today:
            result.append(x + 1)
  
    print(result)

input_today     = "2020.01.01"
input_terms     = ["Z 3", "D 5"]
input_privacies = ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z", "2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]

solution(input_today, input_terms, input_privacies)