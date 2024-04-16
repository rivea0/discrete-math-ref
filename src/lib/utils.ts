export const formulas = {
  logic: [
    { title: "De Morgan's Law (#1)", formula: '\\neg (p \\land q) \\equiv \\neg p \\lor \\neg q' },
    { title: "De Morgan's Law (#2)", formula: '\\neg (p \\lor q) \\equiv \\neg p \\land \\neg q' },
    { title: 'Negation of implies', formula: '\\neg (p \\implies q) \\equiv p \\land \\neg q' },
    {
      title: 'Equivalence of a conditional and its contrapositive',
      formula: 'p \\implies q \\equiv \\neg q \\implies \\neg p'
    },
    {
      title: 'Nonequivalence of a conditional and its converse',
      formula: 'p \\implies q \\not\\equiv q \\implies p'
    },
    {
      title: 'Nonequivalence of a conditional and its inverse',
      formula: 'p \\implies q \\not\\equiv \\neg p \\implies \\neg q'
    },
    {
      title: 'Negation of a universal statement',
      formula:
        '\\neg (\\forall x \\text{ in } D, \\ Q(x)) \\equiv \\exists x \\text{ in } D \\text{ such that } \\neg Q(x)'
    },
    {
      title: 'Negation of an existential statement',
      formula:
        '\\neg (\\exists x \\text{ in } D \\text{ such that } Q(x)) \\equiv \\forall x \\text{ in } D, \\ \\neg Q(x)'
    }
  ],
  sums: [
    {
      title: 'Sum of the first n integers',
      formula: '1 \\ + \\ 2 \\ + \\ ... \\ + \\ n = \\frac{n (n + 1)}{2}'
    },
    {
      title: 'Sum of powers of r',
      formula: '1 + r + r^2 + ... + r^n = \\frac{r^{n + 1} - 1}{r - 1}'
    }
  ],
  countingAndProbability: [
    {
      title: 'Probability in the equally likely case',
      formula: 'P(E) = \\frac{N(E)}{N(S)}'
    },
    {
      title: 'Number of r-permutations of a set with n elements',
      formula: 'P(n, \\ r) = \\frac{n!}{(n - r)!}'
    },
    {
      title: 'Number of elements in a union',
      formula: 'N(A \\cup B) = N(A) + N(B) - N(A \\cap B)'
    },
    {
      title: 'Number of subsets of size r of a set with n elements',
      formula: '\\binom{n}{r} = \\frac{n!}{r! (n - r)!}'
    },
    {
      title: "Pascal's formula",
      formula: '\\binom{n + 1}{r} = \\binom{n}{r - 1} + \\binom{n}{r}'
    },
    {
      title: 'Binomial theorem',
      formula: '(a + b)^n = \\sum_{k = 0}^n \\binom{n}{k} a^{n - k}b^k'
    },
    {
      title: 'Probability of a complement of an event',
      formula: 'P(A^c) = 1 - P(A)'
    },
    {
      title: 'Probability of a union',
      formula: 'P(A \\cup B) = P(A) + P(B) - P(A \\cap B)'
    },
    {
      title: 'Conditional probability',
      formula: 'P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}'
    },
    {
      title: "Bayes' theorem",
      formula:
        'P(A \\mid B) = \\frac{P(B \\mid A)P(A)}{P(B)}'
    }
  ],
  lawsOfExponents: [
    {
      title: 'Exponents (#1)',
      formula: 'b^0 = 1'
    },
    {
      title: 'Exponents (#2)',
      formula: 'b^{-x} = \\frac{1}{b^x}'
    },
    {
      title: 'Exponents (#3)',
      formula: 'b^u \\cdot b^v = b^{u + v}'
    },
    {
      title: 'Exponents (#4)',
      formula: '\\frac{b^u}{b^v} = b^{u - v}'
    },
    {
      title: 'Exponents (#5)',
      formula: '(b^u)^v = b^{u \\cdot v}'
    },
    {
      title: 'Exponents (#6)',
      formula: '(bc)^u = b^u \\cdot c^u'
    },
    {
      title: 'Exponents (#7)',
      formula: 'b^u = b^v \\implies u = v'
    }
  ],
  propertiesOfLogarithms: [
    {
      title: 'Logarithms (#1)',
      formula: '\\text{log}_bx = y \\iff b^y = x'
    },
    {
      title: 'Logarithms (#2)',
      formula: '\\text{log}_b(xy) = \\text{log}_b(x) + \\text{log}_b(y)'
    },
    {
      title: 'Logarithms (#3)',
      formula: '\\text{log}_b(x^a) = a \\ \\text{log}_b(x)'
    },
    {
      title: 'Logarithms (#4)',
      formula: '\\text{log}_b\\bigg(\\frac{x}{y}\\bigg) = \\text{log}_b(x) - \\text{log}_b(y)'
    },
    {
      title: 'Logarithms (#5)',
      formula: '\\text{log}_c(x) = \\frac{\\text{log}_b(x)}{\\text{log}_b(c)}'
    },
    {
      title: 'Logarithms (#6)',
      formula: '\\text{log}_b(u) = \\text{log}_b(v) \\implies u = v'
    }
  ]
}

// https://stackoverflow.com/a/2970667
function camelize(str: string) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase()
    })
    .replace(/\s+/g, '')
}

export function convertToKey(s: string) {
  if (s.includes('&')) {
    s = s.replace(/&/g, 'And')
  }
  return camelize(s)
}
