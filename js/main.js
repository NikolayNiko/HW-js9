// функція formatMoney()
// 23423435.23 => 23,423,435.23
let a = 24234315155.77;

let str = String(a);

formatMoney(a);

function formatMoney(num) {
    let str = String(num);

    let rez = str.slice(-6,-3);

    for(let i = -6; i > (-1)*str.length; i = i - 3){
        rez = str.slice(i-3, i) + "," + rez;        

    }

    rez = rez + str.slice(-3);
    console.log(num, rez);
}

