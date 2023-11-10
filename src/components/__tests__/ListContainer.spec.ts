import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ListContainer from '../ListContainer.vue'

describe('ListContainer', () => {
  it('renders properly', () => {
    const wrapper = mount(ListContainer)

    expect(wrapper.exists())
  })

  it('shows list of subjects', () => {
    const wrapper = mount(ListContainer)
    const subjects = wrapper.findAll('[data-test="subjects"]')

    expect(subjects).toHaveLength(6)
  })

  it('adds active class to button on click', async () => {
    const wrapper = mount(ListContainer)
    const firstBtn = wrapper.find('[data-test="subject-btn"]')
    await firstBtn.trigger('click')

    expect(firstBtn.classes()).toContain('isActive')
  })

  it('shows all formulas on first mount', () => {
    const wrapper = mount(ListContainer)
    const formulas = wrapper.findAll('[data-test="formulas"]')

    expect(formulas).toHaveLength(33)
  })

  it('shows logic formulas on click', async () => {
    const wrapper = mount(ListContainer)
    const btns = wrapper.findAll('[data-test="subject-btn"]')

    await btns[1].trigger('click')

    const formulas = wrapper.findAll('[data-test="formulas"]')

    expect(formulas).toHaveLength(8)
  })

  it('shows sums formulas on click', async () => {
    const wrapper = mount(ListContainer)
    const btns = wrapper.findAll('[data-test="subject-btn"]')

    await btns[2].trigger('click')

    const formulas = wrapper.findAll('[data-test="formulas"]')

    expect(formulas).toHaveLength(2)
  })

  it('shows counting and probability formulas on click', async () => {
    const wrapper = mount(ListContainer)
    const btns = wrapper.findAll('[data-test="subject-btn"]')

    await btns[3].trigger('click')

    const formulas = wrapper.findAll('[data-test="formulas"]')

    expect(formulas).toHaveLength(10)
  })

  it('shows laws of exponents formulas on click', async () => {
    const wrapper = mount(ListContainer)
    const btns = wrapper.findAll('[data-test="subject-btn"]')

    await btns[4].trigger('click')

    const formulas = wrapper.findAll('[data-test="formulas"]')

    expect(formulas).toHaveLength(7)
  })

  it('shows properties of logarithms formulas on click', async () => {
    const wrapper = mount(ListContainer)
    const btns = wrapper.findAll('[data-test="subject-btn"]')

    await btns[5].trigger('click')

    const formulas = wrapper.findAll('[data-test="formulas"]')

    expect(formulas).toHaveLength(6)
  })
})
