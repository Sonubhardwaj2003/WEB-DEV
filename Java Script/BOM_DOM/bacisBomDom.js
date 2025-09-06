//Accessing : the elements ... by using the ID ,TagName , ClassName,QuarrySelector,quarrySelectorAll
document.getElementById("div1")
document.getElementsByTagName("div")
document.getElementsByClassName("para1")
document.querySelector('p')  //only select or access the para1 not all (para which comes first and ignore all others)
document.querySelectorAll('p') //select or access all the para 


//Updating : the elements..innerHTML , textContent , outerText , innnerText  (first access then updating the element)
let firstPara = document.getElementById("para1");
firstPara.textContent="fifth para"
let secondPara= document.getElementById("para");
secondPara.innerHTML="sixth para"    
// secondPara.textContent="sixth para"  // accessing only first occerance of the para with the id "para"


// Create : and append the child in the HTML .. by using the createElement and appendChild (appending at the lat position 0f the div or content)
let div1= document.getElementById("div1");
let newElement=document.createElement("h3");
newElement.textContent="this is over new paragraph";
div1.appendChild(newElement);

// Insert : if we have to insert the an element at any specifies position the use the insertAdjecentElement
let div2= document.getElementById("div2");
let newElement2=document.createElement("button");
// let newElement2=document.createElement("li");    
// let newElement2=document.createElement("h3");
newElement2.textContent="new paragraph at a specified position";
div2.insertAdjacentElement("beforebegin",newElement2);
// div2.insertAdjacentElement("afterbegin",newElement2);
// div2.insertAdjacentElement("beforeend",newElement2);
// div2.insertAdjacentElement("afterend",newElement2);


// Removing : the element 
let parent= document.getElementById("div2");
let child= document.getElementById("para1");
// parent.removeChild(child);


//CSS : in  the DOM
let cssFirstPara = document.getElementById("para1")
cssFirstPara.style.backgroundColor="blue"
cssFirstPara.style.color="white"; // .style = only add one csss at a time , contains many lines and time to do css 

let cssSecondPara = document.getElementById("para")
cssSecondPara.style.cssText="background-color: white; padding:2px ; color : red ; margin:5px";  // adding multiple css at a single time using the .style.cssText


// setAttribute and classList ( add,remove,toggle) : not showing the funcitionally as an outer appearence on the browser only done implicitly.
let thirdPara= document.querySelector(".para3");
thirdPara.setAttribute("style","padding:5px;background-color:green;color:yellow");

thirdPara.setAttribute('class',"para33") // not show on browser ,only show on browser console
thirdPara.classList().add("para333");
