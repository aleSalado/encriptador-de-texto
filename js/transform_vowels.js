let transform = [
    ['a', 'ai'],
    ['e', 'enter'],
    ['i', 'imes'],
    ['o', 'ober'],
    ['u', 'ufat']
];
export const transformVowels = ([vowal, index]) => [].concat(...(transform.filter(item => vowal === item[0]).map(noVowals => [noVowals[1], index])));