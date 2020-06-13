/*

    N220 Section 25750
    Harmanjot Singh
    Size Thing
    4 April 2020

*/

// object to store the controls
const controls = {
    // output div
    outputDiv: null
}

// main function
function main() {
    // heading
    document.body.innerHTML = "<h1>Look At the Size of That Thing!</h1>";

    // create the div by calling the function
    createDivs("blue", "100px", "100px");
}

// create divs function
function createDivs(bgColor, width, height){
    // boilerplate for all the div features
    controls.outputDiv = document.createElement("div");
    // background color
    controls.outputDiv.style.backgroundColor = bgColor;
    // width
    controls.outputDiv.style.width = width;
    // height
    controls.outputDiv.style.height = height;
    // add the event listner function
    controls.outputDiv.addEventListener("click", growMe)
    // append the child to the document body
    document.body.appendChild(controls.outputDiv);
}

// grow the div function
function growMe(event) {
    // "this" keyword referring to the window object 
    this.style.width = (Number(this.offsetWidth ) * 1.1) + 'px'; // grow the width by 10%
    this.style.height = (Number(this.offsetHeight ) * 1.1) + 'px'; // grow the height by 10%
}