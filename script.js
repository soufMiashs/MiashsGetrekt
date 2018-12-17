function createNode(element)
{
    return document.createElement(element);
}
function append(parent,el)
{
    return parent.appendChild(el);
}



const ul= document.getElementById("reponse");
const ul2= document.getElementById("sentiments");

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
var textC=""
function insert() {
    

    lastUserMessage = document.getElementById("myText").value;
    
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

    let li= createNode('li'),
    span = createNode('h2');

    textC =reponse.cnt;
    span.innerHTML = textC;
    // Speech API used from function peechSynthesis
      if ('speechSynthesis' in window)
                        {
                        var utterance = new SpeechSynthesisUtterance(textC);
                        speechSynthesis.speak(utterance);
                        }
        
        //runs sentiment analysis
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
            let li1= createNode('li'),
            li2= createNode('li'),
            li3= createNode('li'),
            span1 = createNode('h2');
            span2 = createNode('h2');
            span3 = createNode('h2');
            var pos= "positive emotion ";
            var neg= "negative emotion ";
            var mid= "i don't know ";
            span1.innerHTML = pos.concat(sentiments.pos_percent);
            span2.innerHTML = neg.concat(sentiments.neg_percent);
            span3.innerHTML = mid.concat(sentiments.mid_percent);
            append(li1,span1);
            append(li2,span2);
            append(li3,span3);
            append(ul2,li1);
            append(ul2,li2);
            append(ul2,li3);


            })
            .catch(function(error){
            console.log(JSON.stringify(error));
            });
    
    
    append(li,span);
    append(ul,li);

    })
    .catch(function(error){
    console.log(JSON.stringify(error));
    });



    



}
