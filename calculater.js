const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let expr = '';


function updateDisplay() {
    display.textContent = expr || '0';
}


function calculate(expression) {
    try {
        const result = Function(`return (${expression})`)();
        return String(Number.isFinite(result) ? result : 'Error');
    } catch {
        return 'Error';
    }
}


buttons.forEach(btn => {
    const val = btn.getAttribute('data-value');
    const action = btn.getAttribute('data-action');
    btn.classList.add('rounded-lg', 'p-4', 'text-xl', 'font-semibold', 'hover:scale-105', 'active:scale-95', 'transition');


    btn.addEventListener('click', () => {
        if (action === 'clear') {
            expr = '';
        } else if (action === 'equals') {
            expr = calculate(expr);
        } else if (val) {
            expr += val;
        }
        updateDisplay();
    });
});


// code for keyboard support
window.addEventListener('keydown', e => {
    if (/[0-9]/.test(e.key)) {
        expr += e.key;
    } else if (["+", "-", "*", "/"].includes(e.key)) {
        expr += e.key;
    } else if (e.key === 'Enter') {
        expr = calculate(expr);
    } else if (e.key === 'Backspace') {
        expr = expr.slice(0, -1);
    } else if (e.key === 'Escape') {
        expr = '';
    }
    updateDisplay();
});


updateDisplay();