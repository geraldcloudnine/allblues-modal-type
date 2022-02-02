import { createGlobalStyle } from 'styled-components';
import { cssReset } from './cssReset';
import { font } from './font';
import { fontFaces } from './fontFaces';
import { spacing } from './spacing';

export const GlobalStyle = createGlobalStyle`
  ${fontFaces}
  ${cssReset}

  body {
    font-family: ${font.family.primary};
  }
`;
