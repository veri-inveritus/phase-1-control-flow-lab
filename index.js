function scuberGreetingForFeet(height){
  if (height <= 400) {
    return 'This one is on me!';
  } else if (height > 400 && height <= 2000) {
    return 'That will be twenty bucks.';
  } else if (height > 2000 && height <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (height > 2500) {
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  if (city === 'NYC') {
    return 'Ok, sounds good.';
  } else if (city !== 'NYC') {
    return 'No go.'
  }
}

function switchOnCharmFromTip(givenTip) {
  switch (givenTip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.';
      break;
    }
}