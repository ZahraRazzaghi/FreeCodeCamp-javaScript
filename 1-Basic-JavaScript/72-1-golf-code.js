function golfScore(par, strokes) {
  if (strokes == 1) {
    return "Hole-in-one!";
  } else if (strokes <= par - 2) {
    return "Eagle";
  } else if (strokes == par - 1) {
    return "Birdie";
  } else if (strokes == par) {
    return "Par";
  } else if (strokes == par + 1) {
    return "Bogey";
  } else if (strokes == par + 2) {
    return "Double Bogey";
  } else {
    return "Go Home!";
  }
}
golfScore(5, 1); // "Hole-in-one!"
golfScore(5, 3); // "Eagle"
golfScore(5, 4); // "Birdie"
golfScore(5, 5); // "Par"
golfScore(5, 6); // "Bogey"
golfScore(5, 7); // "Double Bogey"
golfScore(5, 9); // "Go Home!"
