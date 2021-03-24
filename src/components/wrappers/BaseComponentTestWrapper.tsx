import React, { ReactNode } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import { getStore } from '@/store'
import Internalization from '@/components/wrappers/Internalization'
import ThemeProviderWrapper from '@/components/wrappers/ThemeProvider'
import { childrenPropType } from '@/prop-types'

interface IProps {
  children?: ReactNode,
  props?: any
}

const BaseComponentTestWrapper: React.FC<IProps> = ({ children }) => (
  <Provider store={getStore()}>
    <Internalization>
      <ThemeProviderWrapper>
        <Router>
          {children}
        </Router>
      </ThemeProviderWrapper>
    </Internalization>
  </Provider>
)

BaseComponentTestWrapper.propTypes = {
  children: childrenPropType,
}

export default BaseComponentTestWrapper