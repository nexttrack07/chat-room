import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from 'components/app/store'
import App from 'components/app'
import 'index.css'
import 'semantic-ui-css/semantic.min.css'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
