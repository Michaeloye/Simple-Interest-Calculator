function compute() {
  let p = document.getElementById("principal");
  let principal = p.value;
  let rate = document.getElementById("rate").value;
  let years = document.getElementById("years").value;
  let interest = (principal * years * rate) / 100;
  let year = new Date().getFullYear() + parseInt(years);
  let result = document.getElementById("result");

  // alert Enter a positive number

  if (principal <= 0) {
    alert("Enter a postive number");
    result.innerHTML = "";
    p.value = "";
    p.focus();
  } else {
    result.innerHTML = `If you deposit <span class='highlight'>${principal}</span>,<br>
                    at an interest rate of <span class='highlight'>${rate}%</span>.<br>
                    You will recieve an amount of <span class='highlight'>${interest},</span><br>
                    in the year <span class='highlight'>${year}</span>.`;
  }
}
function updateRate() {
  let rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval;
}
