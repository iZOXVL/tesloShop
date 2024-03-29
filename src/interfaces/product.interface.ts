export interface Product {
  id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  slug: string;
  tags: string[];
  title: string;
  //todo: type: Type;
  gender: Category;
}

export interface CartProduct {
  id: string;
  slug: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}


export interface ProductImage {
  id: number;
  url: string;
  productId: string;
}


type Category = "laptop" | "pc" | "accesorios";
export type Type = "laptop" | "pc" | "accesorios";