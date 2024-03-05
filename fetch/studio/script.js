//TODO: Add Your Code Below
window.addEventListener("load", function(){
    
    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(function(response){
        response.json().then(function(json){
            let container = document.getElementById('container')
            let i = 0
            let button = document.getElementById('button')
            button.addEventListener('click', function(){
               
                container.innerHTML  += `
                <div class = astronaut>
                    <h3> ${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${json[i].hoursInSpace}
                        <li>ID: ${json[i].id}</li>
                        <li>Active: ${json[i].active}</li>
                        <li>Skills: ${json[i].skills}</li>
                    </ul>
                    <img class=avatar src=${json[i].picture}>
                </div>
            `
            i += 1;
            
            
            })
        })
    })
})