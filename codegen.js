buttonFill();

function buttonFill() {
    const buttons = document.querySelector('.buttons');
    let sub = 0;
    const op = ['+', '-', '*', '/']
    const bottom = ['.', '0', 'clr']
    for(let i = 1; i <= 16; i++){
        const btn = document.createElement('div');
        btn.classList.add('btn');
        btn.id = i;
        btn.addEventListener('click', process);
        if(i % 4 == 0) {
            btn.innerText = op[sub];
            sub++;
        }else if(i >= 13){
            btn.innerText = bottom[i-13];
        }else{
            btn.innerText = i - sub;
        }
        buttons.appendChild(btn);
    }
}

function process(e) {
    
}