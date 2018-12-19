var messages = [], //array that hold the record of each string in ChatBot
    messagesG = [], //array that hold the record of each string in GramCheck
    lastUserMessage = "", //keeps track of the most recent input string from the user
    botMessage = "", //var keeps track of what the chatbot is going to say
    botName = 'Chatbot'; //name of the chatbot
   

//Bot 
function chatbotResponse() {
    var textC="";
    lastUserMessage = document.getElementById("boitedisc").value;
    
    lastUserMessage = lastUserMessage.replace(/ +/g, "%20");
    fetch("https://acobot-brainshop-ai-v1.p.mashape.com/get?bid=178&key=sX5A2PcYZbsN5EY6&uid=mashape&msg="+lastUserMessage, {
    headers: {
    Accept: "application/json",
    "X-Mashape-Key": "XTAJ1AQfbzmshw3qVeLKUuRLLEUap19S13hjsnn3Dv62dSd9VA"
    }
    })
    .then((resp)=>resp.json())
    .then(function(data){
    let reponse = data;
    textC =reponse.cnt;

        //runs sentiment analysis api
            fetch("https://text-sentiment.p.mashape.com/analyze", {
            body: "text="+textC,
            headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Mashape-Key": "XTAJ1AQfbzmshw3qVeLKUuRLLEUap19S13hjsnn3Dv62dSd9VA"
            },
            method: "POST"
            })
            .then((resp)=>resp.json())
            .then(function(data){
            let sentiments = data;
	    var emo ="";
		if (sentiments.pos_percent != "0%" )
				emo = emo+" &#x1F600;";

		if (sentiments.mid_percent != "0%")
				emo = emo+ " &#x1F914;";

		if (sentiments.neg_percent != "0%")
				emo = emo+ " &#x1F61F;";
            	messages.push("<b>" + botName + ":</b> " + textC+emo);
		    
		    
		    
		for (var i = 1; i < 100; i++) 
		{
		  if (messages[messages.length - i])
			document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
		}
	    //add speech api
            if ('speechSynthesis' in window)
                {
                var utterance = new SpeechSynthesisUtterance(textC);
                speechSynthesis.speak(utterance);
                }	

            })
            .catch(function(error){
            console.log(JSON.stringify(error));
            });


    })
    .catch(function(error){
    console.log(JSON.stringify(error));
    });

}



//*****************************************************************************************

function correctMsg() {

fetch("https://dnaber-languagetool.p.mashape.com/v2/check", {
body: "language=en-US&text="+ lastUserMessage,
headers: {
  Accept: "text/plain",
  "Content-Type": "application/x-www-form-urlencoded",
  "X-Mashape-Key": "XTAJ1AQfbzmshw3qVeLKUuRLLEUap19S13hjsnn3Dv62dSd9VA"
},
method: "POST"
}).then((resp)=>resp.json())
.then(function(data){
   let result = data;
   messagesG = [];
   if (result.matches.length==0)
	{
		messagesG.push("<b> message :</b> " +lastUserMessage+" is correct");
		for (var i = 1; i < 100; i++) 
			{
			  if (messagesG[messagesG.length - i])
				document.getElementById("chatlo" + i).innerHTML = messagesG[messagesG.length - i];
			}
	}
	else
	{ 
		for(var i = 0; i < result.matches.length; i++)
		{ 	botMessageG = "";
			botMessage = result.matches[i].message;
			
			for(var j = 0; j < result.matches[i].replacements.length; j++)
			{
				botMessageG = botMessageG +" "+result.matches[i].replacements[j].value;
			}
			messagesG.push("<b> Message :</b> " +botMessage+ "<b>  Replacements :</b> " + botMessageG);
		}
		for (var i = 1; i < 100; i++) 
		{
		  if (messagesG[messagesG.length - i])
			document.getElementById("chatlo" + i).innerHTML = messagesG[messagesG.length - i];
		}

	
	}
	
	
	
	
   })
.catch(function(error){
console.log(JSON.stringify(error));
});
}
	
//this runs each time enter is pressed.
//It controls the overall input and output
function newEntry() {
  //if the message from the user isn't empty then run 
  if (document.getElementById("boitedisc").value != "") {
    //pulls the value from the chatbox ands sets it to lastUserMessage
    lastUserMessage = document.getElementById("boitedisc").value;
    //sets the chat box to be clear
    document.getElementById("boitedisc").value = "";
    //adds the value of the chatbox to the array messages
    messages.push(lastUserMessage);
    //Speech(lastUserMessage);  //says what the user typed outloud
    //sets the variable botMessage in response to lastUserMessage
    chatbotResponse();

  }
    //if the message from the user isn't empty then run 
  if (document.getElementById("boitedisc1").value != "") {
	 
    //pulls the value from the chatbox ands sets it to lastUserMessage
    lastUserMessage = document.getElementById("boitedisc1").value;
    //sets the chat box to be clear
    document.getElementById("boitedisc1").value = "";
    //sets the variable botMessage in response to lastUserMessage
    correctMsg();

  }
}

	
//runs the keypress() function when a key is pressed
document.onkeypress = keyPress;
//if the key pressed is 'enter' runs the function newEntry()
function keyPress(e) {
var x = e || window.event;
var key = (x.keyCode || x.which);
if (key == 13) {
 //runs this function when enter is pressed
 newEntry();
}
}	
//clears the placeholder text ion the chatbox
//this function is set to run when the users brings focus to the chatbox, by clicking on it
function placeHolder() {
  document.getElementById("boitedisc").placeholder = "";
}
function placeHolder1() {
  document.getElementById("boitedisc1").placeholder = "";
}
