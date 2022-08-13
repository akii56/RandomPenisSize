function x(arr) {
    const y = Math.floor(Math.random() * arr.length);
    const item = arr[y];

    return item;
}

function penis(value) {
    let penisList = [];
    for(let j = 0; j <= value; j++) {
       const random = Math.floor(Math.random() * 20);
       let jaja = `8`;
       let glava = `D`;
       let velicina = ``;
       for(let i = 0; i <= random; i++) {
            velicina += `=`;
       }
       let penisSize = `${jaja}${velicina}${glava}`;
       penisList.push(penisSize);
    }

    const m = x(penisList);
    console.log(m);
}

penis(20)
