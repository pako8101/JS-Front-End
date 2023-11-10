function solve(f, s) {
  let result = " ";
  let start = Math.min(f.charCodeAt(), s.charCodeAt());
  let end = Math.max(f.charCodeAt(), s.charCodeAt());

  for (let index = start + 1; index < end; index++) {
    const currChar = String.fromCharCode(index);

    result += ` ${currChar}`;
  }
  console.log(result.trimEnd());
}
solve("a", "k");
