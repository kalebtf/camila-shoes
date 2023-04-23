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
    const imageUrls = await this.fileUploadService.listImages();
    this.products = imageUrls.map(url => ({
      name: 'Product',
      description: 'Product description',
      image: url,
      price: '$0',
    }));
  }


  async onFileSelected(event: any): Promise<void> {
    const file: File = event.target.files[0];
    console.log('file', file);

    const fileName = `${Date.now()}-${file.name}`;
    console.log('fileNameL', fileName);
    const fileUrl = await this.fileUploadService.uploadFile(file, fileName);
    console.log('File URL:', fileUrl);

    // Add the new product with the uploaded image URL
    this.products.push({
      name: 'New Product',
      description: 'New product description',
      image: fileUrl,
      price: '$0',
    });
  }

  async downloadImage(imageUrl: string): Promise<void> {
    const fileName = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
    await this.fileUploadService.downloadFile(fileName);
  }
}
