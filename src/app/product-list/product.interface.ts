// src/app/product-list/product.interface.ts

export interface Product {
  id: string; // Add this line
  name: string;
  description: string;
  image: string;
  price: string;
  isEditing: boolean;
}
