import { useEffect, useState } from 'react';
import products from '../dummies/products.json';
type Props = {
  product: string;
};

const ProductView: React.FC<Props> = ({ product }) => {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    setProductData(products[parseInt(product) - 1]);
  }, [product]);

  return <div>{productData && productData.title}</div>;
};

export default ProductView;
