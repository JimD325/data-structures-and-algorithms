const {leftJoin} = require('./leftJoin')
const leftMap = new Map ([
  ['diligent', 'employed'],
  ['fond', 'enamored'],
  ['guide', 'usher'],
  ['outfit', 'garb'],
  ['wrath', 'anger']
])

const rightMap = new Map ([
  ['diligent', 'idle'],
  ['fond', 'averse'],
  ['guide', 'follow'],
  ['flow', 'jam'],
  ['wrath', 'delight']
]); 

describe('left join', () => {
  it('successfully joins to tables following left join logic', () => {
    expect(leftJoin(leftMap, rightMap)).toEqual([
      [ 'diligent', 'employed', 'idle' ],
      [ 'fond', 'enamored', 'averse' ],
      [ 'guide', 'usher', 'follow' ],
      [ 'outfit', 'garb', null ],
      [ 'wrath', 'anger', 'delight' ]
    ])
  })
})