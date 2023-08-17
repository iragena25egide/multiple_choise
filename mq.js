const questions=[
    {
        question:"what is the largest country in the world",
        choice:['russia','china','algeria','DR congo'],
        answer:"russia"
    },
    {
        question:"what is the president of rwanda",
        choice:['PAUL kagame','JOSEPH habyarimana','JOSEPH gitera','COL DODO'],
        answer:"PAUL kagame"
    },
    {
        question:"what is the best team in the world",
        choice:['Bayern Munich','Chelsea','Real madrid','FC barcelona'],
        answer:"Bayern Munich"
    },
    {
        question:"what is the most viewed song on youtube",
        choice:['shape of you','baillando','see you again','despacito'],
        answer:"despacito"
    },
    {
        question:"what is the best player in the world",
        choice:['ronaldo','messi','hazard','mbape'],
        answer:"hazard"
    }
]
const container=document.getElementById('container');
const questionElement=document.createElement('div');
questionElement.classList.add("question");

questions.forEach((questionobj,index)=>{
    const questionlist=document.createElement('p');
    questionlist.innerHTML=`Q ${index + 1} :${questionobj.question}`;
    questionElement.appendChild(questionlist);



const optionlist=document.createElement('ul');
    questionobj.choice.forEach(option=>{
    var oneoption=document.createElement('li');
    oneoption.innerHTML=`i.${option}`;
    optionlist.append(oneoption)
    oneoption.addEventListener("click",()=>check(option,questionobj.answer));
    
    questionElement.appendChild(optionlist);

    container.appendChild(questionElement);
})




});




function check(opt,answ){
    if(opt === answ){
        alert('you are correctly!');
    }else{
        alert(`you are failing the answer is: ${answ}`)
    }
}