import React, { useState } from 'react';
import { Clock, Star, ChevronDown } from 'lucide-react';

import { createContext } from 'react';
import Addtocard from './Addtocard';
export const Global = createContext()

const newArrivalsData = {
  featuredArrival: {
    id: 1,
    name: "Limited Edition Graphic Tee",
    price: 34.99,
    image: "/api/placeholder/800/600",
    description: "Be the first to get our exclusive new design. Made from 100% organic cotton for ultimate comfort and style."
  },
  products: [
    { id: 2, name: "Vintage Wash Slim Jeans", price: 59.99, image: "/api/placeholder/300/400", category: "jeans", rating: 4.5 },
    { id: 3, name: "Eco-Friendly V-Neck Tee", price: 24.99, image: "/api/placeholder/300/400", category: "tshirt", rating: 4.7 },
    { id: 4, name: "Distressed Denim Jacket", price: 79.99, image: "/api/placeholder/300/400", category: "jeans", rating: 4.3 },
    { id: 5, name: "Striped Long Sleeve Tee", price: 29.99, image: "/api/placeholder/300/400", category: "tshirt", rating: 4.6 },
    { id: 6, name: "High-Waisted Skinny Jeans", price: 64.99, image: "/api/placeholder/300/400", category: "jeans", rating: 4.8 },
    { id: 7, name: "Retro Logo Crop Top", price: 22.99, image: "/api/placeholder/300/400", category: "tshirt", rating: 4.4 },
    { id: 8, name: "Relaxed Fit Carpenter Jeans", price: 69.99, image: "/api/placeholder/300/400", category: "jeans", rating: 4.2 },
    { id: 9, name: "Organic Cotton Henley", price: 32.99, image: "/api/placeholder/300/400", category: "tshirt", rating: 4.5 },
  ]
};

export default function NewArrivals() {
  const [sortBy, setSortBy] = useState('newest');
  const [filter, setFilter] = useState('all');
  const [fiternewarrivals , setfilternewaewarrivals]= useState(0)

  const sortedAndFilteredProducts = [...newArrivalsData.products]
    .filter(product => filter === 'all' || product.category === filter)
    .sort((a, b) => {
      if (sortBy === 'price-low-high') return a.price - b.price;
      if (sortBy === 'price-high-low') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

    
    function addToCart(id){
      // let data = newArrivalsData.products.filter(item=>item.id == id)
      setfilternewaewarrivals(fiternewarrivals+2)
      // console.log(data)
    }
    
    
    
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">New Arrivals</h1>

    
      <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden mb-12">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src={newArrivalsData.featuredArrival.image} alt={newArrivalsData.featuredArrival.name} />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Featured New Arrival</div>
            <h2 className="block mt-1 text-lg leading-tight font-medium text-black">{newArrivalsData.featuredArrival.name}</h2>
            <p className="mt-2 text-gray-500">{newArrivalsData.featuredArrival.description}</p>
            <div className="mt-4">
              <span className="text-2xl font-bold">${newArrivalsData.featuredArrival.price.toFixed(2)}</span>
              <button className="ml-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition duration-300">Shop Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Sorting and Filtering */}
      <div className="flex flex-col md:flex-row justify-between mb-6">
        <div className="flex items-center mb-4 md:mb-0">
          <Clock className="mr-2" />
          <span className="font-semibold">New Arrivals</span>
        </div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <div className="flex items-center">
            <ChevronDown className="mr-2" />
            <span className="mr-2">Sort by:</span>
            <select
              className="p-2 border rounded"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="newest">Newest</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
          <div className="flex items-center">
            <span className="mr-2">Filter:</span>
            <select
              className="p-2 border rounded"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Products</option>
              <option value="jeans">Jeans</option>
              <option value="tshirt">T-Shirts</option>
            </select>
          </div>
        </div>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sortedAndFilteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
              <div className="flex items-center mb-4">
                <Star className="text-yellow-400 mr-1" size={16} />
                <span>{product.rating.toFixed(1)}</span>
              </div>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300" onClick={() => addToCart(product.id)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="mt-16 bg-gray-100 rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Be the First to Know</h2>
        <p className="mb-4">Sign up for our newsletter to receive updates on new arrivals and exclusive offers.</p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-r-lg hover:bg-blue-600 transition duration-300">
            Subscribe
          </button>
        </div>
      </div>
      <Global.Provider value={fiternewarrivals}>
        <Addtocard/>
      </Global.Provider>
    </div>
  );
}