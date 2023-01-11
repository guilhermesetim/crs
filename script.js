function menuMobile() {
    let viewAtual = document.querySelector('#mobile-menu').style.display

    if(viewAtual == 'block'){
        document.querySelector('#mobile-menu').style.display = 'none'
    }
    else {
        document.querySelector('#mobile-menu').style.display = 'block'
    }
}