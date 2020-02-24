import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import SimpleBlog from './SimpleBlog'

test('render content',  () => {
  const blog = {
    title: 'Today is Thursday!!',
    url: 'localhost:3006',
    author: 'Lin',
    likes: 657
  }
  const component = render(
    <SimpleBlog blog={blog}/>
  )
  expect(component.container).toHaveTextContent('Today is Thursday!!')
  expect(component.container).toHaveTextContent('Lin')
  expect(component.container).toHaveTextContent('657')

})

test('clicking the button twice', () =>  {
  const blog = {
    title: 'Today is Thursday!!',
    url: 'localhost:3006',
    author: 'Lin',
    likes: 657
  }
  const mockHandler = jest.fn()

  const { getByText } = render(
    <SimpleBlog blog={blog} onClick={mockHandler} />
  )
  const button = getByText('like')
  fireEvent.click(button)
  fireEvent.click(button)
  expect(mockHandler.mock.calls.length).toBe(2)

})
