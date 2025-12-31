var decodeString = function (s) {
    // 많이 어려웠음
    const stack = []
    for (let i = 0; i < s.length; i++) {
        const cur = s[i]

        console.log(stack)
        if (cur !== '[' && cur !== ']') {
            // 문자인 경우
            if (isNaN(cur)) {
                stack.push(cur)
                continue
            }

            // 숫자면 -> 그 앞도 숫자인지 확인
            const last = stack[stack.length - 1]
            if (isNaN(s[i - 1])) {
                stack.push(cur)
            } else {
                stack[stack.length - 1] = last + cur
            }
            continue
        }

        if (cur === ']') {
            let temp = ""
            while (stack.length > 0) {
                const next = stack.pop()
                if (!isNaN(next)) {
                    temp = temp.repeat(next)
                    break
                } else {
                    temp = next + temp
                }
            }
            stack.push(temp)
        }
    }
    return stack.join("")
};