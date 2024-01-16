let music =new Audio("music.mp3")
let audioTurn =new Audio("ting.mp3")
let gameOver =new Audio("gameover.mp3")
let Isgameover=false;
let turn = "X"
//Function to check win
const checkWin=()=>{
    let boxes =document.getElementsByClassName("box");
    let textBox=document.getElementsByClassName("textBox");
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if((textBox[e[0]].innerText===textBox[e[1]].innerText )&&(textBox[e[2]].innerText===textBox[e[1]].innerText)&&(textBox[e[0]].innerText!==""))
        {
            document.querySelector(".info").innerText=textBox[e[0]].innerText+"  WON  Congratulations"
            Isgameover=true;

            for(let i=0;i<3;i++){
                    boxes[e[i]].style.backgroundColor="#16db65"
            }
            gameOver.play()
            setTimeout(resetColor,2000)
            function resetColor(){
                for(let i=0;i<3;i++){
                    boxes[e[i]].style.background="transparent";             
                }
            }
            document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width ='15vw'
        }
    })

}
//Function For Change the turn
const changeTurn=()=>{
    return turn==="X"?"0":"X"
}
//Game Logic
let boxes =document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let textBox= element.querySelector(".textBox");
    element.addEventListener("click",()=>{
        if(textBox.innerText===""){
            textBox.innerText = turn;
            turn=changeTurn();
            audioTurn.play();
            checkWin();
            if(!Isgameover){
            document.getElementsByClassName("info")[0].innerText="Turn For "+ turn;
            }
       }
    })

})

//reset btn setUp
reset.addEventListener('click',()=>{
    let textBox= document.querySelectorAll('.textBox');
    Array.from(textBox).forEach(element=>{
        element.innerText=" "
    });
    turn="X"
    if(Isgameover){
        document.getElementsByClassName("info")[0].innerText="Turn For "+ turn;
    }
    document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width ='0'
});
