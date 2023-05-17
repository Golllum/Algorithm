def choose_finger(hands, target, hand):
    keypad = {
        '1': [0, 0], '2': [0, 1], '3': [0, 2],
        '4': [1, 0], '5': [1, 1], '6': [1, 2],
        '7': [2, 0], '8': [2, 1], '9': [2, 2],
        '*': [3, 0], '0': [3, 1], '#': [3, 2]
    }

    left_hand   = str(hands[0])
    right_hand  = str(hands[1])
    main_hand   = hand[:1].upper()

    distance_L = abs(keypad[left_hand][0] - keypad[target][0]) + abs(keypad[left_hand][1] - keypad[target][1])
    distance_R = abs(keypad[right_hand][0] - keypad[target][0]) + abs(keypad[right_hand][1] - keypad[target][1])

    if distance_L < distance_R:
        hands[0] = target
        return "L"
    elif distance_L > distance_R:
        hands[1] = target
        return "R"
    else:
        if main_hand == "L":
            hands[0] = target
        else:
            hands[1] = target

        return main_hand

def solution(numbers, hand):
    hands = ["*", "#"] # list for CBR => L, R
    answer = ""

    for x in numbers:
        if x in [1, 4, 7]:
            answer += "L"
            hands[0] = x 
        elif x in [3, 6, 9]:
            answer += "R"
            hands[1] = x 
        else:
            answer += choose_finger(hands, str(x), hand)

    return answer

input_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
input_hand = "right"

print(solution(input_numbers, input_hand))