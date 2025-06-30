
import { Product, ProductCategory } from '../models/Product';
import { PRODUCT_CATEGORIES } from '../constants';

// Mock data for JCI Maamoura products
export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Pin JCI Maamoura',
    description: 'Pin officiel JCI Maamoura en métal de haute qualité avec logo brodé.',
    price: 10.00,
    imageUrl: 'https://store.jci.cc/cdn/shop/products/Large_Gold.jpg?v=1594144388',
    category: PRODUCT_CATEGORIES[0],
    rating: 4.8,
    reviewCount: 45,
    inStock: true,
    tags: ['pin', 'officiel', 'métal'],
    images: [
      'https://store.jci.cc/cdn/shop/products/Large_Gold.jpg?v=1594144388'
    ]
  },
  {
    id: '2',
    name: 'T-Shirt JCI Maamoura',
    description: 'T-shirt en coton premium avec logo JCI Maamoura. Disponible en plusieurs tailles.',
    price: 35.00,
    originalPrice: 45.00,
    imageUrl: 'https://jci.shop.teamsunday.com/wp-content/uploads/sites/70/2024/06/JCI-custon-sport-jersey-oliver-sport-men-1-back.jpg',
    category: PRODUCT_CATEGORIES[1],
    rating: 4.6,
    reviewCount: 89,
    inStock: true,
    tags: ['t-shirt', 'coton', 'logo'],
    images: [
      'https://jci.shop.teamsunday.com/wp-content/uploads/sites/70/2024/06/JCI-custon-sport-jersey-oliver-sport-men-1-back.jpg'
    ]
  },
    {
    id: '8',
    name: 'Porte-clés JCI Maamoura',
    description: 'Porte-clés métallique avec logo JCI Maamoura gravé.',
    price: 3.00,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQJMmWHXWk_TZygM7FlWtsdw_xe1uguorM7g&s',
    category: PRODUCT_CATEGORIES[4],
    rating: 4.3,
    reviewCount: 78,
    inStock: true,
    tags: ['porte-clés', 'métallique', 'gravé'],
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQJMmWHXWk_TZygM7FlWtsdw_xe1uguorM7g&s'
    ]
  },
  {
    id: '3',
    name: 'Polo JCI Maamoura',
    description: 'Polo élégant avec broderie JCI Maamoura, parfait pour les événements officiels.',
    price: 50.00,
    imageUrl: 'https://jci.shop.teamsunday.com/wp-content/uploads/sites/70/2024/06/JCI-RTW-womens-t-shirt-THE-ROSIE-2-front.jpg',
    category: PRODUCT_CATEGORIES[1],
    rating: 4.7,
    reviewCount: 67,
    inStock: true,
    tags: ['polo', 'broderie', 'officiel'],
    images: [
      'https://jci.shop.teamsunday.com/wp-content/uploads/sites/70/2024/06/JCI-RTW-womens-t-shirt-THE-ROSIE-2-front.jpg'
    ]
  },
  {
    id: '4',
    name: 'Mug JCI Maamoura',
    description: 'Mug personnalisé JCI Maamoura en céramique, idéal pour vos pauses café.',
    price: 20.00,
    imageUrl: 'https://dynamic.bonfireassets.com/thumb/design-image/942d52d2-8f61-4021-8db1-f6fa659b4d7e/7a84eab2-996c-4f29-948b-7c1913fd4bc2/450/',
    category: PRODUCT_CATEGORIES[2],
    rating: 4.5,
    reviewCount: 34,
    inStock: true,
    tags: ['mug', 'céramique', 'personnalisé'],
    images: [
      'https://dynamic.bonfireassets.com/thumb/design-image/942d52d2-8f61-4021-8db1-f6fa659b4d7e/7a84eab2-996c-4f29-948b-7c1913fd4bc2/450/'
    ]
  },
  {
    id: '5',
    name: 'Carnet JCI Maamoura',
    description: 'Carnet de notes premium avec couverture JCI Maamoura, parfait pour les réunions.',
    price: 12.00,
    imageUrl: 'https://e4t5x9m6.delivery.rocketcdn.me/wp-content/uploads/2018/05/shutterstock_411983758.jpg',
    category: PRODUCT_CATEGORIES[2],
    rating: 4.4,
    reviewCount: 56,
    inStock: true,
    tags: ['carnet', 'premium', 'réunions'],
    images: [
      'https://e4t5x9m6.delivery.rocketcdn.me/wp-content/uploads/2018/05/shutterstock_411983758.jpg'
    ]
  },
  {
    id: '6',
    name: 'Trophée JCI Excellence',
    description: 'Trophée de reconnaissance JCI pour récompenser les membres exceptionnels.',
    price: 30.00,
    imageUrl: 'https://scontent.ftun2-2.fna.fbcdn.net/v/t1.6435-9/135574872_3399631340158809_4899589499954841468_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=MieCPUzSNzIQ7kNvwFCWLg1&_nc_oc=Adnj49EtbPbXWQtHAhPhXdCvh8shjW97bupzpeE5rHaEzRp1oqRdwwv52eghIXnQOoY&_nc_zt=23&_nc_ht=scontent.ftun2-2.fna&_nc_gid=vJCNqwf85dbAOlBu90AiLQ&oh=00_AfOg96_t7bSKJglvTYLbaTbGt_bNTbCVjUHFozqO6UwnEA&oe=68895C63',
    category: PRODUCT_CATEGORIES[3],
    rating: 4.9,
    reviewCount: 23,
    inStock: true,
    tags: ['trophée', 'reconnaissance', 'excellence'],
    images: [
      'https://scontent.ftun2-2.fna.fbcdn.net/v/t1.6435-9/135574872_3399631340158809_4899589499954841468_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=MieCPUzSNzIQ7kNvwFCWLg1&_nc_oc=Adnj49EtbPbXWQtHAhPhXdCvh8shjW97bupzpeE5rHaEzRp1oqRdwwv52eghIXnQOoY&_nc_zt=23&_nc_ht=scontent.ftun2-2.fna&_nc_gid=vJCNqwf85dbAOlBu90AiLQ&oh=00_AfOg96_t7bSKJglvTYLbaTbGt_bNTbCVjUHFozqO6UwnEA&oe=68895C63'
    ]
  },
  {
    id: '7',
    name: 'Trophée JCI Mérite',
    description: 'Médaille de mérite JCI en bronze avec ruban officiel.',
    price: 20.00,
    imageUrl: 'https://scontent.ftun2-2.fna.fbcdn.net/v/t1.6435-9/81362256_1416811251813713_7087108874951458816_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=DF4NESJwWl4Q7kNvwF9mMyD&_nc_oc=AdmMga9bGdwgcWGteeZV5O7lp56Hp97u1CKP832jYE4m12xNxboJuskoEHWUalwD6VI&_nc_zt=23&_nc_ht=scontent.ftun2-2.fna&_nc_gid=22YLJj4h7cekyiYdVwVQGg&oh=00_AfONOERK3VMRAFjPa3SkKmssKEdJc_O5y2Bqj95G3OnNXg&oe=68893714',
    category: PRODUCT_CATEGORIES[3],
    rating: 4.8,
    reviewCount: 41,
    inStock: true,
    tags: ['médaille', 'mérite', 'bronze'],
    images: [
      'https://scontent.ftun2-2.fna.fbcdn.net/v/t1.6435-9/81362256_1416811251813713_7087108874951458816_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=DF4NESJwWl4Q7kNvwF9mMyD&_nc_oc=AdmMga9bGdwgcWGteeZV5O7lp56Hp97u1CKP832jYE4m12xNxboJuskoEHWUalwD6VI&_nc_zt=23&_nc_ht=scontent.ftun2-2.fna&_nc_gid=22YLJj4h7cekyiYdVwVQGg&oh=00_AfONOERK3VMRAFjPa3SkKmssKEdJc_O5y2Bqj95G3OnNXg&oe=68893714'
    ]
  },
   
  {
    id: '9',
    name: 'Porte-clés JCI Premium',
    description: 'Porte-clés premium en cuir avec logo JCI Maamoura embossé.',
    price: 10.00,
    imageUrl: 'https://i.ebayimg.com/images/g/9iEAAOSwNIhegyfD/s-l400.jpg',
    category: PRODUCT_CATEGORIES[4],
    rating: 4.6,
    reviewCount: 52,
    inStock: true,
    tags: ['porte-clés', 'cuir', 'premium'],
    images: [
      'https://i.ebayimg.com/images/g/9iEAAOSwNIhegyfD/s-l400.jpg'
    ]
  }
];

export class MockDataService {
  static async getProducts(): Promise<Product[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockProducts;
  }

  static async getProductById(id: string): Promise<Product | null> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockProducts.find(product => product.id === id) || null;
  }

  static async getProductsByCategory(categorySlug: string): Promise<Product[]> {
    await new Promise(resolve => setTimeout(resolve, 400));
    return mockProducts.filter(product => product.category.slug === categorySlug);
  }
}
