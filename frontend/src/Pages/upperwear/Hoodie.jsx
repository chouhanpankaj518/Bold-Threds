import React, { useState } from 'react';
import { Star, ShoppingCart } from 'lucide-react';

const Hoodie = () => {
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
  "https://media.istockphoto.com/id/136798742/photo/brown-hooded-sweatshirt-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=raLNelpQPvwLodrK6Xs4_ucUHuTcfZkU3jljmEKEKkw=",
  "https://media.istockphoto.com/id/1301395883/photo/brown-sweatshirt-hanging-on-a-hanger.webp?a=1&b=1&s=612x612&w=0&k=20&c=TQo_v8cYaGVmRI_ahNiKGfAcI82R1-H2p_kcaOyiTjQ=",
  "https://media.istockphoto.com/id/136798742/photo/brown-hooded-sweatshirt-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=raLNelpQPvwLodrK6Xs4_ucUHuTcfZkU3jljmEKEKkw=",
  "https://media.istockphoto.com/id/1301395883/photo/brown-sweatshirt-hanging-on-a-hanger.webp?a=1&b=1&s=612x612&w=0&k=20&c=TQo_v8cYaGVmRI_ahNiKGfAcI82R1-H2p_kcaOyiTjQ="
  ];

  const handleAddToCart = () => {
    alert(`Added ${quantity} hoodie(s) in size ${selectedSize} to cart!`);
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img src={images[selectedImage]} alt={`Comfortable Hoodie View ${selectedImage + 1}`} className="w-full h-auto rounded-lg shadow-lg mb-4" />
          <div className="flex justify-center gap-4">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Hoodie Thumbnail ${index + 1}`}
                className={`w-20 h-20 object-cover rounded cursor-pointer ${selectedImage === index ? 'border-2 border-blue-500' : ''}`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">Comfortable Hoodie</h1>
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="ml-2 text-gray-600">(42 reviews)</span>
          </div>
          <p className="text-2xl font-semibold mb-4">$59.99</p>
          <p className="text-gray-600 mb-6">
            Stay cozy and stylish with our comfortable hoodie. Made from soft, durable fabric that's perfect for any casual occasion.
          </p>
          <div className="mb-6">
            <label htmlFor="size-select" className="block text-sm font-medium text-gray-700 mb-2">
              Size
            </label>
            <select
              id="size-select"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select a size</option>
              <option value="s">Small</option>
              <option value="m">Medium</option>
              <option value="l">Large</option>
              <option value="xl">X-Large</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-20 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button 
            onClick={handleAddToCart} 
            className="w-full flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hoodie;