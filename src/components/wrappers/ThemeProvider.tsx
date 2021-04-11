import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '@/theme/GlobalStyle'
import { childrenPropType } from '@/prop-types'
import theme from '@/theme'

interface Iprops {
  children: ReactNode;
}

const ThemeProviderWrapper: React.FC<Iprops> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
)

ThemeProviderWrapper.propTypes = {
  children: childrenPropType,
}

export default ThemeProviderWrapper
