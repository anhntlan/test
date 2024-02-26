const qs = [
    {
      question: '.What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      answer: 'Paris',
      type:"one",
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Mars', 'Saturn', 'Jupiter', 'Neptune'],
      answer: 'Jupiter',
      type:"one",
    },
    {
      question: 'Which country won the FIFA World Cup in 2018?',
      options: ['Brazil', 'Germany', 'France', 'Argentina'],
      answer: 'France',
      type:"one",

    },
    {
      question: 'What is the tallest mountain in the world?',
      options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Makalu'],
      answer: 'Mount Everest',
      type:"one",

    },
    {
      question: ' is Pacific Ocean the largest ocean on Earth?',
      options: [
       'yes','no'
      ],
      answer: 'yes',
      type:'yn'
    },
    {
      question: 'What is Au the chemical symbol for gold?',
      options: [ 'yes','no'
    ],
    answer: 'yes',
    type:'yn'
    },
    {
      question: 'Who painted the Mona Lisa?',
      options: [
        'Pablo Picasso',
        'Vincent van Gogh',
        'Leonardo da Vinci',
        'Michelangelo',
      ],
      answer: 'Leonardo da Vinci',
      type:"one",
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Mercury', 'Uranus'],
      answer: 'Mars',
      type:"one",
    },
    {
      question: 'What is the largest species of shark?',
      options: [
        'Great White Shark',
        'Whale Shark',
        'Tiger Shark',
        'Hammerhead Shark',
      ],
      answer: 'Whale Shark',
      type:"one",
    },
    {
      question: 'Which animal is known as the King of the Jungle?',
      options: ['Lion', 'Tiger', 'Elephant', 'Giraffe'],
      answer: 'Lion',
      type:"one",
    },
    {
        question: 'Write about your classmate',
        type:"sub",
      },
  ];
  const userInfor= document.getElementById('container');
  const quizContainer = document.getElementById('quiz')

  const qscontainer = document.getElementById('qs-container');
  const recontainer = document.getElementById('result');
 
  const submitButton = document.getElementById('submit');

  
  let currentQuestion = 0;
  let score = 0;
  let incorrectAnswers = [];
  function startTest(){
    const nameInput=document.getElementById('hoten').value;
    const dobInput=document.getElementById('dob').value;
    const msvInput=document.getElementById('msv').value;
    const classInput=document.getElementById('lop').value;
    if(!nameInput || !dobInput || !msvInput || !classInput ){
        alert('Vui lòng nhập đầy đủ thông tin');
       
    }
    else{
        userInfor.style.display='none';
        //alert('valid');
        quizContainer.style.display='block';
        showQuestion();
    }

  }

  function showQuestion(){
    while(currentQuestion<qs.length){
        displayQuestion();
        currentQuestion++;
    }
  }
  function displayQuestion() {
    let questionHTML = `
            <div class='quiz'>`
    while(currentQuestion<qs.length){
        const questionData = qs[currentQuestion];
        questionHTML +=`
            <p>Câu hỏi ${currentQuestion+1}: ${questionData.question}</p>
            `;
            if(questionData.type=='yn'){
                
                questionHTML+=
            `
                <label><input type='radio' name='ans' value='yes'> Dung</label>
                <label><input type='radio' name='ans' value='no'> sai</label>
            
            `;
        
            }
            else if(questionData.type=='one'){
                questionData.options.forEach((Option,index) => {
                    questionHTML += `<label><input type='radio' name='ans' value= "${index}">${Option}`
                });
            }
            else if(questionData.type='sub'){
                questionHTML+=`<texarea id='sub-ans' rows=4 col=5 placeholder="nhap vao cau tra loi"></textarea>`;
            }
           
            currentQuestion++;
        }
        questionHTML+='</div>';

        qscontainer.innerHTML= questionHTML;
  }
    function submitTest()  {
        alert("đã nộp bài thành công!")
//     quizContainer.style.display='none';
//     userInfor.style.display='none';
    
//     recontainer.style.display='block';


  }
