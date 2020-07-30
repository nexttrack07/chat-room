import * as React from 'react'
import App from './index'
import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from './store'

describe('<App />', () => {
  it('renders successfully', () => {
    expect(store.getState().users.length).toEqual(0)
    const { container, getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    expect(container.querySelector('app-container')).toBeDefined()
    getByTestId('chat-log')
    getByTestId('message-box')
    expect(store.getState().users.length).toEqual(3)
  })

  it('chat works', () => {
    const { container, getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    fireEvent.change(container.querySelector('input'), {
      target: { value: 'Hello' },
    })
    fireEvent.click(getByText('SEND'))

    expect(container.querySelector('input').value).toEqual('')
    getByText('Hello')
  })
})
