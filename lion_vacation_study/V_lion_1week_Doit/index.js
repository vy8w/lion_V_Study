function solution(n) {
    const countOne = countBinaryOne(n);
    
    while (true) {
        n++;
        if (countBinaryOne(n) === countOne) {
            return n;
        }
    }
}

function countBinaryOne(number) {
    let count = 0;
    let binary = number.toString(2);
    
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '1') {
            count++;
        }
    }
    
    return count;
}


let result = solution(78);
console.log(result);  // 출력: 83


let result = solution(15);
console.log(result);  // 출력: 23

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

//solution 함수를 사용하여 주어진 문자열에 대한 결과를 확인할 수 있습니다. 예를 들어, "abcdevwxyz"에 대한 변환 결과를 확인하려면 다음과 같이 호출합니다.
function solution(myString) {
    let result = '';

    for (let i = 0; i < myString.length; i++) {
        if (myString[i] < 'l') {
            result += 'l';
        } else {
            result += myString[i];
        }
    }

    return result;
}

let result = solution("abcdevwxyz");
console.log(result);  // 출력: "lllllvwxyz"
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
function solution(myString) {
    var answer = '';
    
    for (let i = 0; i < myString.length; i++) {
        if (myString[i] < 'l') {
            answer += 'l';
        } else {
            answer += myString[i];
        }
    }
    
    return answer;
}
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
//평균구하기
//주어진 배열 arr의 평균값을 구하는 solution 함수를 작성할 수 있습니다. 배열의 모든 원소를 합산한 후 원소의 개수로 나누어 평균값을 계산합니다. 다음은 JavaScript로 작성된 코드 예시입니다.
//solution 함수를 사용하여 주어진 배열의 평균값을 구할 수 있습니다. 예를 들어, [1, 2, 3, 4] 배열의 평균값을 구하려면 다음과 같이 호출합니다.
function solution(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}


ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
function solution(myString) {
    let result = '';
    
    for (let i = 0; i < myString.length; i++) {
        if (myString[i] < 'l') {
            result += 'l';
        } else {
            result += myString[i];
        }
    }
    
    return result;
}


const solution = myString => myString.replace(/[a-k]/g,'l')