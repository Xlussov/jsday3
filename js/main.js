
const select = document.getElementById('countries')
const ukr = document.querySelector('.ukraine')
const ger = document.querySelector('.germany')
const fra = document.querySelector('.france')
const aus = document.querySelector('.austria')
const bul = document.querySelector('.bulgaria')





select.addEventListener('change', function(){
    const selectedValue = select.value
    switch (selectedValue) {
        case 'ukraine':
            ukr.style.display = 'block'
            ger.style.display = 'none'
            fra.style.display = 'none'
            aus.style.display = 'none'
            bul.style.display = 'none'
            break;
        case'germany':
            ger.style.display = 'block'
            ukr.style.display = 'none'
            fra.style.display = 'none'
            aus.style.display = 'none'
            bul.style.display = 'none'
            break;
        case'france':
            fra.style.display = 'block'
            ukr.style.display = 'none'
            ger.style.display = 'none'
            aus.style.display = 'none'
            bul.style.display = 'none'
            break;
        case'austria':
            aus.style.display = 'block'
            ukr.style.display = 'none'
            ger.style.display = 'none'
            fra.style.display = 'none'
            bul.style.display = 'none'
            break;
        case'bulgaria':
            bul.style.display = 'block'
            ukr.style.display = 'none'
            ger.style.display = 'none'
            fra.style.display = 'none'
            aus.style.display = 'none'
            break;
        default:
            ukr.style.display = 'block'
            break;
    }

})
