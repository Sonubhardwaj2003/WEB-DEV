// alert("there is somethig happen");

// 1. Accessing DOM Elemnets
// document
//     .getElementById("ChangeText")
//     .addEventListener("click", function () {
//         const para = document.getElementById("myParagraph");
//         para.textContent = "The paragraph has been changed!";
// });
//or more optimal method is
function changeText(){
    let para = document.getElementById("myParagraph");
    para.textContent = "The paragraph has been changed!";
}
let fbutton=document.getElementById("ChangeText");
fbutton.addEventListener("click",changeText);
// fbutton.removeEventListener("click",changeText);  //if we are using the first method to change the text then we canot use the removeEventListner

//2. Transversing the DOM element
document.getElementById("HighlightfirstCity").addEventListener('click',function(){
    let hold=document.getElementById("citiesList");
    hold.firstElementChild.classList.add("highlight");
});


//3. Manuplating DOM elements
document.getElementById("ChangeOrder").addEventListener("click",function(){
    let coffeType=document.getElementById("CoffeType");
    coffeType.textContent="Espresso";
    coffeType.style.backgroundColor="brown";
});


//4. Creating an Inserting Element
document.getElementById("AddItem").addEventListener("click",function(){
    let newItem=document.createElement("li");
    newItem.textContent="Eggs";
    document.getElementById("ItemList").appendChild(newItem);
});


//5.Removing Dom Element
document.getElementById("RemovingTask").addEventListener("click",function(){
    let removeItem=document.getElementById("tasks")
    removeItem.lastElementChild.remove();
});


//6.Event Handling in dom
document.getElementById("EventHandling").addEventListener("click",function(){
    alert("event is handled");
});

//7. Event delegation 
document.getElementById("TeaType").addEventListener("click",function(event){
    if(event.target && event.target.matches(".teaItem")){
        alert("You Selected the : "+event.target.textContent);
    }
});


//8. feedback form
document.getElementById("feedbackForm").addEventListener("click",function(event){
    event.preventDefault();
    let feedback=document.getElementById("feedback").value;
    document.getElementById("feedbackDisplay").textContent=`feedback is : ${feedback}`;
});

//9. Content Loading
document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("domStatus").textContent="Dom loaded sucesssfully";
});

//10.CSS classes manuplation (color change)
document.getElementById("toggleHighLight").addEventListener("click",function(){
    let colorChange=document.getElementById("myPara");
    colorChange.classList.add("highlight");
})