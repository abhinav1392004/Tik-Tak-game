let boxes = document.querySelectorAll(".box");
let resBut = document.querySelector(".reset-btn");

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
        checkWinner();
    });
});

const checkWinner = ()=>{
    for(let patt of winnPatt){
        let pos1v = boxes[patt[0]].innerText;
        let pos2v = boxes[patt[1]].innerText;
        let pos3v = boxes[patt[2]].innerText;
        if(pos1v!="" && pos2v!="" && pos3v!=""){
            if(pos1v == pos2v && pos2v == pos3v){
                console.log("winner", pos1v);
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