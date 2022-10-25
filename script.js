
var myHeaders = new Headers();
myHeaders.append("apikey", "keiEm6mToK1Lqp2nh7HCSTnPAEc5OBmu");

const getAddress = () => {
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const amount = document.getElementById("amount").value;
  return `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`;
}

const convertBtn = document.getElementById("convertBtn");

convertBtn.addEventListener('click', () => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };
  
  fetch(getAddress(), requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
});
  
