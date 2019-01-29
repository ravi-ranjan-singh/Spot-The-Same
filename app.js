let gameCards=document.querySelectorAll('.game-card');
let gameBoard=document.querySelector('.game-board');
let wonMessage=document.querySelector('.win-message');
let lostMessage=document.querySelector('.lost-message');
let btn1=document.querySelectorAll('a')[0];
let btn2=document.querySelectorAll('a')[1];
let imageArr=["1.png","1.png","2.png","2.png","3.png","3.png","4.png","4.png","5.png","5.png","6.png","6.png"];
let  chances,ctr,prevClicked,nextClicked;
let clickedDiv1,clickedDiv2
let snd = new Audio("btn.mp3");
let snd1 = new Audio("l.mp3");
let snd2 = new Audio("dn.mp3");
let snd3 = new Audio("magic.mp3");


function shuffleArray(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

(function init() {
    shuffleArray(imageArr);
    let i=0;
    imageArr.forEach(function (image) {
        gameCards[i].children[0].setAttribute("src",image);
        i++;
    })
    chances=30;
    ctr=0;
    console.log(imageArr);
    
})();

function play(e) {
    snd.currentTime=0;
    snd.play();
    chances--;
    if(chances>0)
   {  
       if(document.querySelectorAll('.vis').length!==10){
                this.classList.add('flip');
                setTimeout(()=>{
                    this.children[0].classList.remove('invisible');
                    this.classList.remove('flip');
                },800)
            
                setTimeout(()=>{
                    this.children[0].classList.add('invisible')
                },2800)
                    ctr++;
                    check(this,ctr);
            }
            else {wonMessage.classList.remove('invisible');
                  gameCards[0].parentElement.parentElement.classList.add('invisible');
                  snd1.currentTime=0;
                  snd1.play();}
    }
    else {  
        gameCards[0].parentElement.parentElement.classList.add('invisible');
        lostMessage.classList.remove('invisible')
        snd2.currentTime=0;
        snd2.play();
    }
}

function check(div,counter) {
    if(counter===1)
    {       prevClicked=div.children[0].getAttribute("src");
            clickedDiv1=div; }
    else {  nextClicked=div.children[0].getAttribute("src");
            clickedDiv2=div
            ctr=0;}
    if(clickedDiv1!==clickedDiv2)
    {
        if(prevClicked===nextClicked)
        {   gameCards.forEach((gameCard)=>{
            gameCard.removeEventListener('click',play);
                })
                setTimeout(() => {
                    snd3.currentTime=0;
                snd3.play();
                }, 1000);
            setTimeout(() => {
            clickedDiv1.classList.add('vis')
            clickedDiv2.classList.add('vis');
            gameCards.forEach((gameCard)=>{
                gameCard.addEventListener('click',play);
            })
        }, 2900);
            
            }
        else ;
    }
    
}

gameCards.forEach((gameCard)=>{
    gameCard.addEventListener('click',play);
})

btn1.addEventListener('click',function () {
    location.reload();
})
btn2.addEventListener('click',function () {
    location.reload();
})

