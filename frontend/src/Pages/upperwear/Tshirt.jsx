import React, { useState } from 'react';
import { StarIcon, ShoppingCartIcon } from 'lucide-react';

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const colors = ['White', 'Black', 'Gray', 'Blue', 'Red'];

const Tshirt = () => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('White');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        {/* Product Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img 
            src="/api/placeholder/500/600" 
            alt="T-shirt" 
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold mb-4">Classic Comfort T-Shirt</h1>
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
            <span className="ml-2 text-gray-600">(125 reviews)</span>
          </div>
          <p className="text-2xl font-semibold mb-4">$24.99</p>
          <p className="text-gray-600 mb-6">
            Our classic t-shirt never goes out of style. Made from 100% cotton for ultimate comfort and durability.
          </p>

          {/* Color Selection */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Color</h2>
            <div className="flex space-x-2">
              {colors.map(color => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color ? 'border-blue-500' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color.toLowerCase() }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Size</h2>
            <div className="flex flex-wrap gap-2">
              {sizes.map(size => (
                <button
                  key={size}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === size
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 flex items-center justify-center">
            <ShoppingCartIcon className="h-5 w-5 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tshirt;