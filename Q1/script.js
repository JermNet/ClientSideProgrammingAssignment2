function updateH1(){
    
    const newText = document.getElementById("update-me");
    newText.textContent = "I have been updated!";
}

//Makes it so when the button is clicked, the function above is called
document.getElementById("change-button").addEventListener("click", updateH1);