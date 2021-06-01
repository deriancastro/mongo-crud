import { render, screen } from '@testing-library/react'
import CardApp from './CardApp'

describe('CardApp', () => {
  it('contains a text', async () => {
    render(<CardApp>Hallo</CardApp>)
    expect(screen.getByRole('card' /*, { name: 'Hallo' }*/)).toBeInTheDocument()
    //expect(container.firstChild).toHaveTextContent('Hallo')
  })
})
