function occur(input) {
    input =  input.toLowerCase();
   const dict = input.split(' ');
    let map = new Map();

    dict.forEach(element => {
        if (map.has(element)) {
            let oldV = map.get(element);
            let newV = oldV + 1;

            map.set(element,newV);
        }else{
           map.set(element,1); 
        }
        
    });
    let result = [];
    map.forEach((value,key) => {
       if(value % 2 !== 0)  {
        result.push(key)
       } 
    })

   console.log(result.join(' '));

}





occur('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')












