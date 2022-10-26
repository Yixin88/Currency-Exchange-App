
var myHeaders = new Headers();
myHeaders.append("apikey", "keiEm6mToK1Lqp2nh7HCSTnPAEc5OBmu");

const getAddress = () => {
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const amount = document.getElementById("amount").value;
  return `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`;
}

const resetInput = () => {
  document.getElementById("from").value = "";
  document.getElementById("to").value = "";
  document.getElementById("amount").value = "";
}

const convertBtn = document.getElementById("convertBtn");
const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener('click', () => {
  resetInput();
})

convertBtn.addEventListener('click', () => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };
  
  fetch(getAddress(), requestOptions)
  .then(response => response.json())
  .then(data => {
    const result = parseFloat(data.result);
    const from = data.query.from.toString();
    const to = data.query.to.toString();
    const amount = data.query.amount.toString();
    console.log(data)
    if (document.getElementById("amount").value.trim() === "" || document.getElementById("from").value.trim() === "" || document.getElementById("to").value.trim() === "") {
      document.getElementById("outputArea").innerText = `Please fill in all input`;
    } else if (result !== undefined) {
      document.getElementById("outputArea").innerText = `${amount} ${from} = ${result.toFixed(3)} ${to}`;
    } else {
      document.getElementById("outputArea").innerText = `You have inputed an invalid currency!`;
    }
      
  })
  .catch(error => console.log('error', error));

  
});
  
