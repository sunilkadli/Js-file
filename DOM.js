// The Window Object
// It represents the browser's window. All global JavaScript objects, functions, and variables automatically become members of the window object in venila javascript.

//todo => methods of DOM to select the html elements
    // document.getElementById()
    // document.getElementsByClassName()
    // document.getElementsByTagName()
    // document.querySelector()
    // document.querySelectorAll()

    // document.getElementById():
        // it accepts one argument , it is id and it should be of string
        // it will select only the first occurence of id
        // it returns the selected element as the object
    let btn = document.getElementById("btn");
    console.log(btn);
    console.log(typeof btn);

    // document.getElementsByClassName()
     // it accepts one argument , it is className and it should be of string
    // it will select all the occurence of className
    // it returns the selected element as the HTMLCollection of objects

    let jsp = document.getElementsByClassName("jsp");
    console.log(jsp);

   jsp[0].style.cssText = "color:red"

//    <h1 class="jsp">Jspiders</h1>

//    <h1 class="jsp">Jspiders</h1>


 // document.getElementsByTagName()
     // it accepts one argument , it is tagName and it should be of string
    // it will select all the occurence of tagName
    // it returns the selected element as the HTMLCollection of objects


    // <p>Lorem ipsum dolor sit amet..</p>

    // <p>iam para</p>

    let para = document.getElementsByTagName("p");
    console.log(para);

    for(let i = 0 ; i <para.length ; i++){
        para[i].style.cssText  = "background-color : grey"
    }
   

// document.querySelector()
    // it will select html elements using id , className and tagName
    // it will select and returns only one occurence of id , className or tagName
    // id should be indicated using #
    // class should be indicated using dot(.)
    // tag should be normal tagname

    // var x = document.querySelector("#btn");
    // console.log(x);

    // x = document.querySelector(".jsp");
    // console.log(x);

    // x = document.querySelector("p");
    // console.log(x);


    // document.querySelectorAll()
    // it will select html elements using id , className and tagName
    // it will select and returns all the occurence of id , className or tagName as NodeList[]
    // id should be indicated using #
    // class should be indicated using dot(.)
    // tag should be normal tagname

    // var x = document.querySelectorAll("#btn");
    // console.log(x);


// document.createElement()
// appendChild()

// document.createElement(): Creates an instance of the element for the specified tag.

let root = document.getElementById("root");

let h1 = document.createElement("h1");
// h1.innerHTML = "HELLO";
// h1.innerHTML = "<p>HELLO</p>"
// root.appendChild(h1)

let ul = document.createElement("ul");

let li = document.createElement("li")

li.innerHTML = "Item1"

root.appendChild(ul)
ul.appendChild(li)

// innerHTML : The innerHTML property sets or returns the HTML content (inner HTML) of an element.
// it returns content with all the child elements
let c = document.getElementsByClassName("jsp")
console.log(c[0].innerHTML);

// innerText : The innerText property sets or returns the text content of an element.
//! NOte : When you set the innerText property, all child elements are removed and replaced by only text.

console.log(c[0].innerText);

// classList : it is a DOM property , it is used to add or remove aor toggle the CSS Classes dynamically
// it has add() method ,remove() method ,toggle() method
//add() method adds classes into html elements dynamically
//remove() method removes classes from html elements dynamically
//toggle() method adds class if the class is not present and if the class is already present it removes the class dynamically

let body = document.getElementById("body");
// body.classList.add("abcd")
// body.classList.remove("abcd")
// body.classList.toggle("abcd")

// Night-Day mode
btn.addEventListener("click" , () => {
   body.classList.toggle("night")

   if(btn.innerHTML == "Night Mode"){
        btn.innerHTML = "Day Mode"
    }
    else{
        btn.innerHTML = "Night Mode"
    }
})
 
// style property : it is a dom property , used to add css styles
// we can apply onle one css property at a time
// body.style.backgroundColor ="red";
// body.style.border = "5px solid black";

//cssText property : it is the property of style , it used to apply one or more css properties at a time

body.style.cssText = "background-color: aqua; border:5px solid black";