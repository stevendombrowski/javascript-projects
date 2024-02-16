//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class crewCandidate{
    constructor(name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore){
        this.scores.push(newScore)
    }
    average(){
        let sum = 0;
        
        for(let i = 0; i < this.scores.length; i++){
            sum += this.scores[i]
        }
        let average = Math.round(sum / this.scores.length *10) /10
        return average
    }
    status(){
        let candidateAverage = this.average()
        let status = ""

        if (candidateAverage >= 90){
            status = "Accepted"
        }
        else if (candidateAverage <= 89 && candidateAverage >= 80){
            status =  "Reserve"
        }
        else if (candidateAverage <= 79 && candidateAverage >= 70){
            status = "Probationary"
        }
        else{
            status = "Rejected"
        }
        return `${this.name} earned an average test score of ${this.average()}% and has a status of ${status}.`
    }
}

let bubbaBear = new crewCandidate("Bubba bear", 135, [88, 85, 90])
let merryMaltese = new crewCandidate("Merry Maltese", 1.5, [93, 88, 97])
let gladGator = new crewCandidate("Glad Gator", 225, [75, 78, 62])
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
bubbaBear.addScore(83)
console.log(bubbaBear)
console.log(bubbaBear.average())
// console.log(merryMaltese.average())
// console.log(gladGator.average())
console.log(bubbaBear.status())

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.