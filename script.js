
// const buttons=document.querySelectorAll('.btns>button');
// buttons.forEach((button)=>{
//     button.addEventListener("click",function(e){


//         console.log(e.target.className)

//     })
// })


function game(){
    let playerScore=0;
    let computerScore=0;
    let moves=10;
    
    function gamePlay(){

        const options=['rock','paper','scissors'];
        const buttons=document.querySelectorAll('.btns>button');
        buttons.forEach((button)=>{
            button.addEventListener("click",function(e){
                const moveLeft=document.querySelector('.moveleft>p');
                moves--;
                moveLeft.innerHTML=`Move Left: ${moves}`;
                const randValue=Math.floor(Math.random()*3);
                let computer=options[randValue];
                console.log(randValue);
                winner(e.target.className,computer);
                if(moves===0){
                    gameOver();
                }
            })
        })
    }

    function winner(player,computer){
            const everyResult=document.querySelector('.everyResult');
            let res='';
            if(player===computer){
                res="Tie !";
            }
            else if(player==="rock"){
                if(computer==='paper'){
                    computerScore++;
                    res="Computer Won !"
                }
                else{
                    playerScore++;
                    res="Player Won !"
                }
            }
            else if(player==="scissors"){
                if(computer==='rock'){
                    computerScore++;
                    res="Computer Won !"
                }
                else{
                    playerScore++;
                    res="Player Won !"
                }
            }
            else if(player==='paper'){
                if(computer==='scissors'){
                    computerScore++;
                    res="Computer Won !"
                }else{
                    playerScore++;
                    res="Player Won !"
                }
            }
            document.querySelector('.player>p').innerHTML=playerScore;
            document.querySelector('.computer>p').innerHTML=computerScore;
            everyResult.innerHTML=res;
    }
    function gameOver(){
        const move=document.querySelector('.move');
        move.style.display='none';
        const result=document.querySelector('.result');
        result.style.display='flex';
        let res='';
        let color='';
        if(computerScore>playerScore){
            res="Computer Won The Game!!";
            color="green";
        }
        else if(playerScore>computerScore){
            res="You Won The Game!!";
            color="green";
        }
        else{
            res="Match Tied";
            color="gray";
        }
        let el=`<h2>Game Over!</h2>
                <h1 style='color:${color};'>${res}</h1>
                <button class="restart">
                    Restart
                </button>`;
        result.innerHTML=el;
        restartGame();
    }


    function restartGame(){
        const restart=document.querySelector('.restart');
        restart.addEventListener("click",()=>{
            window.location.reload()
        });
    }
    gamePlay();


}
game();