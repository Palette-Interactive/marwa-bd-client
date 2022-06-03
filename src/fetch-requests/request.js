const API_URL = 'http://localhost:5000';

async function httpGetMenuData() {
const response = await fetch(`${API_URL}`);
  return await response.json();
}

async function httpSubmitOrder(orderData) {
 

  console.log(JSON.stringify(orderData));
  // fetch(`${API_URL}/order`,{
  //   method: 'POST',
  //  headers: { 'Content-Type': 'application/json'},
  //  body: JSON.stringify(orderData),
  // })
  // .then(res => res.json())
  // .then(data => console.log(data) )
  // .catch(err=>{
  //   console.log(err,"errorss")
  // })

  return orderData;
}

export {
    httpGetMenuData,
    httpSubmitOrder
}