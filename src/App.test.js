import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'

import App  from './App'

test('full app rendering/navigating', () => {
  const history = createMemoryHistory()
  history.push('/')
  render(
    <Router history={history}>
      <App />
    </Router>
  )
  expect(screen.getByText("A Picture is a poem without words.")).toBeInTheDocument()
})

test('landing on not found page', () => {
  const history = createMemoryHistory()
  history.push('/not_found')
  render(
    <Router history={history}>
      <App />
    </Router>
  )

  expect(screen.getByText(`Picture Not Available ;(`)).toBeInTheDocument()
})

test('landing on 404 page', () => {
  const history = createMemoryHistory()
  history.push('/errpage')
  render(
    <Router history={history}>
      <App />
    </Router>
  )
  const err = screen.getByTestId('err404');
    expect(err).toHaveAttribute('src', 'monster404.png');
    expect(err).toHaveAttribute('alt', '404 Not Found');
})
