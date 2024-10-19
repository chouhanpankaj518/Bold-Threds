import React, { useState } from 'react';
import { Sliders, ChevronDown } from 'lucide-react';

const jeansData = [
  { id: 1, name: 'Slim Fit Blue Jeans', price: 49.99,
     image: 'https://media.istockphoto.com/id/962293684/photo/jeans-on-a-background.jpg?s=612x612&w=0&k=20&c=h8BXvaFp8HQo3WpfzWZoyrbqlzTOY137Dy-zBUTS0u4=', 
     style: 'slim', color: 'blue' },
  { id: 2, name: 'Relaxed Fit Black Jeans', price: 54.99, 
    image: 'https://media.istockphoto.com/id/962293684/photo/jeans-on-a-background.jpg?s=612x612&w=0&k=20&c=h8BXvaFp8HQo3WpfzWZoyrbqlzTOY137Dy-zBUTS0u4=', 
    style: 'relaxed', color: 'black' },
  { id: 3, name: 'Skinny Fit Light Wash Jeans', price: 59.99, 
    image: 'https://media.istockphoto.com/id/962293684/photo/jeans-on-a-background.jpg?s=612x612&w=0&k=20&c=h8BXvaFp8HQo3WpfzWZoyrbqlzTOY137Dy-zBUTS0u4=', 
    style: 'skinny', color: 'light blue' },
  { id: 4, name: 'Straight Fit Dark Wash Jeans', price: 52.99, 
    image: 'https://media.istockphoto.com/id/962293684/photo/jeans-on-a-background.jpg?s=612x612&w=0&k=20&c=h8BXvaFp8HQo3WpfzWZoyrbqlzTOY137Dy-zBUTS0u4=', 
    style: 'straight', color: 'dark blue' },
  { id: 5, name: 'Boot Cut Medium Wash Jeans', price: 56.99,
     image: 'https://media.istockphoto.com/id/962293684/photo/jeans-on-a-background.jpg?s=612x612&w=0&k=20&c=h8BXvaFp8HQo3WpfzWZoyrbqlzTOY137Dy-zBUTS0u4=',
      style: 'boot cut', color: 'medium blue' },
  { id: 6, name: 'Tapered Fit Gray Jeans', price: 58.99, 
    image: 'https://media.istockphoto.com/id/962293684/photo/jeans-on-a-background.jpg?s=612x612&w=0&k=20&c=h8BXvaFp8HQo3WpfzWZoyrbqlzTOY137Dy-zBUTS0u4=', 
    style: 'tapered', color: 'gray' },
    { id: 7, name: 'Slim Fit Blue Jeans', price: 49.99,
      image: 'https://media.istockphoto.com/id/962293684/photo/jeans-on-a-background.jpg?s=612x612&w=0&k=20&c=h8BXvaFp8HQo3WpfzWZoyrbqlzTOY137Dy-zBUTS0u4=', 
      style: 'slim', color: 'blue' },
   { id: 8, name: 'Relaxed Fit Black Jeans', price: 54.99, 
     image: 'https://media.istockphoto.com/id/962293684/photo/jeans-on-a-background.jpg?s=612x612&w=0&k=20&c=h8BXvaFp8HQo3WpfzWZoyrbqlzTOY137Dy-zBUTS0u4=', 
     style: 'relaxed', color: 'black' },
   { id: 9, name: 'Skinny Fit Light Wash Jeans', price: 59.99, 
     image: 'https://media.istockphoto.com/id/962293684/photo/jeans-on-a-background.jpg?s=612x612&w=0&k=20&c=h8BXvaFp8HQo3WpfzWZoyrbqlzTOY137Dy-zBUTS0u4=', 
     style: 'skinny', color: 'light blue' },
   { id: 10, name: 'Straight Fit Dark Wash Jeans', price: 52.99, 
     image: 'https://media.istockphoto.com/id/962293684/photo/jeans-on-a-background.jpg?s=612x612&w=0&k=20&c=h8BXvaFp8HQo3WpfzWZoyrbqlzTOY137Dy-zBUTS0u4=', 
     style: 'straight', color: 'dark blue' },
   { id: 11, name: 'Boot Cut Medium Wash Jeans', price: 56.99,
      image: 'https://media.istockphoto.com/id/962293684/photo/jeans-on-a-background.jpg?s=612x612&w=0&k=20&c=h8BXvaFp8HQo3WpfzWZoyrbqlzTOY137Dy-zBUTS0u4=',
       style: 'boot cut', color: 'medium blue' },
   { id: 12, name: 'Tapered Fit Gray Jeans', price: 58.99, 
     image: 'https://media.istockphoto.com/id/962293684/photo/jeans-on-a-background.jpg?s=612x612&w=0&k=20&c=h8BXvaFp8HQo3WpfzWZoyrbqlzTOY137Dy-zBUTS0u4=', 
     style: 'tapered', color: 'gray' },
     { id: 13, name: 'Slim Fit Blue Jeans', price: 49.99,
      image: 'https://media.istockphoto.com/id/962293684/photo/jeans-on-a-background.jpg?s=612x612&w=0&k=20&c=h8BXvaFp8HQo3WpfzWZoyrbqlzTOY137Dy-zBUTS0u4=', 
      style: 'slim', color: 'blue' },
   { id: 14, name: 'Relaxed Fit Black Jeans', price: 54.99, 
     image: 'https://media.istockphoto.com/id/962293684/photo/jeans-on-a-background.jpg?s=612x612&w=0&k=20&c=h8BXvaFp8HQo3WpfzWZoyrbqlzTOY137Dy-zBUTS0u4=', 
     style: 'relaxed', color: 'black' },
   { id: 15, name: 'Skinny Fit Light Wash Jeans', price: 59.99, 
     image: 'https://media.istockphoto.com/id/962293684/photo/jeans-on-a-background.jpg?s=612x612&w=0&k=20&c=h8BXvaFp8HQo3WpfzWZoyrbqlzTOY137Dy-zBUTS0u4=', 
     style: 'skinny', color: 'light blue' },
   { id: 16, name: 'Straight Fit Dark Wash Jeans', price: 52.99, 
     image: 'https://media.istockphoto.com/id/962293684/photo/jeans-on-a-background.jpg?s=612x612&w=0&k=20&c=h8BXvaFp8HQo3WpfzWZoyrbqlzTOY137Dy-zBUTS0u4=', 
     style: 'straight', color: 'dark blue' },
   { id: 17, name: 'Boot Cut Medium Wash Jeans', price: 56.99,
      image: 'https://media.istockphoto.com/id/962293684/photo/jeans-on-a-background.jpg?s=612x612&w=0&k=20&c=h8BXvaFp8HQo3WpfzWZoyrbqlzTOY137Dy-zBUTS0u4=',
       style: 'boot cut', color: 'medium blue' },
   { id:18, name: 'Tapered Fit Gray Jeans', price: 58.99, 
     image: 'https://media.istockphoto.com/id/962293684/photo/jeans-on-a-background.jpg?s=612x612&w=0&k=20&c=h8BXvaFp8HQo3WpfzWZoyrbqlzTOY137Dy-zBUTS0u4=', 
     style: 'tapered', color: 'gray' },
     
];

