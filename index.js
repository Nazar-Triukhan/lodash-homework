const rangeRef = document.querySelector('.slider__input')
const imgRef = document.querySelector('.slider__image')

rangeRef.addEventListener('input',_.debounce( (e) => {
    imgRef.style.width = `${e.target.value}%`
},50))


// 

const btnRef = document.querySelector('#btn')
const btnNanRef = document.querySelector('#btn-nan')
const boxRef = document.getElementById('box')


btnRef.addEventListener('click',() => {
window.addEventListener('mousemove', _.throttle(e => {
    boxMouse(e)
},100))
})

function boxMouse (e) {
    boxRef.style.top = e.clientY + -25 + 'px'
    boxRef.style.left = e.clientX + -25 + 'px'
}