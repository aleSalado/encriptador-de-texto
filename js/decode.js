import { validation } from "./validation.js";
const expression = {
    a: /ai/g,
    e: /enter/g,
    i: /imes/g,
    o: /ober/g,
    u: /ufat/g
};
export const decode = () => {
    const inputText = document.querySelector('#input-text').value;
    const outputText = document.querySelector('#output-text');
    if (validation(inputText) != 0) return outputText.innerHTML = validation(inputText);
    let decodeText = inputText;
    for (const key in expression) decodeText = decodeText.replace(expression[key], key);
    if(inputText==decodeText) return outputText.innerHTML = `nothing to decode...`;
    return outputText.innerHTML = decodeText;
}