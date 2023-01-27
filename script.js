let AMPM = document.getElementById("AMPM");

function clock() {
  let date = new Date();

  let hours = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let d_ate = date.getDate();
  let year = date.getFullYear();

  document.getElementById("hrs").innerHTML = hours;
  document.getElementById("min").innerHTML = min;
  document.getElementById("sec").innerHTML = sec;
  document.getElementById("date").innerHTML = d_ate;
  document.getElementById("year").innerHTML = year;

  if (hours > 12) {
    hours = hours - 12;
    AMPM.innerHTML = "Pm";
  } else {
    AMPM.innerHTML = "Am";
  }
}

setInterval(clock, 1000);
