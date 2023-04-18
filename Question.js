class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Option No..");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.option5 = createElement('h5');
    this.option6 = createElement('h6');
    this.option7 = createElement('h7');
    this.option8 = createElement('h8');
    this.option9 = createElement('h9');
    this.option10 = createElement('h10');
    this.image = createElement("image")
    
    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    // this.question("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    // this.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    this.question.html("Question:- Which dog do you like the most? " );
    // question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );

    this.question.position(150, 80);
    this.option1.html("1: Husky " );
    this.option1.position(150, 100);
    this.option2.html("2: Sheiba " );
    this.option2.position(150, 120);
    this.option3.html("3: Poodle " );
    this.option3.position(150, 140);
    this.option4.html("4: Golden retreiver" );
    this.option4.position(150, 160);
    this.option5.html("5: Pug " );
    this.option5.position(150, 180);
    this.option6.html("6: Chow Chow" );
    this.option6.position(150, 190);
    this.image.html("doge.png")
    this.image.position("500,200")
    

    this.input1.position(150, 250);
    this.input2.position(350, 250);
    this.button.position(290, 300);

    this.button.mousePressed(()=>{
      
      // this.message.html("Thank You, Your Answer Has Been Submitted");
      // this.message.position(350, 350);

       this.message.html("Thank You, Your Answer Has Been Submitted");
       this.message.position(350,350);

      // this.message("Thank You, Your Answer Has Been Submitted");
      // this.message(350, 350);

      // this.message.html("Thank You, Your Answer Has Been Submitted");
      // this.message.position(350);


    });
  }
}
