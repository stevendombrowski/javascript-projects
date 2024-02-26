function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    let textChange = function(){
        paragraph.innerHTML = "Houston, we have liftoff!"
    }
    
   button.addEventListener("click", textChange)
   missionAbort.addEventListener('mouseover', function(){
    missionAbort.style.backgroundColor = "red";
   }) 
   missionAbort.addEventListener('mouseleave', function(){
    missionAbort.style.backgroundColor = "";  
})
   missionAbort.addEventListener("click", function(){
    let result = confirm("Are you sure you want to abort the mission?")
    if(result === true){
        paragraph.innerHTML = "Mission aborted! Space shuttle returning home"
    }
   })
}

window.addEventListener("load", init);
