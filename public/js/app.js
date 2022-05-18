const hint = document.getElementById('hint');

if (hint) {
    const btnHTML = '<button id="hint-btn">Show hint</button>';
    hint.insertAdjacentHTML('beforebegin', btnHTML);
    const hintBtn = document.getElementById('hint-btn');

    window.addEventListener('load', () =>{
        hint.style.display = 'none';
    });
    
    hintBtn.addEventListener('click', (e) => {
        if (e.target.parentElement.parentElement.className.includes('question')) {
            hint.style.display = '';
        }
    });
}
