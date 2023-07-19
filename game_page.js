player_1=localStorage.getItem("p1");
player_2=localStorage.getItem("p2");
Question_turn=player_1;
Answer_turn=player_2;
document.getElementById("question_turn").innerHTML="Question turn : "+ Question_turn;
document.getElementById("answer_turn").innerHTML="Answer turn : "+ Answer_turn;
document.getElementById("p1_name").innerHTML=player_1;
document.getElementById("p2_name").innerHTML=player_2;
function submit() {
    
}