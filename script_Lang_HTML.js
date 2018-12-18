function createNode(element)
{
return document.createElement(element);
}
function append(parent,el)
{
   return parent.appendChild(el);
}
const ul= document.getElementById("result");
//runs the keypress() function when a key is pressed
document.onkeypress = keyPress;
//if the key pressed is 'enter' runs the function newEntry()
function keyPress(e) {
var x = e || window.event;
var key = (x.keyCode || x.which);
if (key == 13) {
 //runs this function when enter is pressed
 insert();
}
}
function insert() {
lastUserMessage = document.getElementById("myText").value;
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
		for(var i = 0; i < result.matches.length; i++)
		{ 	botMessageG = "";
			botMessage = "";
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
					document.getElementById("chatlog" + i).innerHTML = messagesG[messagesG.length - i];
				}

   })
.catch(function(error){
console.log(JSON.stringify(error));
});
}
