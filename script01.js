function createNode(element)
{
return document.createElement(element);
}
function append(parent,el)
{
	return parent.appendChild(el);
}

const ul= document.getElementById("authors");

const url='https://randomuser.me/api/?results=10';

fetch("https://acobot-brainshop-ai-v1.p.mashape.com/get?bid=178&key=sX5A2PcYZbsN5EY6&uid=mashape&msg=what%20do%20you%20like", {
  headers: {
    Accept: "application/json",
    "X-Mashape-Key": "XTAJ1AQfbzmshw3qVeLKUuRLLEUap19S13hjsnn3Dv62dSd9VA"
  }
})
.then((resp)=>resp.json())
.then(function(data){
	let authors = data;
	
	let li= createNode('li'), 
	span = createNode('h2');
	span.innerHTML = authors.cnt;
	append(li,span);
	append(ul,li);
	
	
	})
.catch(function(error){
console.log(JSON.stringify(error));
});
