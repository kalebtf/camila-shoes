// src/app/file-upload.service.ts
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.component';
import { S3Client, PutObjectCommand, GetObjectCommand,ListObjectsCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { HttpClient } from '@angular/common/http'; // Add this impor
import { Product } from './product-list/product.interface'; // Add this import

// ... (rest of the code)


@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  private s3: S3Client;

  constructor(private http: HttpClient) {
    this.s3 = new S3Client({
      region: environment.aws_region,
      credentials: {
        accessKeyId: environment.aws_access_key_id,
        secretAccessKey: environment.aws_secret_access_key,
      },

    });
    console.log('s3', this.s3.config);
  }

  async uploadFile(file: File, fileName: string): Promise<string> {
    const putObjectCommand = new PutObjectCommand({
      Bucket: environment.aws_bucket_name,
      Key: fileName,
      Body: file,
      ContentType: file.type, // Add this line to set the Content-Type
      //ACL: 'public-read'
    });

    console.log('putObjectCommand', putObjectCommand);

    console.log('http ulr', `https://${environment.aws_bucket_name}.s3.${environment.aws_region}.amazonaws.com/${fileName}`);

    await this.s3.send(putObjectCommand);
    return `https://${environment.aws_bucket_name}.s3.${environment.aws_region}.amazonaws.com/${fileName}`;
  }



  async listProducts(): Promise<Product[]> {
    const listObjectsCommand = new ListObjectsCommand({
      Bucket: environment.aws_bucket_name,
      Prefix: '', // Adjust the prefix if necessary
    });

    const response = await this.s3.send(listObjectsCommand);
    const productJsonUrls = response.Contents?.filter(object => object.Key?.endsWith('.json')).map(object => `https://${environment.aws_bucket_name}.s3.${environment.aws_region}.amazonaws.com/${object.Key!}`) || [];

    const products: Product[] = [];
    for (const url of productJsonUrls) {
      const product = await this.http.get<Product>(url).toPromise();
      if (product) { // Add this null check
        product.isEditing = false;
        products.push(product);
      }
    }
    return products;
  }





  async downloadFile(fileName: string): Promise<void> {
    const getObjectCommand = new GetObjectCommand({
      Bucket: environment.aws_bucket_name,
      Key: fileName,
    });


    const signedUrl = await getSignedUrl(this.s3, getObjectCommand, { expiresIn: 3600 });

    this.http.get(signedUrl, { responseType: 'blob' }).subscribe((data) => {
      const blob = new Blob([data], { type: data.type });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
  }

  // src/app/file-upload.service.ts

async uploadJsonFile(json: string, fileName: string): Promise<string> {
  const putObjectCommand = new PutObjectCommand({
    Bucket: environment.aws_bucket_name,
    Key: fileName,
    Body: json,
    ContentType: 'application/json', // Set the content type to application/json
  });

  await this.s3.send(putObjectCommand);
  return `https://${environment.aws_bucket_name}.s3.${environment.aws_region}.amazonaws.com/${fileName}`;
}

}
