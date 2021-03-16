







function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


var quiz_code =getParameterByName("code")
var user_nickname =getParameterByName("nickname")


function writeUserData(code, nickname) {
    firebase.database().ref( code+"/users/"+ nickname).set({
      correct: 0,
      wrong: 0,
      point :0
    });
  }


  writeUserData(quiz_code,user_nickname)


document.querySelector(".user-name-label").innerHTML=getParameterByName("nickname");


const get_answer_one = document.querySelector("answer_one");
const get_answer_two = document.querySelector("answer_two");
const get_answer_three = document.querySelector("answer_three");
const get_answer_four = document.querySelector("answer_foue");


var inRest = false;

 
  
  var info_box = document.querySelector(".info-box");
  var waiting_caontainer= document.getElementById("waiting-caontainer");
    info_box.addEventListener("click",()=>{
     //waiting_caontainer.classList.remove("animate__fadeInDown");
     //waiting_caontainer.classList.add("animate__fadeOutDown");
     
    
    
    
})

var starCountRef = firebase.database().ref(quiz_code+"/isStsarted");
      starCountRef.on('value', (snapshot) => {
      const data = snapshot.val();
      if(data){
        console.log("başlıyor")
        waiting_caontainer.style.display="none";
     setTimeout(function(){
        
        document.querySelector("#question-box").style.display="block";
        getQuestion()
        
       }, 300);

       
  
        
      }
      else{
       
      }
   
});



var noSelected = 0;

var correct = 0;
var point = 0;
var wrong = 0;
  




var time_when_clicked=1;
var global_time= 1;

// answers

var selectOne = document.getElementById("first");
var selectTwo = document.getElementById("second");
var selectThree = document.getElementById("third");
var selectFour = document.getElementById("fourth");


function sortProperties(obj)
{
  // convert object into array
	var sortable=[];
	for(var key in obj)
		if(obj.hasOwnProperty(key))
			sortable.push([key, obj[key]]); // each item is an array in format [key, value]
	
	// sort items by value
	sortable.sort(function(a, b)
	{
	  return a[1]-b[1]; // compare numbers
	});
	return sortable; // array in format [ [ key1, val1 ], [ key2, val2 ], ... ]
}



function getDashboardData(user){


    document.querySelector(".leader-box").style.display="block";


    var starCountRef = firebase.database().ref(getParameterByName("code")+"/users");
      starCountRef.on('value', (snapshot) => {
      let users = snapshot.val();
      if(users){
        'use strict';
        var data = []
        var jk = "{  "
        
        var name = Object.values(users);
        var keys = Object.keys(users);
        console.log(name[0].point)
        var obj ={}

        for (i = 0; i < name.length; i++) {
            var name_h= keys[i];
            var key = name[i].point;
            console.log(name_h,key)
            

            obj[name_h]=key;
            

            

            //var k = '"'+name_h+'":'+key+', ';
            //jk=jk+k+" ";
            //console.log(k)
            //var obj = JSON.parse(k);
        
            //data.push(obj)


            
          }

          var sort_results = sortProperties(obj).reverse();
          var parent = document.getElementById("attend");
          sort_results.forEach((a,i)=>{
               
            var li = document.createElement("li");
            var label = document.createElement("label")
            var icon = document.createElement("i");

            icon.setAttribute("class","fa fa-star");

            li.setAttribute("class","user");

            if(i == 0 ){

                li.setAttribute("class","user one");
            }

            if(i == 1 ){

                li.setAttribute("class","user two");
            }
            if(i == 2 ){

                li.setAttribute("class","user three");
            }
            if(a[0] == user_nickname  ){

                li.classList.add("you")
            }
            li.innerHTML= a[0];
            label.innerHTML=a[1];
            label.appendChild(icon)
            li.appendChild(label);

            parent.appendChild(li)
          })
          

            

        

    

       
  
        
      }
      else{
       
      }
   
});


}


  



            // algoritma 



var qcounter = 0;
var questions = ["soru1","soru2","soru3","soru4"];

