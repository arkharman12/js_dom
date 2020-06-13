/*

    N220 Section 25750
    Harmanjot Singh
    Babel Tower
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
    document.body.innerHTML = "<h1>The Tower of Babel</h1>";

    // keep executing this loop until we reach 3 in counting
    for(let i = 0; i <= 2; i++) {

        if(i==0) { // create the first div by calling the function
            createDivs("red", "100px", "100px", "5px");
        } else if(i==1) { // create the second div by calling the function
            createDivs("red", "200px", "200px", "5px");
        } else { // create the third div by calling the function
            createDivs("red", "300px", "300px", "5px");
        }
        
    }
}

// create divs function
function createDivs(bgColor, width, height, marginBottom){
    // boilerplate for all the div features
    controls.outputDiv = document.createElement("div");
    // background color
    controls.outputDiv.style.backgroundColor = bgColor;
    // width
    controls.outputDiv.style.width = width;
    // height
    controls.outputDiv.style.height = height;
    // bottom margin
    controls.outputDiv.style.marginBottom = marginBottom;
    // append it to the document body
    document.body.appendChild(controls.outputDiv);
}