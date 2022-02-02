import { spacing } from '@styles';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

type Props = {
  data: any[];
};

const ProductList: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data && data.length > 0 ? (
        <StyledList>
          {data.map((p) => (
            <Link
              href={'/?product=' + p.id.toString()}
              as={'/' + p.id.toString()}
              passHref
              scroll={false}
              key={p.id}>
              <StyledCard>
                <ImageWrapper>
                  <Image src={p.image} alt="" layout="fill" />
                </ImageWrapper>
                <div className="title">
                  <span>{p.title}</span> {p.price} EUR
                </div>
              </StyledCard>
            </Link>
          ))}
        </StyledList>
      ) : (
        <p>No products</p>
      )}
    </>
  );
};

export default ProductList;

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: ${spacing.lg};
  width: 100%;
  max-width: 1200px;
`;
const StyledCard = styled.li`
  position: relative;
  height: 400px;
  max-height: 400px;

  img {
    max-width: 100%;
    object-fit: cover;
    transition: 0.8s;
  }

  div.title {
    padding: 1.2rem 0;
    height: 50px;
    display: flex;
    align-items: center;

    span {
      max-width: 60%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-right: auto;
    }
  }

  &:hover {
    cursor: pointer;

    img {
      transform: scale(1.1);
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  max-width: 100%;
  height: 350px;
`;
