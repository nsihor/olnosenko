const mainTextBlock = document.querySelectorAll('.main_text_block');

mainTextBlock.forEach((b, i) => {
    const title = b.querySelector('.title');
    const text = b.querySelector('.text');

    b.addEventListener('touchstart', () => {
        b.classList.add(`mtb${i}`);
        title.classList.add('mtbOp');
        text.classList.add('mtbOp');
    });

    b.addEventListener('touchend', () => {
        b.classList.remove(`mtb${i}`);
        title.classList.remove('mtbOp');
        text.classList.remove('mtbOp');
    });
})
