function dailyTemperatures(temperatures: number[]): number[] {
    const stack: number[] = [];
    const answer: number[] = new Array(temperatures.length).fill(0);
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            const index = stack.pop()!;
            answer[index] = i - index;
        }
        stack.push(i);
    }
    return answer;
}

dailyTemperatures([73,74,75,71,69,72,76,73])