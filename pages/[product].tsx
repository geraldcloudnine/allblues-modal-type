import Layout from '@components/Layout';
import ProductView from '@components/ProductView';
import { useRouter } from 'next/router';

export default function ProductPage({}) {
  const router = useRouter();
  const { product } = router.query;
  const p = product as string;
  return (
    <Layout>
      <h1>Product page</h1>
      <ProductView product={p} />
    </Layout>
  );
}
