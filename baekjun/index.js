const fs = require("fs");
const { EOL } = require('os');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const qs = "어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.\n"
const reply = [`"재귀함수가 뭔가요?"`, `"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.`,`마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.`,`그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."`]
const lastReply = [`"재귀함수가 뭔가요?"`, `"재귀함수는 자기 자신을 호출하는 함수라네"`]
const macro = "라고 답변하였지."

function solution(input) {
    const n = Number(input[0])

    if(n > 0 && n <51){
        let answer = ''
        let final = repeatQs(n, n, answer)
        console.log(qs +final);
    }
}

function repeatQs(num, init, answer){
    if(num > 0){
        reply.map((r,idx) => { 
            for(let i = 0; i < (init - num) * 4; i++){
                answer += '-'
            }

            answer += `${r}\n`
        })
    }else if(num === 0){
        for(let i = 0; i < 2;i++){
            for(let j = 0; j < init * 4; j++){
                answer += '-'
            }

            answer += `${lastReply[i]}\n`
        }

        for(let i = init +1; i > 0; i--){
            for(let j = 0; j < (i -1) * 4; j++){
                answer += '-'
            }

            answer += i === 1 ? `${macro}` : `${macro}\n`
        }
    }else{
        return answer
    }

    return repeatQs(num -1,init, answer)
}

solution(fs.readFileSync(filePath).toString().split(EOL));