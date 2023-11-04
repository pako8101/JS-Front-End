function solve(word) {
    
    let regex = /#[A-Za-z]+/gm;

    let matches = word.match(regex);

    for (let words of matches) {
    //words = words.replace('#','');
        console.log(words.substring(1,words.length));
    }

}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia')













