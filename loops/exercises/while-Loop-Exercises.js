const input = require('readline-sync');
//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let fuel = ' '
let astronauts = ' '
let altitude = 0




/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
fuel = input.question('Please enter fuel level: ');
while (fuel <= 5000 || fuel > 30000 || isNaN(fuel)){console.log('Invalid fuel level')}
console.log('Fuel level accepted')







//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
astronauts = input.question('Please number of astrounauts here: ');
while (astronauts > 7 || astronauts < 1 || isNaN(astronauts)){console.log('Invalid amount of Astronauts')}
console.log('Valid number of astronauts')
  
  
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while (fuel - 100 * astronauts >= 0){
  altitude += 50;
  fuel -= 100 * astronauts
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
console.log(`The shuttle gained an altitude of ${altitude}`)
if (altitude >= 2000){console.log('Orbit achieved!')}
else {console.log('Failed to reach orbit.')}
