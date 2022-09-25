 function percen(){
    let ab = document.querySelector("#num1").value;
    let grade;
    if (ab>80){
       grade= ("YOu have got the A-1 gRADE");
    }
    else if (ab > 70 && ab < 80) {
        grade=("You have got A Grade");
    }
    else if (ab > 60 && ab < 70) {
        grade=("You have got B Grade");
    }
    else if (ab > 50 && ab < 60) {
        grade=("You have got B Grade");
    }
document.querySelector("#result").innerHTML = grade;
 }