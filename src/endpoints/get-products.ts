export const getProducts = async () => {
  const response = await fetch("https://run.mocky.io/v3/fca7ef93-8d86-4574-9a4a-3900d91a283e");
  const products = response.json();
  return products
};