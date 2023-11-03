function collectPhones(arr) {
    const phoneObj = arr.reduce((acc,curr) => {
const [name,phone] = curr.split(" ");
arr[name] = phone;

return acc;

    },{});
    Object.entries(phoneObj).forEach(([key,value]) => {
        console.log(`${key} -> ${value}`);
    });
}

collectPhones(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);









