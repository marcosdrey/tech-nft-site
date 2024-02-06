let previous = document.querySelectorAll('.previous');
let next = document.querySelectorAll('.next');
let comments = document.querySelectorAll('.commentary');
let current = 0;

Array.from(previous).forEach(element => {
    element.addEventListener('click', function(){changeReview(-1)})
})

Array.from(next).forEach(element => {
    element.addEventListener('click', function(){changeReview(1)})
})

function changeReview(n) {
    n = Number(n);
    hideComment(current);
    current = (current + n + comments.length) % comments.length;
    showComment(current);
}

function hideComment(i) {
    comments[i].classList.add('hide-commentary')
}

function showComment(i) {
    comments[i].classList.remove('hide-commentary')
}