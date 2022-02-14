//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const image = document.querySelector(".imageBtn");
const note = document.querySelector(".note");
const desc = document.querySelector(".desc");
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const pic = document.getElementsByClassName("pic")[0];

let que_count = 0;
let counter;
let totalQuestion = question.data.custom.question.length;

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// if continueQuiz button clicked
function quizStart() {
    // info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(que_count); //calling showQestions function
}

const next_btn = document.querySelector("footer .next_btn");
const prev_btn = document.querySelector("footer .prev_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = ()=>{
    que_count++;
    showQuetions(que_count);
}

// if Prev Que button clicked
prev_btn.onclick = ()=>{
    que_count--;
    showQuetions(que_count);
}


// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que = question.data.custom.question[index]

    let que_tag = '<span>' + que.text.__cdata + '</span>';

    let option_tag = ''
    
    if (Array.isArray(que.option)) {
        for(i=0; i<que.option["length"]; i++) {
            option_tag = option_tag + '<div class="option"><span>'+ que.option[i].text.__cdata +'</span></div>'
        }
    } else{
        option_tag = option_tag + '<div class="option"><span>'+ que.option.text.__cdata +'</span></div>'
    }

    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
    queCounter(index + 1)

    if (que_count == 0) {
        next_btn.classList.add("show"); //show the next button if user selected any option
        prev_btn.classList.remove("show"); //hide the prev button
    }else if (que_count == question.data.custom.question.length - 1) {
        next_btn.classList.remove("show"); //hide the prev button
    }else {
        next_btn.classList.add("show"); //show the next button if user selected any option
        prev_btn.classList.add("show");; //hide the prev button
    }

    note.classList.add("hide");
    desc.style.display = 'none';

    note.onclick = ()=>{
        modal.style.display = "block";
        pic.style.display = 'none';
        desc.style.display = 'block';
    }

    if ('image' in que) {
        image.classList.remove("hide")
        pic.src = que.image.__cdata;
        image.onclick = ()=>{
            modal.style.display = "block";
            pic.style.display = 'block';
            desc.innerHTML = '';
            desc.style.display = 'none';
        }
    }else {
        image.classList.add("hide");
    }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';


// if user clicked on option
function optionSelected(answer){
    let userAns = answer.textContent; //getting user selected option
    userAns = userAns.charAt(0)
    // let correcAns = questions[que_count].answer; //getting correct answer from array
    
    let que = question.data.custom.question[que_count]
    let correcAns = que.fb[0].box.text.__cdata
    correcAns = correcAns.charAt(correcAns.search('Correct answer is ') + 18)
    const allOptions = option_list.children.length; //getting all option items
    let num = {'A':'0' , 'B' : '1', 'C' : '2', 'D' : '3', 'E' : '4', 'F' : '5'}    

    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log(answer)
        desc.innerHTML = que.fb[0].box.text.__cdata;
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        option_list.children[num[correcAns]].classList.add("correct"); //adding green color to correct selected option
        option_list.children[num[correcAns]].insertAdjacentHTML("beforeend", tickIconTag);
        console.log("Wrong Answer");
        console.log(answer)
        desc.innerHTML = que.fb[1].box.text.__cdata;
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }

    note.classList.remove("hide")

}

function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ totalQuestion +'</p></span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}
