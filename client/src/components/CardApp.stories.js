import react from 'react'
import CardApp from './CardApp'

export default {
  title: 'CardApp',
  component: CardApp,
}

const Template = args => <CardApp {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Hallo',
}
