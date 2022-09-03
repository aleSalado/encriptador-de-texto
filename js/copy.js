export const copy = () => {
    const outputText = document.getElementById("output-text");
    outputText.select();
    navigator.clipboard.writeText(outputText.innerHTML);
}