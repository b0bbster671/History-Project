function beginButtonClicked()
{
    firstStep.style.display= 'none';
    header.style.display= 'none';
    firstDialogue.style.display= 'flex';
    //mainImg.style.filter = 'grayscale(30%)'
    mainImg.style.filter = 'brightness(130%)';
    mainImg.src = 'Images/izba2.jpg';    
}

var story = document.getElementById('story');

const plotText = ["<b>Вы:</b> Кажется, сегодня я спал слишком долго", 
"<i>Собрав свои вещи, вы выходите на улицу.</i>",
"<b>Вы:</b> Ну и жара сегодня...", "<i>Посмотрев по сторонам, вы решаете пойти искупаться в реке, что лежит за лесом, чтобы освежиться.</i>"];
var i = 0; 

function aheadClicked(){
    if(i < plotText.length)
    {
        if(i == 1)
            mainImg.style.filter = 'brightness(100%)';
        if(i == 2)
        {
            mainImg.src = 'Images/village.jpg';
            mainImg.id = 'villageImg';
        }            
        story.innerHTML = plotText[i];
        i++;

        checkCharacter();
    }
    else
    {
        window.location.href = 'page2.html';
        checkCharacter();
    }
}

function checkCharacter(){
    if(story.innerText.startsWith('Вы:') || story.innerText.startsWith('Владимир:')){
        mageImg.style.display = 'block';
        pugaloImg.style.display = 'none';
    }else if(story.innerText.startsWith('Набитыш:') || story.innerText.startsWith('Пугало:')){
        mageImg.style.display = 'none';
        pugaloImg.style.display = 'block';
    }else{
        mageImg.style.display = 'none';
        pugaloImg.style.display = 'none';
    }
}

document.addEventListener("keydown", function(event) {
  if (event.key == "ArrowRight") {
    event.preventDefault();
    document.getElementsByClassName("aheadButton").item(0).click();
  }
});