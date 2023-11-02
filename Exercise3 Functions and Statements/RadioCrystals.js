function washChunk(chunk) {
    console.log('Transporting and washing');
return Math.floor(chunk);
}


function solve(input) {
const[target,...chunks] = input;
const canCut = (chunk) => chunk /4 >=target;

for (let chunk of chunks) {

    while (chunk > target) {
        
        if (canCut(chunk)) {
            //cut
            let counter =0;
            while (canCut(chunk)) {
                chunk= chunk/4;
                counter++;
            }
            
            console.log(`Cut x${counter}`);
            chunk= washChunk(chunk);
            
        }
        //lap
        if (chunk-chunk * 0.2 >= target) {
            let counter =0;
            while (chunk-chunk*0.2 >= target) {
                chunk-= chunk*0.2;
                counter++;
            }
           
            console.log(`Lap x${counter}`);
            chunk= washChunk(chunk);
            
        
        }
        //grind
        if (chunk - 20 >= target) {
            let counter =0;
            while (chunk-20 >= target) {
                chunk -= 20;
                counter++;
            }
           
            console.log(`Grind x${counter}`);
            chunk= washChunk(chunk);
           
        }
            //etch
        if (chunk - 2 >= target) {
            let counter =0;
            while (chunk-2 >= target) {
                chunk -= 2;
                counter++;
            }
            
            console.log(`Etch x${counter}`);
            chunk=  washChunk(chunk);
           
        }
        }
        if (chunk - 1 === target) {
    chunk--;
    console.log("X-ray x1");
    }
    console.log(`Finished crystal ${target} microns`);

    return chunk;
}

}



solve([1375, 50000]);  

















