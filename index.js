const headerOne = document.querySelector('h1')

console.log('h1 log', headerOne)

headerOne.style.color = 'red';

colorLinks("red");

function colorLinks(hex)
{
    var links = document.getElementsByTagName("a");
    for(var i=0;i<links.length;i++)
    {
        if(links[i].href)
        {
            links[i].style.color = hex;  
        }
    }  
}