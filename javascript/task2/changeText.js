//* Create a button element with the text "Change Text".
//* When the button is clicked, change the text content of an existing HTML element with the id "myText" to "Hello, Check!".
const changeText = () =>{
  const button = document.getElementById("myText")
  button.addEventListener("click",()=>{
    button.textContent="Hello, Check!"
  })
}

export default changeText;
