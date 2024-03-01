
let button = document.getElementById("searchForm")


    
let submitForm = function(formData){
    fetch("https://r31jbh92tk.execute-api.us-east-1.amazonaws.com/dev/submit_message", {
        method: 'POST',
        headers:{
            "Content-Type": "application/json",
        },
        body: formData,
    })
    .catch(error =>console.log("failed to get the message", error))
    .then(data => console.log("Successfully got the message", data, formData))
    
}

button.addEventListener('submit', function(event){
    event.preventDefault()
let nameInput = document.getElementById("name").value;
let email = document.getElementById("email").value;
let message = document.getElementById("message").value;
let formData = {
      name: nameInput,
      email: email,
      message: message,
}
    submitForm(JSON.stringify(formData))
})