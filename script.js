
var myHeaders = new Headers();
myHeaders.append("apikey", "keiEm6mToK1Lqp2nh7HCSTnPAEc5OBmu");


var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };
  
fetch("https://api.apilayer.com/exchangerates_data/convert?to=gbp&from=eur&amount=10", requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));
