import { render, screen } from '@testing-library/react'
import { vi, it, expect } from 'vitest'
import { StopWatch } from './StopWatch'

it('increments minute and resets seconds after 60 seconds', () => {
  vi.useFakeTimers()

  render(<StopWatch />)

  expect(screen.getByText('0:0:0')).toBeInTheDocument()

  vi.advanceTimersByTime(60000)

  expect(screen.getByText('0:1:0')).toBeInTheDocument()
})