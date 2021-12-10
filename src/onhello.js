function onHello() {
    hello.removeEventListener('click', onHello)
    hello.style.animationName = 'rotate'
    setTimeout(() => { setOnHello() }, 2)
}

function setOnHello() {
    hello.addEventListener('click', onHello)
    hello.style.animationName = ''
}

setOnHello()