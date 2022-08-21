// takes in an state setter method and sets it after fetching, 
// this way no need to async the method calling this one
const fetchProducts = async function(setProducts) {
  // let text = await fetchTextCustom("http://127.0.0.1:3001/api/developer/text");
  // console.log(text);

  const response = await fetch(process.env.REACT_APP_allProductsEndpoint);
  const jsonData = await response.json()

  // converted fetched JSON object to array
  const productArray = [];

  for (const [key, value] of Object.entries(jsonData)) {
    productArray.push(value);
  }
  
  setProducts(productArray);
}

export {fetchProducts};