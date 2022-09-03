import {validation} from './validation.js';
import {transformVowels} from './transform_vowels.js';
export const encrypt = () => {
    const inputText = document.querySelector('#input-text').value
    const outputText = document.querySelector('#output-text')
    outputText.innerHTML=''
    if(outputText.classList.contains('warning')) outputText.classList.remove('warning')
    if (validation(inputText) != 0) return outputText.innerHTML = validation(inputText)
    const vowelsIndex = [...inputText].map((letter, index) => [letter, index]).filter(element => /[aeiou]/.test(element[0]));                                       
    const noVowelsIndex = vowelsIndex.map(element => transformVowels(element));
    const mixed = [...noVowelsIndex, ...[...inputText].map((elem, i) => [elem, i])];
    const newLetterIndex = mixed.filter((item, index) => mixed.map((elem) => elem[1]).indexOf(item[1]) === index);
    const newString = newLetterIndex.sort((acu, cur) => acu[1] - cur[1]).map(elem => elem[0]).join(''); 
    return outputText.innerHTML=newString
}