import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, waitForElement } from '@testing-library/react'
jest.mock('./services/blogs')
import App from './App'

describe('<App />', () => {
  test('if no user logged, blogs are not rendered', async() => {
    const  component = render(
      <App />
    )
    component.rerender(<App />) //this is done to ensure that all of the effects are executed
    await waitForElement(
      () => component.getByText('login')
    )
    expect(component.container).toHaveTextContent('login')
    expect(component.container).not.toHaveTextContent('blogs')
  })
  test('shows blogs when logged in', async () => {
    const user = {
      username:'Demo',
      password:'Demo',
      token: 'token'
    }
    window.localStorage.setItem('loggedBlogUser', JSON.stringify(user)) 
    const component = render(<App />)
    component.rerender(<App />)
    await waitForElement(
      () => component.getByText('create new note')
    )
    expect(component.container).toHaveTextContent('Blogs')
    expect(component.container).toHaveTextContent('List')
    expect(component.container).toHaveTextContent('Great time coding javascript by Lin')
  })
})