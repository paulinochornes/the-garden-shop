import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import product1History from '../data/priceHistory_product1.json';
import product2History from '../data/priceHistory_product2.json';
import product3History from '../data/priceHistory_product3.json';

const productData = [
  { name: 'Ficus Lyrata', data: product1History },
  { name: 'Suculenta Mixta', data: product2History },
  { name: 'Helecho Boston', data: product3History }
];

export default function FeaturedProducts() {
  return (
    <section className="featured-prices-section">
      <div className="space-y-12">
        {productData.map((product, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">{product.name}</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={product.data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="fecha" tick={{ fontSize: 12 }} />
                <YAxis domain={['dataMin - 5', 'dataMax + 5']} />
                <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
                <Line type="monotone" dataKey="precio" stroke="#82ca9d" strokeWidth={2} dot={{ r: 3 }} name="Precio ($)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>
    </section>
  );
}