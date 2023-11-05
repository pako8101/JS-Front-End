class MovieLibrary {
    constructor(){
        this.movies = [];
    }
    addMovie (command){
        const [_, name] = command.split('addMovie ');
                movies.push({ name });
    }
    addDirector(command){
        const [movieName,directorName] = command.split(' directedBy ')
        const movie =  movies.find((m)=> m.name===movieName)
        if (movie) {
           movie.director = directorName;
        }
    }
    addDate(command){
        const [movieName,date] = command.split(' onDate ')
                const movie =  movies.find((m)=> m.name===movieName)
                if (movie) {
                   movie.date = date;
                }
             
    }  
    
    };
    





/*function solve(input) {
let movies =[];
const movieLibrary = {
addMovie: (command) => {
    const [_, name] = command.split('addMovie ');
            movies.push({ name });
},
addDirector: (command) => {
    const [movieName,directorName] = command.split(' directedBy ')
    const movie =  movies.find((m)=> m.name===movieName)
    if (movie) {
       movie.director = directorName;
    }
},
addDate: (command) => {
    const [movieName,date] = command.split(' onDate ')
            const movie =  movies.find((m)=> m.name===movieName)
            if (movie) {
               movie.date = date;
            }
},
};*/
function solve(input) {
    const movieLibrary = new MovieLibrary();
input.forEach(command => {
    if (command.includes("addMovie")) {
       movieLibrary.addMovie(command);
    }else if (command.includes("directedBy")) {
      movieLibrary.addDirector(command);
    } else if (command.includes("onDate")){
        movieLibrary.addDate(command);
    }
});

  /*  input.forEach(command => {
    const message = 
  command.includes("addMovie")
   ? console.log(command.substring(9))
    : command.includes("directedBy")
    ? 'excessive speeding'
    : command.includes("onDate")
    ?  '';
});*/
/*    input.forEach(command => {
        if (command.includes("addMovie")) {
            const [_, name] = command.split('addMovie ');
            movies.push({ name });
        }else if (command.includes("directedBy")) {
            const [movieName,directorName] = command.split(' directedBy ')
         const movie =  movies.find((m)=> m.name===movieName)
         if (movie) {
            movie.director = directorName;
         }
        } else if (command.includes("onDate")){
            const [movieName,date] = command.split(' onDate ')
            const movie =  movies.find((m)=> m.name===movieName)
            if (movie) {
               movie.date = date;
            }
        }
    });*/
        movieLibrary.movies
    .filter(m => m.name && m.director && m.date)
    .forEach(m =>console.log(JSON.stringify(m))); 
    
   // console.log(JSON.stringify(movies));
}


solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    );












