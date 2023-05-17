import re

def removeFullStop(id : str):
    if id.count("..") < 1:
        return id.strip('.')
    
    id = id.replace('..', '.')
    return removeFullStop(id)

def solution(new_id : str):
    ## 1단계 : 소문자로 치환
    recommend_id = new_id.lower()

    ## 2단계 : 사용불가 문자 제거
    recommend_id = re.sub(r'[^a-z0-9-_.]', '', recommend_id)

    ## 3단계&4단계 : 연속된 . 제거 + 맨 앞 뒤 . 제거
    recommend_id = removeFullStop(recommend_id)

    ## 3단계
    while '..' in recommend_id:
        recommend_id = recommend_id.replace('..', '.')

    ## 4단계
    recommend_id.strip('.')

    ## 5단계 : 빈 문자열이라면 a로 변경
    if not recommend_id:
        recommend_id = "a"

    ## 6단계 : 길이 체크
    if len(recommend_id) > 15:
        recommend_id = recommend_id[:15].strip('.')
    
    ## 7단계 : 길이 체크
    if len(recommend_id) < 2:
        recommend_id += recommend_id[-1:] + recommend_id[-1:]
    elif len(recommend_id) < 3:
        recommend_id += recommend_id[-1:]

    print(f'result : {recommend_id}')
    return recommend_id


input_id = "abcdefghijklmn.p"
solution(input_id)