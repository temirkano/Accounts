export function sumTwoNums (a, b) {
    return a + b
};

export function cal (input1, select, input2, h3) {
    let res = (input1.value * select.value) / input2.value
    h3.textContent = res
}