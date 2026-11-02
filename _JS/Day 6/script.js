const target = document.querySelector(".targate");
const btn = document.querySelector(".btn");
const Update_time = document.querySelector(".Update_time");
const Update_score = document.querySelector(".Update_score");
const targate_img = document.querySelector(".targate_image");
const message = document.querySelector(".message");
const Update_higest_score = document.querySelector(".Update_higest_score")


const sound = new Audio('Sound.mp3')


let time = 0;
let score = 0;
let highScore = localStorage.getItem("highScore")||1;
let Can_inc_Score = false;
Update_higest_score.textContent = highScore

// Break the Heart
target.addEventListener("click", () => {
  if (Can_inc_Score) {
    score++;
    targate_img.textContent = "💔";
    Update_score.textContent = score;
    Can_inc_Score = false;
    sound.play();
    UpdateHighScore()
  }
});

function Start() {


    message.style.display = "none";
    target.style.display = "block";
//   targate_img.textContent = "❤️";
  Can_inc_Score = false;
  btn.textContent = "disabled";
  btn.disabled = true;

  let update_position = setInterval(() => {
    let x = Math.floor(Math.random() * 90) + 5;
    let y = Math.floor(Math.random() * 90) + 5;
    Can_inc_Score = true;

    targate_img.textContent = "❤️";
    target.style.top = `${x}%`;
    target.style.left = `${y}%`;
    
    time++;
    Update_time.textContent = time;
    

    if (time >= 20) {
      Stop(update_position);
    }
  }, 1500);
}

function Stop(update_position) {
  message.style.display = "block";
  message.textContent = "Restart";

  target.style.display = "none";

  btn.textContent = "Restart";
  btn.disabled = false;
  clearInterval(update_position);
}

btn.addEventListener("click", () => {
  time = 0;
  score = 0;
  Update_time.textContent = time;
  Update_score.textContent = score;
  Start();
});

function UpdateHighScore(params) {
    highScore = localStorage.getItem("highScore");

if (highScore === null || score > Number(highScore)) {

    localStorage.setItem("highScore", score);

}
    Update_higest_score.textContent = highScore
}


