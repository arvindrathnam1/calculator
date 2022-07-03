let num1 = '';
let num2 = '';
let opt = null;
let lastOp = false;
let firstOp = false;
const op = ['+', '-', '*', '/']

buttonFill();

function buttonFill() {
    const buttons = document.querySelector('.buttons');
    let sub = 0;
    
    const bottom = ['clr', '0', '=']
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
    const disp = document.querySelector('.display');
    // console.log(this.id);
    if(!(this.id == 13 || this.id == 15)) {
        disp.innerText += this.textContent;
        let eval = op.some(ele => ele == this.textContent);
        if(eval) {
            if(opt) {
                if(divZero()) {
                    disp.innerHTML = 'Division by 0';
                    setTimeout(clear, 2000);
                }else {
                    num1 = operate();
                    num2 = '';
                }
            }
            opt = this.textContent;
            firstOp = true;
            lastOp = true;
        }else {
            if(firstOp)
                num2 += this.textContent;
            else
                num1 += this.textContent;

            lastOp = false;
        } 
        
    }else if (this.id == 13){
        clear();
    }else {
        // console.log('eval =');
        if(lastOp) {
            disp.innerHTML = 'Invalid Expression';
        }else if(opt) {
            if(divZero()){
                disp.innerHTML = 'Error Division by 0';
                setTimeout(clear, 2000);
            } else {
                num1 = operate();
                num2 = '';
                opt = null;
                disp.innerHTML = num1;
            }
        }else {
            disp.innerHTML = num1;
        }
    }
}

function divZero() {
    return opt === '/' && num2 == 0;
}

function clear() {
    const disp = document.querySelector('.display');
    num1 = '';
    num2 = '';
    opt = null;
    disp.innerHTML = '';
}

function operate() {
    // console.log('Hello');
    console.log(`${num1} ${opt} ${num2}`);
    switch(opt) {
        case '+': return parseInt(num1) + parseInt(num2);
        case '-': return parseInt(num1) - parseInt(num2);
        case '*': return parseInt(num1) * parseInt(num2);
        case '/': return parseInt(num1) / parseInt(num2);
    }
}