import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import KatexElement from '../KatexElement.vue'

const mockItem = {
  title: "De Morgan's Law (#1)",
  formula: '\\neg (p \\land q) \\equiv \\neg p \\lor \\neg q'
}

// const exampleKatexValues = {
//   inp: 'b^0 = 1',
//   out: `
//     <span class="katex">
//       <span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>b</mi><mn>0</mn></msup><mo>=</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">b^0 = 1</annotation></semantics></math></span>
//       <span class="katex-html" aria-hidden="true">
//         <span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord mathnormal">b</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span>
//         <span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span>
//       </span>
//     </span>`
// }


describe('KatexElement', () => {
  it('renders properly', () => {
    const wrapper = mount(KatexElement, { props: { item: mockItem } })

    expect(wrapper.exists())
  })

  // TODO
  // it('shows katex html', () => {
  //   const wrapper = mount(KatexElement, { props: { item: mockItem } })
  //   const p = wrapper.get('[data-test="formula-text"]')
  // })
})
