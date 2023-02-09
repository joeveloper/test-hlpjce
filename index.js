
//capture the value of the input fiels
let input = document.getElementById("myInput");

//declare the parent div
const inputText = document.querySelector(".input-text")

//output element to be created afte consition is met
let output = document.createElement("h1");

//event lstener to listen to the Enter key press
input.addEventListener("keydown", (event)=>{

    //convert input to array to enable looping through the first 2 indexes
    const myArr = input.value.split(",");

    //if statement to check if the value of the first two 
    //indexes of string are met
    if(event.keyCode === 13){
        event.preventDefault();
        if (myArr[0][0] == "/" && myArr[0][1]=="1"){

            //create a new variable to convert array back to string
            const newText = myArr.toString().substring(2)

            //assign value of variable newText to value
            output.innerText = newText

            //insert value into the created h1 HTML element
            inputText.appendChild(output)  
        } else {
            //if condition is not true, alert the user
            alert("Enter /1 before typing")
                }
            }
        }, [])
        