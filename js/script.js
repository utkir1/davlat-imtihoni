var elUnivers = document.querySelector("#university");
var elBall = document.querySelector(".ball-input");
var elBtn = document.querySelector(".result-btn");
var resultBox = document.querySelector(".result-box");
var resultHeading = document.querySelector(".result-heading");
var resultText = document.querySelector(".result-text");


var grandBall = 145;
var contractBall = 100;
var superContractBall = 56;


var univerList = ["O'zMU", "INHA", "TDIU", "O'zDJTI", "TDTU"];

for (var university of univerList) {
  var newOption = document.createElement("option");
  newOption.textContent = university;
  newOption.value = university;
  elUnivers.append(newOption);
}


elBtn.addEventListener("click", function(e) {
  e.preventDefault();

  if(elBall.value == ""){
    resultBox.classList.remove("alert-danger")
    resultBox.classList.remove("alert-warning")
    resultBox.classList.remove("alert-success")
    resultHeading.textContent = "";
    resultText.textContent = "";
    // return;
  }
 else if(elBall.value >= 0 && elBall.value < superContractBall) {
    resultBox.classList.add("alert-danger");
    resultHeading.textContent = "Afsus!"
    resultText.textContent = `Siz ${elUnivers.value} Universitetiga talabalikka tavsiya etilmadingiz`;

  }else if(elBall.value >= superContractBall && elBall.value < contractBall) {
    resultBox.classList.add("alert-danger");
    resultHeading.textContent = "Afsus!"
    resultText.textContent = `Siz ${elUnivers.value} Unvarsitetiga talaba sifatida tavsiya etilmadingiz, lekin superkontrakt asosida o'qish imkoniyatingiz bor`;
  }else if(elBall.value >= contractBall && elBall.value < grandBall) {
    resultBox.classList.remove("alert-danger");
    resultBox.classList.add("alert-warning");
    resultHeading.textContent = "Tabriklaymiz!"
    resultText.textContent = `Siz ${elUnivers.value} Universitetiga to'lov-shartnoma asosida tavsiya etildingiz`;
  }else if(elBall.value >= grandBall && elBall.value <= 189) {
    resultBox.classList.remove("alert-warning");
    resultBox.classList.remove("alert-danger");
    resultBox.classList.add("alert-success");
    resultHeading.textContent = "Tabriklaymiz!"
    resultText.textContent = `Siz ${elUnivers.value} Universitetiga davlat granti asosida tavsiya etildingiz`;
  }else if(elBall.value < 0 || elBall.value > 189){
    resultBox.classList.add("alert-danger");
    resultHeading.textContent = "Kechirasiz!"
    resultText.textContent = `Siz noto'g'ri qiymat kiritdingiz`;
  }

})
