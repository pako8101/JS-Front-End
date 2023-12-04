function extract(content) {
const text = document.getElementById(content).textContent;

const pattern = /\((.+?)\)/g;

 const result =text.match(pattern);
 console.log(result.join("; "));

return result.join('; ')
}