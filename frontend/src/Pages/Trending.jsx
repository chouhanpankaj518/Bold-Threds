import React, { useState } from 'react';
import { Truck, Star, TrendingUp } from 'lucide-react';

const trendingData = {
  featuredItems: [
    { id: 1, name: 'Limited Edition Graphic Tee', price: 29.99,
      image: 'https://media.istockphoto.com/id/1452313270/photo/t-shirt-design.webp?a=1&b=1&s=612x612&w=0&k=20&c=OBdJ2HzXDnwMrRjvdgUjjBdpsMbRQFzt8Yd6JIlDQis=' },
    { id: 2, name: 'Vintage Wash Denim Jeans', price: 69.99, 
      image: 'https://media.istockphoto.com/id/1280723408/photo/blue-jeans-isolated-on-white-background-beautiful-jeans.jpg?s=612x612&w=0&k=20&c=9QXAeo4VV77I5o3Tz4X20dmRoa-hrUvFl1EwWLQ8rxk=' },
    { id: 3, name: 'Eco-Friendly Cotton T-Shirt', price: 24.99,
      image: 'https://media.istockphoto.com/id/165174355/photo/tie-dye-shirt.jpg?s=612x612&w=0&k=20&c=hwHs_2bfniwQsEEtT4bUmX3RU5T5P8tSRzVNUb5OSnM=' },
  ],
  categories: [
    { id: 1, name: 'Graphic Tees', 
      image: 'https://media.istockphoto.com/id/1981743313/photo/red-and-pink-t-shirts-on-hangers-on-white-backdrop.webp?a=1&b=1&s=612x612&w=0&k=20&c=LgwgcscW1wYD3TUYadeMenrg3848RYDw--TVb7bEpYs=' },
    { id: 2, name: 'Distressed Jeans',
       image: 'https://media.istockphoto.com/id/91400468/photo/light-blue-jeans-with-a-dirty-wash-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=qZGrQCU9kxwiEz6U3KuZE_95ul160zPMMCVwwXBmZ3M=' },
    { id: 3, name: 'Hoodies',
       image: 'https://media.istockphoto.com/id/136798742/photo/brown-hooded-sweatshirt-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=raLNelpQPvwLodrK6Xs4_ucUHuTcfZkU3jljmEKEKkw=' },
    { id: 4, name: 'Summer Collection',
       image: 'https://media.istockphoto.com/id/952356090/photo/girls-cute-summer-cotton-attire.webp?a=1&b=1&s=612x612&w=0&k=20&c=lnZnaFw8Ow30XjhX_i5dU5RwSxBwb2fnyBcmqD68vHQ=' },
  ],
  popularProducts: [
    { id: 1, name: 'Classic White Tee',
     price: 19.99,
     image: 'https://media.istockphoto.com/id/1354020635/photo/white-t-shirt-mockup-front-used-as-design-template-tee-shirt-blank-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=04SAcG6yGhLDPZFNh3KJiGOXevIp8hWojuLtxtO5PQg=',
      rating: 4.5 },
    { id: 2, name: 'Slim Fit Black Jeans',
     price: 59.99,
     image: 'https://plus.unsplash.com/premium_photo-1690820317364-3e22c2f68eb4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2xpbSUyMEZpdCUyMEJsYWNrJTIwSmVhbnN8ZW58MHx8MHx8fDA%3D', 
     rating: 4.2 },
    { id: 3, name: 'Striped Polo Shirt',
    price: 34.99,
    image: 'https://media.istockphoto.com/id/1322404244/photo/striped-rugby-shirt-mockup.webp?a=1&b=1&s=612x612&w=0&k=20&c=UfiVNUOM36OOPS2MwlmxMfOQ8dLsne3QLjIi9ECbCrE=',
     rating: 4.7 },
    { id: 4, name: 'Ripped Blue Jeans',
     price: 64.99,
      image: 'https://media.istockphoto.com/id/104661110/photo/grey-designer-jeans-for-men-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=6sG97F3Zw0RMXOPOGLq0CefTEaA1huPgdujTKcAzAlE=', rating: 4.3 },
    { id: 5, name: 'V-Neck Gray Tee',
       price: 22.99,
       image: 'https://media.istockphoto.com/id/1189776426/photo/blank-gray-t-shirt-on-wooden-background-space-for-text.webp?a=1&b=1&s=612x612&w=0&k=20&c=wK3peTE4dt8nFpyLRGfsOcygDYAsZ80noJJ4b-m1SRw=', 
       rating: 4.6 },
    { id: 6, name: 'Cargo Jogger Jeans',
       price: 54.99, 
       image: 'https://media.istockphoto.com/id/2173495298/photo/pants-against-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=QgCj7tfeYpj0g1JhqhIetJGPucIr6vigJ-WRPK2bUtU=',
        rating: 4.4 },
  ]
};

export default function Trending() {
  const [currentFeaturedItem, setCurrentFeaturedItem] = useState(0);

  const nextFeaturedItem = () => {
    setCurrentFeaturedItem((prev) => (prev + 1) % trendingData.featuredItems.length);
  };

  const prevFeaturedItem = () => {
    setCurrentFeaturedItem((prev) => (prev - 1 + trendingData.featuredItems.length) % trendingData.featuredItems.length);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Trending Now</h1>

      {/* Featured Item Carousel */}
      <div className="relative mb-12">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img 
            src={trendingData.featuredItems[currentFeaturedItem].image} 
            alt={trendingData.featuredItems[currentFeaturedItem].name} 
            className="w-full h-96 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
            <h2 className="text-2xl font-bold mb-2">{trendingData.featuredItems[currentFeaturedItem].name}</h2>
            <p className="text-xl">${trendingData.featuredItems[currentFeaturedItem].price.toFixed(2)}</p>
          </div>
        </div>
        <button onClick={prevFeaturedItem} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
          &#10094;
        </button>
        <button onClick={nextFeaturedItem} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
          &#10095;
        </button>
      </div>

      {/* Trending Categories */}
      <h2 className="text-2xl font-bold mb-4">Trending Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {trendingData.categories.map((category) => (
          <div key={category.id} className="relative rounded-lg overflow-hidden shadow-md">
            <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-xl font-bold">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Popular Products */}
      <h2 className="text-2xl font-bold mb-4">Popular Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {trendingData.popularProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
              <div className="flex items-center">
                <Star className="text-yellow-400 mr-1" size={16} />
                <span>{product.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Promotional Banner */}
      <div className="bg-blue-500 text-white rounded-lg p-6 mt-12 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">Free Shipping on Orders Over $100</h2>
          <p>Use code FREESHIP at checkout</p>
        </div>
        <Truck size={48} />
      </div>

      {/* Trending Now Button */}
      <div className="text-center mt-12">
        <button className="bg-black text-white font-bold py-3 px-6 rounded-full inline-flex items-center">
          <TrendingUp className="mr-2" />
          Shop All Trending Items
        </button>
      </div>
    </div>
  );
}