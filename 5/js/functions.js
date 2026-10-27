function stringLength(string,length){
  if(string.length<=length){
    return true;
  }
  return false;
}

function polindrome(string){
  const workString = string.replaceAll(' ', '').toUpperCase();
  for (let i=0;i<workString.length/2-1;i++){
    if (workString[i]!==workString[workString.length-1-i]){
      return false;
    }
  }
  return true;
}

function numbers(string){
  const workString=string.toString();
  let finalString="";
  for (let i=0;i<workString.length;i++){
    if(!Number.isNaN(parseInt(workString[i],10))){
      finalString+=workString[i];
    }
  }
  return parseInt(finalString,10);
}

function calendar(start,finish,meeting,duration){
  let startHours='';
  let startMinutes='';
  let finishHours='';
  let finishMinutes='';
  let meetingHours='';
  let meetingMinutes='';
  let mark=true;
  for (let i=0;i<start.length;i++){
    if(start[i]===':'){
      mark=false;
    }
    if (start[i]!==':' && mark){
      startHours+=start[i];
    }
    if (start[i]!==':' && !mark){
      startMinutes+=start[i];
    }

  }
  mark=true;
  for (let i=0;i<finish.length;i++){
    if(finish[i]===':'){
      mark=false;
    }
    if (finish[i]!==':' && mark){
      finishHours+=finish[i];
    }
    if (finish[i]!==':' && !mark){
      finishMinutes+=finish[i];
    }

  }
  mark=true;
  for (let i=0;i<meeting.length;i++){
    if(meeting[i]===':'){
      mark=false;
    }
    if (meeting[i]!==':' && mark){
      meetingHours+=meeting[i];
    }
    if (meeting[i]!==':' && !mark){
      meetingMinutes+=meeting[i];
    }
  }

  if (parseInt(startHours,10)<=parseInt(meetingHours,10) && parseInt(startMinutes,10)<=parseInt(meetingMinutes,10) && (parseInt(meetingHours,10)+Math.floor(parseInt(duration/60,10)))<=parseInt(finishHours,10) && (parseInt(meetingMinutes,10)+parseInt(duration%60,10))<=parseInt(finishMinutes,10)) {
    return true;
  }
  return false;
}

console.log(calendar('08:00', '17:30', '14:00', 90)); // true
console.log(calendar('8:0', '10:0', '8:0', 120));     // true
console.log(calendar('08:00', '14:30', '14:00', 90)); // false
console.log(calendar('14:00', '17:30', '08:0', 90));  // false
console.log(calendar('8:00', '17:30', '08:00', 900)); // false
