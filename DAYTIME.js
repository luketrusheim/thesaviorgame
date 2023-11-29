/*let daylight;
const NIGHT = 0;
const DAY = 1;
let DayMode = DAY;

//CREATES THE DAYLIGHT CYCLE BASED ON SINUSOIDAL WAVE (LONGER DAYS ON PURPOSE)

function DaylightCycle() {
  if (SCENE_START_STATE == OFF && hero.health > 0) {
    time = millis();
    daylight = sin(255 - time / 30000 - 1000) * 127.5 + 200;
    fill(0);
    fill(daylight, 255 - daylight);
    rect(0, 0, 1000, 1000);
  }
  if (daylight < 120) {
    DayMode = NIGHT;
  } else {
    DayMode = DAY;
  }
}
*/