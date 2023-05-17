def solution(survey, choices):
    status = {
        'R':0, 'T':0,
        'C':0, 'F':0,
        'J':0, 'M':0,
        'A':0, 'N':0
    }

    for x in range(len(survey)):
        agree, disAgree = survey[x][1:], survey[x][:1]
        score = choices[x] - 4

        if score > 0:
            status[agree] = status[agree] + score
        elif score < 0:
            status[disAgree] = status[disAgree] + (score * -1)

    result = ""

    result += 'T' if status['R'] < status['T'] else 'R'
    result += 'F' if status['C'] < status['F'] else 'C'
    result += 'M' if status['J'] < status['M'] else 'J'
    result += 'N' if status['A'] < status['N'] else 'A'

    print(status)
    print(result)

input_servey = ["TR", "RT", "TR"]
input_choices = [7, 1, 3]

solution(input_servey, input_choices)