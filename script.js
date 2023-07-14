const player = document.querySelector(".player");
const obstacle = document.querySelector(".obstacle");
var score = 0;
var onAir = false;
var isGameRunning = true;

document.addEventListener("keypress", (e) => {
    if(isGameRunning) {
        if(e.key === "w" || e.code === "Space") {
            jump();
        }
    }
})

const jump = () => {
    if(!player.classList.contains("jump")) {
        player.classList.add("jump");
        onAir = true;

        setTimeout(() => {
            player.classList.remove("jump");
            onAir = false;
        }, 1000);
    }
}

const gameover = () => {
    document.querySelector('.gameover').style.display = "flex";

}

var loop = setInterval(() => {
    obstaclePosition = +getComputedStyle(obstacle).right.replace("px", "");
    playerPosition = +getComputedStyle(player).right.replace("px", "");
    let playerY = +getComputedStyle(player).top.replace("px", "");
    if(obstaclePosition+50 > playerPosition && playerY > 396) {
        obstacle.style.animation = "none";
        obstacle.style.right = obstaclePosition + "px";
        player.style.top = playerY + "px";
        gameover();
        isGameRunning = false;
        clearInterval(loop);
    } else {
        score += 0.1;
        document.querySelector(".score").innerHTML = "Score: " + parseInt(score);
    }
}, 10);

const restart = () => {
    score = 0;
    onAir = false;
    isGameRunning = true;
    obstacle.style.animation = "obstacle-animation 2s infinite linear";
    obstacle.style.right = "-500px";
    player.style.top = "451px";
    document.querySelector(".gameover").style.display = "none";
    loop = setInterval(() => {
        obstaclePosition = +getComputedStyle(obstacle).right.replace("px", "");
        playerPosition = +getComputedStyle(player).right.replace("px", "");
        let playerY = +getComputedStyle(player).top.replace("px", "");
        if(obstaclePosition+50 > playerPosition && playerY > 396) {
            obstacle.style.animation = "none";
            obstacle.style.right = obstaclePosition + "px";
            player.style.top = playerY + "px";
            gameover();
            isGameRunning = false;
            clearInterval(loop);
        } else {
            score += 0.1;
            document.querySelector(".score").innerHTML = "Score: " + parseInt(score);
        }
    }, 10);
}