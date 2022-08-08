function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
  return string.toLowerCase();
}
function logShout(string) {
  const spy = string.toUpperCase();
  console.log(spy);
}
function logWhisper(string) {
  console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string) {
  if (string.toLowerCase() === string) {
    string = "I can't hear you!";
  } else if (string.toUpperCase() === string) {
    string = "YES INDEED!";
  } else if (string == "Let's have dinner together!") {
    string = "I would love to!";
  }
  return string;
}
