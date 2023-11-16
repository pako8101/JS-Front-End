/*const obj = {
    age:22,
    town:"S"
};
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
       const value = obj[key];
           // console.log(`${key} -> ${obj[key]}`);
            delete obj ['age'];
            console.log(obj);
    }

}

function get(arr) {
    const meet = {};
    for (const elem of arr) {
        const [day,name] = elem.split(' ');
        meet[day] = name;
    }
    Object.entries(meet).forEach((day) => {
        console.log(`${day} - ${meet[day]}`);
    })
}


get(['m 2', 'a d']) */

/*const person = {
    name: 'Alex',
    age: 29,
};*/

/*function createPerson(firstName, lastName, age) {
 return {
    firstName,
    lastName,
    age,
    /*printname () {
      console.log(this.firstName + " " + this.lastName);
    },
    sayHello: () => {
        console.log('Hello!');
    }
  };

}
const person = createPerson("Pako", "Kamika", 43);
//person.printname();
//person.sayHello();

   console.log(JSON.stringify(Object.entries(person)));*/

function printCityInfo(city) {
  Object.keys(city).forEach((key) => {
    console.log(key + " -> " + city[key]);
  });
  /*for (const key in city) {
    console.log(key + " -> "+city[key]);
    }*/
}

const city = {
  name: "Sofia",
  area: 492,
  population: 123456,
  postCode: 1000,
  country: "Bulgaria",
};
printCityInfo(city);
