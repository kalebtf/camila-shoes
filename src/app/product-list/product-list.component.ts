// src/app/product-list/product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
import { Product } from './product.interface';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private fileUploadService: FileUploadService) {}



  async ngOnInit(): Promise<void> {
    this.products = await this.fileUploadService.listProducts();
  }




async onSubmit(product: Product): Promise<void> {
  product.isEditing = false;

  // Save the edited product information as a JSON file
  const productJson = JSON.stringify(product);
  const productJsonFileName = `${product.id}.json`;
  await this.fileUploadService.uploadJsonFile(productJson, productJsonFileName);
}





  async onFileSelected(event: any): Promise<void> {
    const file: File = event.target.files[0];
    console.log('file', file);

    const fileName = `${Date.now()}-${file.name}`;
    console.log('fileNameL', fileName);
    const fileUrl = await this.fileUploadService.uploadFile(file, fileName);
    console.log('File URL:', fileUrl);

    // Add the new product with the uploaded image URL
  // Generate a product id
  const productId = `${Date.now()}`;

  // Add the new product with the uploaded image URL
  this.products.push({
    id: productId, // Add this line
    name: 'New Product',
    description: 'New product description',
    image: fileUrl,
    price: '$0',
    isEditing: false,
    });

    // Save the product information as a JSON file
  const productJson = JSON.stringify({
    id: productId,
    name: 'New Product',
    description: 'New product description',
    image: fileUrl,
    price: '$0',
  });
  const productJsonFileName = `${productId}.json`;
  await this.fileUploadService.uploadJsonFile(productJson, productJsonFileName);
  }

  async downloadImage(imageUrl: string): Promise<void> {
    const fileName = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
    await this.fileUploadService.downloadFile(fileName);
  }
}
