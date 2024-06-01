import React from 'react'

import AppRouter from 'routes/Router'
import { ThemeProviderWrapper } from 'theme/context/ThemeProviderWrapper'

const App: React.FC = () => (
  <ThemeProviderWrapper>
    <AppRouter />
  </ThemeProviderWrapper>
)

export default App
