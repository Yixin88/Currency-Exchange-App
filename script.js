var myHeaders = new Headers();
myHeaders.append("apikey", "keiEm6mToK1Lqp2nh7HCSTnPAEc5OBmu");

const from = document.getElementById("from");
const to = document.getElementById("to");
const amount = document.getElementById("amount");

const getAddress = (to, from, amount) => {
  return `https://api.apilayer.com/exchangerates_data/convert?to=${from}&from=${to}&amount=${amount}`;
}

const fetchData = () => {
    var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };
  fetch(getAddress(from.value.trim(), to.value.trim(), amount.value.trim()), requestOptions)
    .then(response => response.json())
    .then(data => {
      const result = parseFloat(data.result);
      const from = data.query.from.toString();
      const to = data.query.to.toString();
      const amount = data.query.amount.toString();
      console.log(data)
      document.getElementById("outputArea").innerText = `${amount} ${from} = ${result.toFixed(3)} ${to}`;   
    })
    .catch(error => document.getElementById("outputArea").innerText = `You have inputed an invalid currency!`);
}

const resetInput = () => {
  document.getElementById("from").value = "";
  document.getElementById("to").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("outputArea").innerHTML = "";
}

const convertBtn = document.getElementById("convertBtn");
const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener('click', () => {
  resetInput();
})

document.addEventListener('keypress', (event)=>{
  let keyCode = event.keyCode;
  if(keyCode === 13) {
    convertBtn.click();
  };
});

convertBtn.addEventListener('click', () => {
  if (document.getElementById("amount").value.trim() === "" || document.getElementById("from").value.trim() === "" || document.getElementById("to").value.trim() === "") {
    document.getElementById("outputArea").innerText = `Please fill in all input`;
  } else {
    fetchData();
  }
});