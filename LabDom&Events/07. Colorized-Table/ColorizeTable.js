function colorize() {
 const rows = Array.from(document.querySelectorAll("td:nth-child(2)"));

rows.forEach((row) => {
    row.style.background = 'teal';
});

}