import { render, screen } from '@testing-library/react'
import Header from '../Header'

jest.mock('@/utils/supabase', () => ({
  supabase: {
    auth: {
      onAuthStateChange: () => ({
        data: {
          subscription: {
            unsubscribe: jest.fn(),
          },
        },
      }),
    },
  },
}))

describe('Header', () => {
  it('renders the brand name', () => {
    render(<Header />)
    expect(screen.getByText('BrandElevate')).toBeInTheDocument()
  })

  it('renders sign in and sign up links when not authenticated', () => {
    render(<Header />)
    expect(screen.getByText('Sign In')).toBeInTheDocument()
    expect(screen.getByText('Sign Up')).toBeInTheDocument()
  })
}) 