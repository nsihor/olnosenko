const body = document.querySelector('body');
const imgList = document.querySelector('.img-list-wrap');


const bodyHeight = body.offsetHeight;

imgList.style.height = `${bodyHeight}px`;

function handleResize() {
    const bodyHeight = body.offsetHeight;

    imgList.style.height = `${bodyHeight}px`;
}

window.addEventListener('resize', handleResize);
