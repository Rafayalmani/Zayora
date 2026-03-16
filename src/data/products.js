// src/data/products.js (Updated with full descriptions and new collection data)
const products = [
  {
    id: 1,
    name: 'Peach Floral Lace Ensemble',
    price: 4000,
    description: 'A vibrant peach-toned 3-piece lawn suit featuring an intricate floral print with teal and magenta accents. Finished with delicate laser-cut lace detailing on the sleeves and hem for a feminine touch.',
    
    image: "/images/1.jpeg",
    gallery: ['/images/2.jpeg', '/images/3.jpeg'],
    category: 'dresses',
    subCategory: 'maxi-dresses',
    inStock: true
  },
  {
    id: 2,
    name: 'Sunset Ochre Paisley Suit',
    price: 12500,
    description: 'Embrace warmth with this ochre and burnt orange 3-piece set. The shirt features traditional paisley motifs and is elevated by rich maroon lace borders and tassel-adorned neckline.',
    details: [
      'Shirt: Ochre lawn shirt with a blend of paisley and floral prints.',
      'Neckline: Round neck with a slit, featuring decorative beaded tassels.',
      'Sleeves: Wide sleeves finished with maroon lace and geometric borders.',
      'Dupatta: Lightweight printed dupatta in a vibrant orange and maroon palette.',
      'Trouser: Solid ochre straight-fit cotton trousers.'
    ],
    image: '/images/2.jpeg',
    category: 'dresses',
    subCategory: 'evening',
    inStock: true
  },
  {
    id: 3,
    name: 'Cream & Maroon Heritage Print',
    price: 3200,
    description: 'A classic cream-based ensemble featuring deep maroon heritage motifs. This look combines traditional block-print aesthetics with modern lace trimmings for a timeless appeal.',
    details: [
      'Shirt: Cream lawn kameez with maroon paisley and floral block-print style patterns.',
      'Neckline: V-split neckline with contrast borders and loop buttons.',
      'Sleeves: Flare sleeves with maroon lace edging and printed borders.',
      'Dupatta: Complementary printed dupatta with a heavy maroon border.',
      'Trouser: Solid cream cotton trousers in a straight-cut silhouette.'
    ],
    image: '/images/3.jpeg',
    category: 'dresses',
    subCategory: 'casual',
    inStock: true
  },
  {
    id: 4,
    name: 'Stone Grey Floral Co-ord',
    price: 3800,
    description: 'Effortlessly chic, this stone-grey co-ord set features a trellis-style print with vibrant pink and yellow floral bunches. A perfect choice for a minimalist yet sophisticated daytime look.',
    details: [
      'Shirt: Straight-cut lawn shirt with a geometric trellis and floral print.',
      'Neckline: High-neck mandarin collar with a subtle V-slit.',
      'Sleeves: Clean, straight sleeves with delicate lace finishing at the cuffs.',
      'Trouser: Matching printed trousers in the same stone-grey floral pattern.'
    ],
    image: '/images/4.jpeg',
    category: 'tops',
    subCategory: 'blouses',
    inStock: true
  },
  {
    id: 5,
    name: 'Monochrome & Mustard Geometric Set',
    price: 5500,
    description: 'Make a statement with this high-contrast 3-piece outfit. Featuring bold black and mustard geometric prints on a cream base, accented by dramatic black lace applique.',
    details: [
      'Shirt: Geometric print lawn kameez in cream, mustard, and black.',
      'Neckline: Scalloped V-neckline with black lace borders and button accents.',
      'Sleeves: Statement sleeves with large black lace inserts and cuff detailing.',
      'Dupatta: Striped printed dupatta with matching border motifs.',
      'Trouser: Cream wide-leg culottes for a modern silhouette.'
    ],
    image: '/images/5.jpeg',
    category: 'tops',
    subCategory: 'eastern',
    inStock: true
  },
  {
    id: 6,
    name: 'Olive & Terracotta Paisley Co-ord',
    price: 4200,
    description: 'A rustic-chic co-ord set featuring an olive-grey base with dense terracotta floral and paisley motifs. Finished with whimsical tassel details for an artisanal feel.',
    details: [
      'Shirt: Relaxed-fit lawn shirt with an all-over paisley and floral print.',
      'Neckline: Collared neck with drawstring tassels.',
      'Sleeves: Adjustable drawstring sleeves with multi-colored bead and tassel accents.',
      'Trouser: Matching printed trousers featuring a large paisley block-print pattern.'
    ],
    image: '/images/6.jpeg',
    category: 'bottoms',
    subCategory: 'pants',
    inStock: true
  },
  {
    id: 7,
    name: 'Sky Blue Floral Meadow Suit',
    price: 8900,
    description: 'Breathable and bright, this sky-blue 2-piece set is adorned with soft pink and peach floral illustrations. Designed with a shirt-style collar for a smart-casual vibe.',
    details: [
      'Shirt: Pastel blue lawn shirt with oversized digital floral prints.',
      'Neckline: Formal shirt collar with a button-down front placket.',
      'Sleeves: Wide-cuff sleeves for a contemporary look.',
      'Trouser: Matching printed straight-fit trousers.'
    ],
    image: '/images/7.jpeg',
    category: 'dresses',
    subCategory: 'eastern',
    inStock: true
  },
  {
    id: 8,
    name: 'Blush Pink Watercolor Co-ord',
    price: 6500,
    description: 'This ethereal 2-piece set features a soft blush base with watercolor-style floral blooms in shades of blue and orange. A breezy, feminine choice for summer evenings.',
    details: [
      'Shirt: Long-length lawn shirt with a soft, diffused floral print.',
      'Neckline: Simple round neckline with a small V-slit.',
      'Sleeves: Wide, flowing sleeves for a relaxed fit.',
      'Trouser: Matching watercolor print wide-leg trousers.'
    ],
    image: '/images/8.jpeg',
    category: 'tops',
    subCategory: 'eastern',
    inStock: true
  },
  {
    id: 9,
    name: 'Magenta Floral Bloom Suit',
    price: 3500,
    description: 'Radiate energy in this magenta 3-piece suit. Featuring an intricate pastel floral overlay and delicate lace trims, this outfit is perfect for festive brunch dates.',
    details: [
      'Shirt: Vibrant magenta lawn shirt with soft green and pink floral patterns.',
      'Neckline: Band collar with decorative green floral buttons.',
      'Sleeves: Scalloped cuffs with lace inserts.',
      'Dupatta: Matching printed dupatta with a wide floral border.',
      'Trouser: Solid magenta straight-cut cotton trousers.'
    ],
    image: '/images/9.jpeg',
    category: 'dresses',
    subCategory: 'evening',
    inStock: true
  },
  {
    id: 10,
    name: 'Apricot Rose Garden Set',
    price: 2800,
    description: 'A cheerful apricot-toned 3-piece ensemble featuring classic rose bouquets and geometric borders. The scalloped lace finishing adds a layer of refined elegance.',
    details: [
      'Shirt: Apricot-colored lawn kameez with large rose motifs and a textured base print.',
      'Neckline: V-cut band collar with lace-edged borders and hanging accents.',
      'Sleeves: Wide sleeves with geometric borders and scalloped lace trim.',
      'Dupatta: Sheer printed dupatta with a geometric and floral blend.',
      'Trouser: Solid apricot wide-leg trousers.'
    ],
    image: '/images/10.jpeg',
    category: 'dresses',
    subCategory: 'casual',
    inStock: true
  },
  {
    id: 11,
    name: 'Classic Cream & Russet Floral Ensemble',
    price: 4200,
    description: 'A sophisticated cream-based 3-piece lawn suit featuring delicate multi-colored floral sprays and rich russet-toned borders. This ensemble balances traditional motifs with a clean, modern aesthetic for a versatile summer look.',
    details: [
      'Shirt: Digitally printed cream lawn kameez featuring fine floral patterns and decorative geometric borders at the hem.',
      'Neckline: Embroidered V-split neckline with earthy-toned borders and delicate button accents.',
      'Sleeves: Full sleeves finished with wide, rust-colored lace-style borders and intricate detailing.',
      'Dupatta: Lightweight printed dupatta with a deep russet and cream floral-heritage pattern.',
      'Trouser: Solid cream cotton trousers in a sleek, straight-cut finish.'
    ],
    image: '/images/11.jpeg',
    category: 'dresses',
    subCategory: 'eastern',
    inStock: true
  }
];

export default products;

// Helper functions
export const getCategories = () => {
  const categories = [...new Set(products.map(p => p.category))];
  return categories;
};

export const getProductsByCategory = (category) => {
  return products.filter(p => p.category === category);
};

export const getProductById = (id) => {
  return products.find(p => p.id === parseInt(id));
};
