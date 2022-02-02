import Layout from '@components/Layout';
import ProductsList from '@components/ProductsList';
import type { NextPage } from 'next';
import products from '../dummies/products.json';
import { useRouter } from 'next/router';
import ProductView from '@components/ProductView';
import Modal from '@components/Modal';

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <Layout>
      <h1>Hello</h1>
      {products && <ProductsList data={products} />}

      <Modal
        isOpen={!!router.query.product}
        closeModal={() => router.push('/', undefined, { scroll: false })}>
        <ProductView product={router.query.product as string} />
      </Modal>
    </Layout>
  );
};

export default Home;
