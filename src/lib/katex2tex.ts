/*
Original code from https://github.com/KaTeX/KaTeX/blob/main/contrib/copy-tex/katex2tex.js

It is modified so as not to mutate the fragment element, uses a copy instead.
*/

// Set these to how you want inline and display math to be delimited.
export const defaultCopyDelimiters = {
  inline: ['$', '$'], // alternative: ['\(', '\)']
  display: ['$$', '$$'] // alternative: ['\[', '\]']
}

// Replace .katex elements with their TeX source (<annotation> element).
// Modifies fragment in-place.  Useful for writing your own 'copy' handler,
// as in copy-tex.js.
export function katexReplaceWithTex(
  fragment: Element | null,
  copyDelimiters = defaultCopyDelimiters
) {
  if (fragment) {
    const fragCopy = document.createElement('p')
    fragCopy.innerHTML = fragment.innerHTML
    // Remove .katex-html blocks that are preceded by .katex-mathml blocks
    // (which will get replaced below).
    const katexHtml = fragCopy.querySelectorAll('.katex-mathml + .katex-html')
    for (let i = 0; i < katexHtml.length; i++) {
      const element = katexHtml[i]
      if (element.remove) {
        element.remove()
      } else if (element.parentNode) {
        element.parentNode.removeChild(element)
      }
    }
    // Replace .katex-mathml elements with their annotation (TeX source)
    // descendant, with inline delimiters.
    const katexMathml = fragCopy.querySelectorAll('.katex-mathml')
    for (let i = 0; i < katexMathml.length; i++) {
      const element = katexMathml[i]
      const texSource = element.querySelector('annotation')
      if (texSource) {
        if (element.replaceWith) {
          element.replaceWith(texSource)
        } else if (element.parentNode) {
          element.parentNode.replaceChild(texSource, element)
        }
        texSource.innerHTML =
          copyDelimiters.inline[0] + texSource.innerHTML + copyDelimiters.inline[1]
      }
    }
    // Switch display math to display delimiters.
    const displays = fragCopy.querySelectorAll('.katex-display annotation')
    for (let i = 0; i < displays.length; i++) {
      const element = displays[i]
      element.innerHTML =
        copyDelimiters.display[0] +
        element.innerHTML.substr(
          copyDelimiters.inline[0].length,
          element.innerHTML.length -
            copyDelimiters.inline[0].length -
            copyDelimiters.inline[1].length
        ) +
        copyDelimiters.display[1]
    }
    return fragCopy
  }
}
