let hello = document.getElementById('hello')

function onHello() {
    hello.removeEventListener('click', onHello)
    hello.style.animationName = 'rotate'
    hello.style.cursor = 'default'
    setTimeout(() => { setOnHello() }, 1000)
}

export function setOnHello() {
    hello.addEventListener('click', onHello)
    hello.style.animationName = 'none'
    hello.style.cursor = 'pointer'
}