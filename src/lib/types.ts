export type SimpleKatex = {
  renderToString: (expression: string, obj?: any) => void
}

export type WindowWithKatex = Window &
  typeof globalThis & {
    katex: { [k: string]: any; renderToString: () => void }
  }

export type FormulaItem = { title: string; formula: string }
