import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FormulaCard from '../FormulaCard.vue'
import KatexElementVue from '../KatexElement.vue'

const mockFilteredValues = [
  {
    title: 'Sum of the first n integers',
    formula: '1 \\ + \\ 2 \\ + \\ ... \\ + \\ n = \\frac{n (n + 1)}{2}'
  },
  {
    title: 'Sum of powers of r',
    formula: '1 + r + r^2 + ... + r^n = \\frac{r^{n + 1} - 1}{r - 1}'
  }
]

describe('FormulaCard', () => {
  it('renders properly', () => {
    const wrapper = mount(FormulaCard, { props: { filteredValues: mockFilteredValues } })

    expect(wrapper.exists())
  })

  it('shows titles', () => {
    const wrapper = mount(FormulaCard, { props: { filteredValues: mockFilteredValues } })

    expect(wrapper.text()).toContain(mockFilteredValues[0].title)
    expect(wrapper.text()).toContain(mockFilteredValues[1].title) 
  })

  it('renders KatexElement', () => {
    const wrapper = mount(FormulaCard, { props: { filteredValues: mockFilteredValues } })
    const katexElement = wrapper.getComponent(KatexElementVue)

    expect(katexElement).toBeDefined()
  })
})
