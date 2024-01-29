import axios from "axios";

export async function downloadProducts(onSuccessHandler) {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    const data = response.data;
    onSuccessHandler(data);
  } catch (error) {
    console.log(error);
  }
}
