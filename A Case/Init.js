let count = 1000;
function blinkText() {
    count --;
    if(count%2 === 1){
        ctx.font = "30px Arial";
        ctx.fillStyle = 'white';
        ctx.fillText('Press Enter to start',200,350);
    }else {
        clear();
    }
}
// function showScore(score) {
//     ctx.font = "30px Arial";
//     ctx.fillStyle = 'white';
//     ctx.fillText('Score: '+ score,350,350);
// }
function stopGame() {
        cancelAnimationFrame(start);
        clear();
        showScore();
}