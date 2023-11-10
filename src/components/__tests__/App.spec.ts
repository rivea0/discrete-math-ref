import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../../App.vue'
import GitHubIconVue from '../icons/GitHubIcon.vue'
import MailIconVue from '../icons/MailIcon.vue'
import SiteLinkIconVue from '../icons/SiteLinkIcon.vue'


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
