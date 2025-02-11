function Timer(h, m, s, ms) {
  ms = ms + s * 1000 + m * 60000 + h * 3600000;
  setInterval(() => {
    ms = ms - 10;
    setTime();
  }, 10);
  function setTime() {
    let t = [h, m, s];
    t[1] = Math.trunc(ms / 3600000);
    t[2] = Math.trunc(ms / 60000 - t[1] * 60);
    t[3] = Math.trunc(ms / 1000 - t[2] * 60 - t[1] * 3600);
    document.querySelector("#timer").innerHTML = `<kbd>${lengthN(t[1])}</kbd>:<kbd>${lengthN(t[2])}</kbd>:<kbd>${lengthN(t[3])}</kbd>`;
  }
}
function lengthN(num) {
  if (num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
}
export default Timer;
