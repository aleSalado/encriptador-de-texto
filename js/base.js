import { encrypt } from "./encrypt.js";
import { decode } from "./decode.js";
import { copy } from "./copy.js";
const encryptButton = document.querySelector('#encrypt');
encryptButton.addEventListener('click', encrypt);
const decodeButton = document.querySelector('#decode');
decodeButton.addEventListener('click', decode);
const copyButton = document.querySelector("#copy");
copyButton.addEventListener('click', copy);