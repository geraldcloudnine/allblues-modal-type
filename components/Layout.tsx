import { breakpoint, spacing } from '@styles';
import styled from 'styled-components';

const Layout: React.FC = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;

const StyledLayout = styled.main`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: ${spacing.sm};
  align-items: center;

  @media ${breakpoint.md} {
    padding: ${spacing.lg};
  }
`;
