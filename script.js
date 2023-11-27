var firstStep = document.getElementById('firstStep');
var header = document.getElementById('header');
var pugalo = document.getElementById('pugalo');
var mainImg = document.getElementById('mainImg');

function beginClicked()
{
    firstStep.style.display= 'none';
    header.style.display= 'none';
    pugalo.style.display= 'flex';
    mainImg.style.filter = 'grayscale(50%)'
}