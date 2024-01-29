import axios from "axios";

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
}

export type SuccessHandler = (data: Product[]) => void;

export async function downloadProducts(onSuccessHandler: SuccessHandler) {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    const data: Product[] = response.data;
    onSuccessHandler(data);
  } catch (error) {
    console.log(error);
  }
}
