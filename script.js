const projectImg = document.querySelectorAll('.projectImg');
const projectDetail = document.querySelectorAll('.porjectDetails');
const btn = document.querySelector('.btn');
const footer = document.querySelector('.footer');
const footerHead = document.querySelector('.footerHead');
const footerUl = document.querySelector('.footerUl');
const preLoader = document.querySelector('.preLoader')


window.addEventListener('load', () => {
    setTimeout(() => {
        preLoader.style.display = 'none';
    }, 3000)
})




window.addEventListener('scroll', () => {
    const bottom = window.innerHeight / 1.8;
    projectImg.forEach(img => {
        const topLine = img.getBoundingClientRect().top;
        if(topLine < bottom) {
            img.classList.add('show');
        } else {
            img.classList.remove('show');
        }
    });
    projectDetail.forEach(detail => {
        const topLine = detail.getBoundingClientRect().top;
        if(topLine < bottom) {
            detail.classList.add('show');
        } else {
            detail.classList.remove('show');
        }
    });
    const topLine = footer.getBoundingClientRect().top;
    const bottomLine = window.innerHeight / 4;
    if(topLine < bottomLine) {
        footerHead.classList.add('show');
        footerUl.classList.add('show');
    } else {
        footerHead.classList.remove('show');
        footerUl.classList.remove('show');
    }
})