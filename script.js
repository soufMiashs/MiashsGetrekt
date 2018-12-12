function createNode(element)
{
return document.createElement(element);
}
function append(parent,el)
{
	return parent.appendChild(el);
}

const ul= document.getElementById("sentiments");


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
 textC = document.getElementById("myText").value;





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
	append(ul,li1);
	append(ul,li2);
	append(ul,li3);
	
	
	})
.catch(function(error){
console.log(JSON.stringify(error));
});
}
