class Song {
    constructor(type,name,length){
        this.type = type;
        this.name = name;
        this.length = length;
    }
}
function solve(input) {
    const typeToDisplay = input.pop();
    const [_, ...songs] = input;


       const result =  songs
        .map((songsAsText) => {
const [type,name,length] = songsAsText.split('_')
const song = new Song(type,name,length);

return song;
    })
    .filter((song) => {
    if (typeToDisplay === 'all') {
        return song;
    }
    return song.type === typeToDisplay;
    })
    .map((song) => song.name)
    .join('\n');

    console.log(result);
}

solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);














