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

fetch("https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=10", {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
    "X-Mashape-Key": "XTAJ1AQfbzmshw3qVeLKUuRLLEUap19S13hjsnn3Dv62dSd9VA"
  },
  method: "POST"
})
.then((resp)=>resp.json())
.then(function(data){
	let authors = data;
	for (var i = 0; i < data.length; i++) {
	let li= createNode('li'), 
	span = createNode('h2');
	span.innerHTML = authors[i].quote;
	append(li,span);
	append(ul,li);
	
	}
	
	})
.catch(function(error){
console.log(JSON.stringify(error));
});
