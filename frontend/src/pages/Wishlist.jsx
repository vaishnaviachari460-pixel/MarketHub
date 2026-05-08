import React from 'react';
import { useWishlist } from '@/context/WishlistContext';
import ProductCard from '@/components/ProductCard';

export default function Wishlist() {
  const { wishlist } = useWishlist();

  if (wishlist.length === 0) {
    return <div className="text-center mt-20">No wishlist items</div>;
  }

  return (
    <div className="p-6 grid grid-cols-2 md:grid-cols-3 gap-6">
      {wishlist.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}