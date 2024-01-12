// Initialize Variables below
let date = 	'Monday 2019-03-18';
let time = 	'10:05:34 AM';
let astronautCount = 	8;
let astronautStatus	 = 'ready';
let averageAstronautMassKg = 	80.7;
let crewMassKg = 	astronautCount * averageAstronautMassKg;
let fuelMassKg = 	760000;
let shuttleMassKg = 	74842.31;
let totalMassKg	 = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 	850000;
let fuelTempCelsius = 	-225;
let minimumFuelTemp	 = -300;
let maximumFuelTemp = 	-150;
let fuelLevel = 	'100%';
let weatherStatus = 'clear';
let preparedForLiftOff = 	true;


// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

// add logic below to verify all astronauts are ready

// add logic below to verify the total mass does not exceed the maximum limit of 850000

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

// add logic below to verify the fuel level is at 100%

// add logic below to verify the weather status is clear

// Verify shuttle launch can proceed based on above conditions

if (astronautCount <= 7){
    if(astronautStatus = 'ready'){
        if (totalMassKg <= 850000){
            if (fuelTempCelsius < -150 && fuelTempCelsius > -300){
                if (fuelLevel != '100%'){
                    if (weatherStatus == 'clear'){preparedForLiftOff = true}
                }
            }
        }
    }
}
else {[preparedForLiftOff = false]}
if(preparedForLiftOff === true){console.log(
    '----------------------------------------------------------------------', '\n',
    'Date: ' + date, '\n',
    'Time: ' + time, '\n',
    'Astronaut Count: ' + astronautCount,'\n',
    'Crew Mass ' + crewMassKg, '\n',
    'Fuel Mass: ' + fuelMassKg, '\n',
    'Shuttle Mass: ' + shuttleMassKg, '\n',
    'Total Mass: ' + totalMassKg, '\n',
    'Fuel Temperature: ' + fuelTempCelsius, '\n',
    'Weather Status: ' + weatherStatus, '\n',
    '----------------------------------------------------------------------', '\n',
    'All systems are good to go! Prepare for liftoff!'

)}

if(preparedForLiftOff === false){console.log(
    'SHUTTING DOWN OPERATIONS', '\n',
    '----------------------------------------------------------------------', '\n',
    'Date: ' + date, '\n',
    'Time: ' + time, '\n',
    'Astronaut Count: ' + astronautCount,'\n',
    'Crew Mass ' + crewMassKg, '\n',
    'Fuel Mass: ' + fuelMassKg, '\n',
    'Shuttle Mass: ' + shuttleMassKg, '\n',
    'Total Mass: ' + totalMassKg, '\n',
    'Fuel Temperature: ' + fuelTempCelsius, '\n',
    'Weather Status: ' + weatherStatus, '\n',
    '----------------------------------------------------------------------', '\n',
    'ERROR Perform Ship Check!'

)}