var questions= {

    0:{
        question_id:"1",
        question_context:"lorem pisum dolor sit amaet 1",
        answers:{

            answer_one:"answer 1  question 1",
            answer_one:"answer 2  question 2",
            answer_one:"answer 3  question 3",
            answer_one:"answer 4  question 4",
        },
        correct_answer:2


},
1:{
    question_id:"2",
    question_context:"lorem pisum dolor sit amaet 2",
    answers:{

        answer_one:"answer 1  question 1",
        answer_one:"answer 2  question 2",
        answer_one:"answer 3  question 3",
        answer_one:"answer 4  question 4",
    },
    correct_answer:1


},
2:{
    question_id:"3",
    question_context:"lorem pisum dolor sit amaet 2",
    answers:{

        answer_one:"answer 1  question 1",
        answer_one:"answer 2  question 2",
        answer_one:"answer 3  question 3",
        answer_one:"answer 4  question 4",
    },
    correct_answer:3


},
3:{
    question_id:"4",
    question_context:"lorem pisum dolor sit amaet 3",
    answers:{

        answer_one:"answer 1  question 1",
        answer_one:"answer 2  question 2",
        answer_one:"answer 3  question 3",
        answer_one:"answer 4  question 4",
    },
    correct_answer:0


},
4:{
    question_id:"5",
    question_context:"lorem pisum dolor sit amaet 4",
    answers:{

        answer_one:"answer 1  question 1",
        answer_one:"answer 2  question 2",
        answer_one:"answer 3  question 3",
        answer_one:"answer 4  question 4",
    },
    correct_answer:1


},
5:{
    question_id:"6",
    question_context:"lorem pisum dolor sit amaet 5",
    answers:{

        answer_one:"answer 1  question 1",
        answer_one:"answer 2  question 2",
        answer_one:"answer 3  question 3",
        answer_one:"answer 4  question 4",
    },
    correct_answer:3


},
6:{
    question_id:"7",
    question_context:"lorem pisum dolor sit amaet 6",
    answers:{

        answer_one:"answer 1  question 1",
        answer_one:"answer 2  question 2",
        answer_one:"answer 3  question 3",
        answer_one:"answer 4  question 4",
    },
    correct_answer:2


},

7:{
    question_id:"8",
    question_context:"What dot dou think about developer of that project ? <br><br> 1.He is awsome person <br> 2.He is brilliant and handsome",
    answers:{

        answer_one:"First One ",
        answer_one:"Second One",
        answer_one:"Both of them",
        answer_one:"Neither",
    },
    correct_answer:3


},
}


var starCountRef = firebase.database().ref(quiz_code+"/questions");
      starCountRef.on('value', (snapshot) => {
      const data = snapshot.val();
      if(data){
    questions=data

       
  
        
      }
      else{
       
      }
   
});

var maxq = 8;
var  isStart=false;


const isBreak = false;

const question_box= document.querySelector(".question-box");
const timer_span = document.querySelector(".timer-label");
const quesiton_title = document.querySelector(".quiz-name");
const question = document.querySelector(".question")
const timer_text = document.querySelector(".timer-text");


function haveRest(){
     inRest = true;
    let time = 6;
    console.log("you are in break")
    var answersk = document.querySelectorAll(".question-label");
    
    answersk.forEach((a,i)=>{
       
        if(a.getAttribute("selected")){

            if(i == questions[parseInt(qcounter)-1].correct_answer){
                console.log("doğru")
                correct+=1;
                point+=(5* global_time);
                var starCountRef = firebase.database().ref(getParameterByName("code")+'/users/'+getParameterByName("nickname"));
starCountRef.set({
    correct:correct,
    wrong:wrong,
    point:point
  });


                var child =a.childNodes;
                console.log(child[3])
                a.querySelector(".selected").classList.add("true");
                a.querySelector(".selected").childNodes[1].setAttribute("class","fa fa-check");

                var body= document.querySelector("#question-box");
                let siteColors = ['#ffa68d', '#fd3a84'];
                party.element(body, {
                    color: siteColors,
                    count: party.variation(25, 0.5),
                    size: party.minmax(15, 20),
                    velocity: party.minmax(-300, -600),
                    angularVelocity: party.minmax(6, 9)
                });

                var audio = new Audio('tada.wav');
                audio.play();
                
            }
            else{
                console.log("yanlış")
                var starCountRef = firebase.database().ref(getParameterByName("code")+'/users/'+getParameterByName("nickname"));
                wrong+=1;
                point-=5;
                starCountRef.set({
                    correct:correct,
                    wrong:wrong,
                    point:point
                  });
                var child =a.childNodes;
                console.log(child[3])
                a.querySelector(".selected").classList.add("wrong");
                a.querySelector(".selected").childNodes[1].setAttribute("class","fa fa-times");
                if(i == questions[qcounter].correct_answer){
                    var child =a.childNodes;
                console.log(child[3])
                a.querySelector(".selected").classList.add("true");
                a.querySelector(".selected").childNodes[1].setAttribute("class","fa fa-check");
                    console.log("doğru")}
                var audio = new Audio('sad.wav');
                audio.play();
            }
        }
        else{
        console.log("yok")
        noSelected+=1;
                var child =a.childNodes;
                
                a.querySelector(".selected").classList.add("wrong")
                a.querySelector(".selected").childNodes[1].setAttribute("class","fa fa-times");
                //child[2].classList.add("wrong");
                //child[3].childNodes[1].setAttribute("class","fa fa-times");
                
                if(i == questions[parseInt(qcounter-1)].correct_answer){
                    var child =a.childNodes;
                console.log(child[3])
                a.querySelector(".selected").classList.remove("wrong");
                a.querySelector(".selected").classList.add("true");
                a.querySelector(".selected").childNodes[1].setAttribute("class","fa fa-check");
                //child[3].childNodes[1].setAttribute("class","fa fa-check");
                    console.log("doğru")}
        }

    })
    if(noSelected==4){
        console.log("boş")
        var audio = new Audio('sad.wav');

        audio.play();

    }
    let rest = setInterval(restTimer,1000);
    timer_text.innerHTML="New question in ";
    
    

    function restTimer(){

        time -=1;
        console.log(time)
        timer_span.innerHTML=time;

        if(time == 0){
            clearInterval(rest);
            timer_text.innerHTML="Time over ";
            getQuestion();

        }




    }

    


}



