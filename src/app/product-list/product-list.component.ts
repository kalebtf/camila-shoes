import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    {
      name: 'Huarache Modelo 1',
      description: 'Descripción del Huarache Modelo 1',
      image: 'assets/huarache (1).jpeg',
      price: '$500'
    },
    {
      name: 'Huarache Modelo 2',
      description: 'Descripción del Huarache Modelo 2',
      image: 'assets/huarache (2).jpeg',
      price: '$550'
    },
    {
      name: 'Huarache Modelo 3',
      description: 'Descripción del Huarache Modelo 3',
      image: 'assets/huarache (3).jpeg',
      price: '$500'
    },
    {
      name: 'Huarache Modelo 4',
      description: 'Descripción del Huarache Modelo 4',
      image: 'assets/huarache (4).jpeg',
      price: '$550'
    },
    {
      name: 'Huarache Modelo 5',
      description: 'Descripción del Huarache Modelo 5',
      image: 'assets/huarache (5).jpeg',
      price: '$550'
    },
    {
      name: 'Huarache Modelo 6',
      description: 'Descripción del Huarache Modelo 6',
      image: 'assets/huarache (6).jpeg',
      price: '$500'
    },
    {
      name: 'Huarache Modelo 7',
      description: 'Descripción del Huarache Modelo 7',
      image: 'assets/huarache (7).jpeg',
      price: '$550'
    },
    {
      name: 'Huarache Modelo 8',
      description: 'Descripción del Huarache Modelo 8',
      image: 'assets/huarache (8).jpeg',
      price: '$500'
    },
    {
      name: 'Huarache Modelo 9',
      description: 'Descripción del Huarache Modelo 9',
      image: 'assets/huarache (9).jpeg',
      price: '$550'
    },
    {
      name: 'Huarache Modelo 10',
      description: 'Descripción del Huarache Modelo 10',
      image: 'assets/huarache (10).jpeg',
      price: '$500'
    },
    {
      name: 'Huarache Modelo 11',
      description: 'Descripción del Huarache Modelo 11',
      image: 'assets/huarache (11).jpeg',
      price: '$550'
    },
    {
      name: 'Huarache Modelo 12',
      description: 'Descripción del Huarache Modelo 12',
      image: 'assets/huarache (12).jpeg',
      price: '$500'
    },
    {
      name: 'Huarache Modelo 13',
      description: 'Descripción del Huarache Modelo 13',
      image: 'assets/huarache (13).jpeg',
      price: '$550'
    },
    {
      name: 'Huarache Modelo 14',
      description: 'Descripción del Huarache Modelo 14',
      image: 'assets/huarache (14).jpeg',
      price: '$500'
    },
    {
      name: 'Huarache Modelo 15',
      description: 'Descripción del Huarache Modelo 15',
      image: 'assets/huarache (15).jpeg',
      price: '$550'
    },
    {
      name: 'Huarache Modelo 16',
      description: 'Descripción del Huarache Modelo 16',
      image: 'assets/huarache (16).jpeg',
      price: '$500'
    },
    {
      name: 'Huarache Modelo 17',
      description: 'Descripción del Huarache Modelo 17',
      image: 'assets/huarache (17).jpeg',
      price: '$550'
    },
    {
      name: 'Huarache Modelo 18',
      description: 'Descripción del Huarache Modelo 18',
      image: 'assets/huarache (18).jpeg',
      price: '$500'
    },
    {
      name: 'Huarache Modelo 19',
      description: 'Descripción del Huarache Modelo 19',
      image: 'assets/huarache (19).jpeg',
      price: '$550'
    },
    {
      name: 'Huarache Modelo 20',
      description: 'Descripción del Huarache Modelo 20',
      image: 'assets/huarache (20).jpeg',
      price: '$500'
    },
    {
      name: 'Huarache Modelo 21',
      description: 'Descripción del Huarache Modelo 21',
      image: 'assets/huarache (21).jpeg',
      price: '$550'
    },
    {
      name: 'Huarache Modelo 22',
      description: 'Descripción del Huarache Modelo 22',
      image: 'assets/huarache (22).jpeg',
      price: '$500'
    },
    {
      name: 'Huarache Modelo 23',
      description: 'Descripción del Huarache Modelo 23',
      image: 'assets/huarache (23).jpeg',
      price: '$550'
    },
    {
      name: 'Huarache Modelo 24',
      description: 'Descripción del Huarache Modelo 24',
      image: 'assets/huarache (24).jpeg',
      price: '$500'
    },
    {
      name: 'Huarache Modelo 25',
      description: 'Descripción del Huarache Modelo 25',
      image: 'assets/huarache (25).jpeg',
      price: '$550'
    },
    {
      name: 'Huarache Modelo 26',
      description: 'Descripción del Huarache Modelo 26',
      image: 'assets/huarache (26).jpeg',
      price: '$500'
    },
    {
      name: 'Huarache Modelo 27',
      description: 'Descripción del Huarache Modelo 27',
      image: 'assets/huarache (27).jpeg',
      price: '$550'
    },
    {
      name: 'Huarache Modelo 28',
      description: 'Descripción del Huarache Modelo 28',
      image: 'assets/huarache (28).jpeg',
      price: '$500'
    },
    {
      name: 'Huarache Modelo 29',
      description: 'Descripción del Huarache Modelo 29',
      image: 'assets/huarache (29).jpeg',
      price: '$550'
    },
    {
      name: 'Huarache Modelo 30',
      description: 'Descripción del Huarache Modelo 30',
      image: 'assets/huarache (30).jpeg',
      price: '$500'
    },
    {
      name: 'Huarache Modelo 31',
      description: 'Descripción del Huarache Modelo 31',
      image: 'assets/huarache (31).jpeg',
      price: '$550'
    },
    {
      name: 'Huarache Modelo 32',
      description: 'Descripción del Huarache Modelo 32',
      image: 'assets/huarache (32).jpeg',
      price: '$500'
    },
    {
      name: 'Huarache Modelo 33',
      description: 'Descripción del Huarache Modelo 33',
      image: 'assets/huarache (33).jpeg',
      price: '$550'
    },
    {
      name: 'Huarache Modelo 34',
      description: 'Descripción del Huarache Modelo 34',
      image: 'assets/huarache (34).jpeg',
      price: '$500'
    },
    {
      name: 'Huarache Modelo 35',
      description: 'Descripción del Huarache Modelo 35',
      image: 'assets/huarache (35).jpeg',
      price: '$550'
    },
    {
      name: 'Huarache Modelo 36',
      description: 'Descripción del Huarache Modelo 36',
      image: 'assets/huarache (36).jpeg',
      price: '$500'
    },
    {
      name: 'Huarache Modelo 37',
      description: 'Descripción del Huarache Modelo 37',
      image: 'assets/huarache (37).jpeg',
      price: '$550'
    },
    {
      name: 'Huarache Modelo 38',
      description: 'Descripción del Huarache Modelo 38',
      image: 'assets/huarache (38).jpeg',
      price: '$500'
    },
    {
      name: 'Huarache Modelo 39',
      description: 'Descripción del Huarache Modelo 39',
      image: 'assets/huarache (39).jpeg',
      price: '$550'
    },
    {
      name: 'Huarache Modelo 40',
      description: 'Descripción del Huarache Modelo 40',
      image: 'assets/huarache (40).jpeg',
      price: '$500'
    },
    {
      name: 'Huarache Modelo 41',
      description: 'Descripción del Huarache Modelo 41',
      image: 'assets/huarache (41).jpeg',
      price: '$550'
    },
    {
      name: 'Huarache Modelo 42',
      description: 'Descripción del Huarache Modelo 42',
      image: 'assets/huarache (42).jpeg',
      price: '$500'
    },
    {
      name: 'Huarache Modelo 43',
      description: 'Descripción del Huarache Modelo 43',
      image: 'assets/huarache (43).jpeg',
      price: '$550'
    },
    {
      name: 'Huarache Modelo 45',
      description: 'Descripción del Huarache Modelo 45',
      image: 'assets/huarache (45).jpeg',
      price: '$500'
    },
    {
      name: 'Huarache Modelo 46',
      description: 'Descripción del Huarache Modelo 46',
      image: 'assets/huarache (46).jpeg',
      price: '$550'
    },
    {
      name: 'Huarache Modelo 47',
      description: 'Descripción del Huarache Modelo 47',
      image: 'assets/huarache (47).jpeg',
      price: '$500'
    },
    {
      name: 'Huarache Modelo 48',
      description: 'Descripción del Huarache Modelo 48',
      image: 'assets/huarache (48).jpeg',
      price: '$550'
    },
    {
      name: 'Huarache Modelo 49',
      description: 'Descripción del Huarache Modelo 49',
      image: 'assets/huarache (49).jpeg',
      price: '$500'
    },
    {
      name: 'Huarache Modelo 50',
      description: 'Descripción del Huarache Modelo 50',
      image: 'assets/huarache (50).jpeg',
      price: '$550'
    },
    {
      name: 'Huarache Modelo 51',
      description: 'Descripción del Huarache Modelo 51',
      image: 'assets/huarache (51).jpeg',
      price: '$500'
    },
    {
      name: 'Huarache Modelo 52',
      description: 'Descripción del Huarache Modelo 52',
      image: 'assets/huarache (52).jpeg',
      price: '$550'
    },
    {
      name: 'Huarache Modelo 53',
      description: 'Descripción del Huarache Modelo 53',
      image: 'assets/huarache (53).jpeg',
      price: '$500'
    },
    {
      name: 'Huarache Modelo 54',
      description: 'Descripción del Huarache Modelo 54',
      image: 'assets/huarache (54).jpeg',
      price: '$550'
    },
    {
      name: 'Huarache Modelo 55',
      description: 'Descripción del Huarache Modelo 55',
      image: 'assets/huarache (55).jpeg',
      price: '$500'
    },
    {
      name: 'Huarache Modelo 56',
      description: 'Descripción del Huarache Modelo 56',
      image: 'assets/huarache (56).jpeg',
      price: '$550'
    },
    {
      name: 'Huarache Modelo 61',
      description: 'Descripción del Huarache Modelo 61',
      image: 'assets/huarache (61).jpeg',
      price: '$500'
    },
    {
      name: 'Huarache Modelo 62',
      description: 'Descripción del Huarache Modelo 62',
      image: 'assets/huarache (62).jpeg',
      price: '$550'
    }

    // Agrega más productos aquí
  ];
}