export default function Bottomear() {
  const [jeans, setJeans] = useState(jeansData);
  const [sortBy, setSortBy] = useState('name');
  const [filterStyle, setFilterStyle] = useState('all');
  const [filterColor, setFilterColor] = useState('all');

  const sortJeans = (criteria) => {
    const sortedJeans = [...jeans].sort((a, b) => {
      if (criteria === 'price') {
        return a.price - b.price;
      } else {
        return a[criteria].localeCompare(b[criteria]);
      }
    });
    setJeans(sortedJeans);
    setSortBy(criteria);
  };

  const filterJeans = () => {
    let filteredJeans = jeansData;
    if (filterStyle !== 'all') {
      filteredJeans = filteredJeans.filter(jean => jean.style === filterStyle);
    }
    if (filterColor !== 'all') {
      filteredJeans = filteredJeans.filter(jean => jean.color === filterColor);
    }
    setJeans(filteredJeans);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Bottom Wear - Jeans</h1>

      <div className="flex flex-col md:flex-row justify-between mb-6">
        <div className="flex items-center mb-4 md:mb-0">
          <Sliders className="mr-2" />
          <span className="font-semibold">Filters:</span>
          <select
            className="ml-2 p-2 border rounded"
            value={filterStyle}
            onChange={(e) => {
              setFilterStyle(e.target.value);
              filterJeans();
            }}
          >
            <option value="all">All Styles</option>
            <option value="slim">Slim Fit</option>
            <option value="relaxed">Relaxed Fit</option>
            <option value="skinny">Skinny Fit</option>
            <option value="straight">Straight Fit</option>
            <option value="boot cut">Boot Cut</option>
            <option value="tapered">Tapered Fit</option>
          </select>
          <select
            className="ml-2 p-2 border rounded"
            value={filterColor}
            onChange={(e) => {
              setFilterColor(e.target.value);
              filterJeans();
            }}
          >
            <option value="all">All Colors</option>
            <option value="blue">Blue</option>
            <option value="black">Black</option>
            <option value="light blue">Light Blue</option>
            <option value="dark blue">Dark Blue</option>
            <option value="medium blue">Medium Blue</option>
            <option value="gray">Gray</option>
          </select>
        </div>
        <div className="flex items-center">
          <ChevronDown className="mr-2" />
          <span className="font-semibold">Sort by:</span>
          <select
            className="ml-2 p-2 border rounded"
            value={sortBy}
            onChange={(e) => sortJeans(e.target.value)}
          >
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jeans.map((jean) => (
          <div key={jean.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={jean.image} alt={jean.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{jean.name}</h3>
              <p className="text-gray-600 mb-4">${jean.price.toFixed(2)}</p>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}