function  getQuestion(){
    var answersk = document.querySelectorAll(".question-label");
    noSelected=0;

    document.querySelector(".ans_one").innerText=questions[qcounter].answers.answer_one;
    document.querySelector(".ans_two").innerText=questions[qcounter].answers.answer_two;
    document.querySelector(".ans_three").innerText=questions[qcounter].answers.answer_three;
    document.querySelector(".ans_four").innerText=questions[qcounter].answers.answer_four;

    answersk.forEach((a)=>{
        var child =a.childNodes;

        a.querySelector(".selected").classList.remove("wrong");
        a.querySelector(".selected").classList.remove("true");
        a.removeAttribute("selected");
    })
     inRest = false;
    let  time = 15;
    console.log(questions[qcounter]);
    quesiton_title.innerHTML="Question " + questions[qcounter].question_id;
    document.querySelector(".current-question").innerHTML=questions[qcounter].question_id+"/"+maxq;
    question.innerHTML=questions[qcounter].question_context;
    var counterLine = setInterval(timer, 1000);
    timer_span.innerHTML=15;
    timer_text.innerHTML="Time left ";
    
    //var audio1 = new Audio('time.wav');
    //audio1.loop=true;
    //audio1.play();
	
    function timer(){
        time -= 1; //upgrading time value with 1
        console.log(time)
        time_when_clicked=time;
        if (time < 10 && time >0){
            timer_span.innerHTML="0"+time;

        }
        else{
            timer_span.innerHTML=time; 
        }     
         //increasing width of time_line with px by time value
        if(time == 0){ //if time value is greater than 549
            clearInterval(counterLine);

            qcounter += 1;

            if(qcounter < maxq){
               
               
                
                setTimeout(()=>{

                    
                    
                      haveRest()
                },500)
            
            }

            if(maxq==qcounter){

                setTimeout(()=>{

                    document.querySelector("#question-box").style.display="none";
                    getDashboardData()
                },3000)
                
            }
            
					
						
					  
        }
    }

 
}



selectOne.addEventListener("click",(a)=>{

    if( !inRest ){
        selectOne.setAttribute("selected",true);
selectTwo.removeAttribute("selected");
selectThree.removeAttribute("selected");
selectFour.removeAttribute("selected");
global_time=time_when_clicked;

    }


});

selectTwo.addEventListener("click",(a)=>{

    if(!inRest){
        selectTwo.setAttribute("selected",true);
        selectOne.removeAttribute("selected");
        selectThree.removeAttribute("selected");
        selectFour.removeAttribute("selected");
        global_time=time_when_clicked;
    }
    
    });

    selectThree.addEventListener("click",(a)=>{
       if (!inRest){
        selectThree.setAttribute("selected",true);
        selectTwo.removeAttribute("selected");
        selectOne.removeAttribute("selected");
        selectFour.removeAttribute("selected");
        global_time=time_when_clicked;
       }
        });


        selectFour.addEventListener("click",(a)=>{
            if(!inRest){

                selectFour.setAttribute("selected",true);
            selectTwo.removeAttribute("selected");
            selectThree.removeAttribute("selected");
            selectOne.removeAttribute("selected");
            global_time=time_when_clicked;
            }
            });



            

