function createNode(element)
{
return document.createElement(element);
}
function append(parent,el)
{
	return parent.appendChild(el);
}

const ul= document.getElementById("sentiments");

fetch("https://text-sentiment.p.mashape.com/analyze", {
  body: "text=I am so sad",
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
