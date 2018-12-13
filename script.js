function createNode(element)
{
   return document.createElement(element);
}
function append(parent,el)
{
   return parent.appendChild(el);
}

const ul= document.getElementById("reponse");


           //runs the keypress() function when a key is presse
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
                    span.innerHTML = reponse.cnt;
                    append(li,span);
                    append(ul,li);
                        
                    })
                .catch(function(error){
                console.log(JSON.stringify(error));
                });
           }
