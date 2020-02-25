import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'

describe('Blog', () => {
  let component

  beforeEach(() => {
    const user = {
      username: 'Lin',
      token: 'sometoken'
    }
    const blog = {
      title: 'Today is Thursday!!',
      url: 'localhost:3006',
      author: 'Lin',
      likes: 657
    }
    component = render(
      <Blog blog= {blog} user={user}/>
    )
  })


  test('render only title and author',  () => {
    const element = component.container.querySelector('.togglebox')
    expect(element).toHaveStyle('display: none')
    expect(component.container).toHaveTextContent('Lin')
    expect(component.container).toHaveTextContent('Today is Thursday!!')
  })

  test('render url while button clicked', () => {
    const button = component.container.querySelector('.title')
    fireEvent.click(button)
    expect(component.container).toHaveTextContent('Lin')
    expect(component.container).toHaveTextContent('Today is Thursday!!')
    expect(component.container).toHaveTextContent('localhost:3006')
    expect(component.container).toHaveTextContent('657')
  })
})