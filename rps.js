function rpsgame(yourChoice)
{ 
    var humanChoice, botChoice; 
    humanChoice  = yourChoice.id; //rock
    botChoice = numberToChoice(randToRpsInt());//paper
    result = decideWinner(humanChoice,botChoice);
    message = finalMsg(result);
    //console.log(humanChoice,botChoice);
    //console.log(message);
    rpsFrontEnd(humanChoice, botChoice, message);

}
function randToRpsInt()
{
    return Math.floor(Math.random() * 3);
}
function numberToChoice(number)
{
    return ['rock','paper','scissors'][number];
}
function decideWinner(humanChoice, botChoice)
{
    var Rpsdatabase = {
        'rock' :{'rock':0.5, 'scissors':1, 'paper':0}, 
        'paper':{'rock':1, 'scissors':0, 'paper':0.5}, 
        'scissors':{'rock':0, 'scissors':0.5, 'paper':1}
    };
    var yourScore = Rpsdatabase[humanChoice][botChoice];
    var compScore = Rpsdatabase[botChoice][humanChoice];
    return [yourScore,compScore];
}
function finalMsg([yourScore,compScore])
{
    if(yourScore === 0)
    {
        return {'message':'You Lost!', 'color':'red'};
    }
    else if(yourScore === 0.5)
    {
        return {'message':'You Tied!', 'color':'yellow'};
    }
    else
    {
        return {'message':'You Win!', 'color':'green'};
    }
}
function rpsFrontEnd(humanChoice,botChoice,finalmessage)
{
    var imageDatabase = {
        'rock':document.getElementById('rock').src, 
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    };
    // lets remove the images 
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src = '"+imageDatabase[humanChoice]+"' ,height = 150, weight = 150, style = 'box-shadow: 0px 10px 50px blue'>";
    document.getElementById('flex-box-rps-div').appendChild(humanDiv); 

    messageDiv.innerHTML = "<h1 style='color:"+finalmessage['color']+"; font-size:60px; padding: 30px'>"+ finalmessage['message']+"</h1>"; 
    document.getElementById('flex-box-rps-div').appendChild(messageDiv); 


    botDiv.innerHTML = "<img src = '"+imageDatabase[botChoice]+"' ,height = 150, weight = 150,  style = 'box-shadow: 0px 10px 50px red'>"
    document.getElementById('flex-box-rps-div').appendChild(botDiv); 
}

