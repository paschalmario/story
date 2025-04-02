function roll(){
    let inp = document.getElementById('input');
    let output = document.getElementById('output');
    let dice = document.getElementById('dices');
    
    let value = [];
    let img = [];

    for(let i = 0; i < inp.value; i++){
        let num = Math.floor(Math.random() * 6) + 1;
        value.push( num);
        img.push(`<img src="/story/images/dice${num}.png" alt="">`);

    }
    output.append(value.join(', '));
    dice.innerHTML = img;
}