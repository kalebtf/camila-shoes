// src/app/file-upload.service.ts
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.component';
import { S3Client, PutObjectCommand, GetObjectCommand,ListObjectsCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { HttpClient } from '@angular/common/http'; // Add this impor


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



  async listImages(): Promise<string[]> {
    const listObjectsCommand = new ListObjectsCommand({
      Bucket: environment.aws_bucket_name,
      Prefix: '',
    });

    const response = await this.s3.send(listObjectsCommand);
    if (response.Contents) {
      return response.Contents.map(object => `https://${environment.aws_bucket_name}.s3.${environment.aws_region}.amazonaws.com/${object.Key}`);
    } else {
      return [];
    }
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
}
