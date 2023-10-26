function checkSpeed(speed,area){
    const speedLimts = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    };

    const currentSpeedLimit = speedLimts[area];
    const overSpeed = speed - currentSpeedLimit;
  if (overSpeed<=0) {
      console.log(`Driving ${speed} km/h in a ${currentSpeedLimit} zone`);
      return;
  }
  const speedMessage = 
  overSpeed <= 20
   ? 'speeding'
    : overSpeed <= 40
    ? 'excessive speeding'
    : 'reckless driving';

    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${currentSpeedLimit} - ${speedMessage}`);
}

checkSpeed(40, 'city');
checkSpeed(21, 'residential');
checkSpeed(120, 'interstate');













