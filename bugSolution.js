```javascript
// pages/product/[productId].js

import { Suspense } from 'react';

export default async function ProductPage({params}) {
  const productId = params.productId;

  const product = await fetch(`/api/products/${productId}`).then(res => res.json());

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}
```