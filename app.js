let boxes = document.querySelectorAll(".box");
let resBut = document.querySelector("#reset-btn");
let newGameBut = document.querySelector("#newGame-btn");
let players = document.querySelectorAll(".player-name");
let msg = document.querySelector("#msg");

let turnO = true;

const winnPatt = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerText =  "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        setTimeout(checkWinner, 50);
    });
});

const checkWinner = ()=>{
    for(let patt of winnPatt){
        let pos1v = boxes[patt[0]].innerText;
        let pos2v = boxes[patt[1]].innerText;
        let pos3v = boxes[patt[2]].innerText;
        if(pos1v!="" && pos2v!="" && pos3v!=""){
            if(pos1v == pos2v && pos2v == pos3v){
                let winnerName;
                if(pos1v == "O") winnerName = players[0].value;
                if(pos1v == "X") winnerName = players[1].value;
                msg.innerText = "🏆 Winner is " + winnerName + "🎉";
                msg.classList.remove("hide");
                disableAll();
            }
        }
    }
}

const disableAll = ()=>{
    boxes.forEach((box)=>{
        box.disabled = true;
    })
}

const resetGame = ()=>{
    boxes.forEach((box)=>{
        box.innerText = "";
        box.disabled = false;
    });
    msg.classList.add("hide");
    turnO = true;
}

const newGame = ()=>{
    boxes.forEach((box)=>{
        box.innerText = "";
        box.disabled = false;
    });
    players.forEach((player)=>{
        player.value = "";
    });
    msg.classList.add("hide");
    turnO = true;
}

resBut.addEventListener("click", resetGame);
newGameBut.addEventListener("click", newGame);