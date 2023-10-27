
function solve(text) {
    const result = text.split(" /[\W]+/")
    .filter((w) => w.length >1)
    .map((w)=> w.toUpperCase())
    .join(", ");
    console.log(result)
}



solve('Hi, how are you?');






