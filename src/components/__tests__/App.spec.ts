import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../../App.vue'
import GitHubIconVue from '../icons/GitHubIcon.vue'
import MailIconVue from '../icons/MailIcon.vue'
import SiteLinkIconVue from '../icons/SiteLinkIcon.vue'

// See https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
// Vitest is similar
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

describe('App', () => {
  it('renders properly', () => {
    const wrapper = mount(App)

    expect(wrapper.exists())
  })

  it('shows title', () => {
    const wrapper = mount(App)
    const titleDiv = wrapper.get('[data-test="title"]')

    expect(titleDiv.text()).toContain('Reference Formulas')
  })

  it('shows year in footer', () => {
    const year = new Date().getFullYear()
    const wrapper = mount(App)
    const footerPrimary = wrapper.get('[data-test="footer-primary"]')

    expect(footerPrimary.text()).toContain(year)
  })

  it('shows icons in footer', () => {
    const wrapper = mount(App)
    const github = wrapper.getComponent(GitHubIconVue)
    const mail = wrapper.getComponent(MailIconVue)
    const siteLink = wrapper.getComponent(SiteLinkIconVue)

    expect(github.isVisible())
    expect(mail.isVisible())
    expect(siteLink.isVisible())
  })

})
