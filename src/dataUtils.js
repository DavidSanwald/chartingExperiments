import * as R from 'ramda'
import dream from 'dreamjs'

const peek = R.tap(x => console.log(x))

const randomWalk = (n, p = 0.5) => {
  const walk = []
  let position = 0
  for (let i = 0; i < n; i++) {
    position += Math.random() < p ? 1 : -1
    walk.push({ value: position })
  }
  return walk
}

const randomDays = n => {
  console.log(Date)
  return Array(n)
    .fill(1)
    .map((d, i) => {
      return { date: Date.now() - i * 3600000 }
    })
}

const createDatum = (date, value) => {
  return { date, value }
}

const createTimeSeries = (n, chance = 0.5) => {
  const dates = randomDays(n)
  const randomValues = randomWalk(n, chance)
  return peek(R.zipWith(createDatum, dates, randomValues))
}

const employeesGen = dream.customType('nEmployees', function(helper) {
  return helper.chance.integer({ min: 80, max: 3000 })
})

const patentsGren = dream.customType('nPatents', function(helper) {
  return helper.chance.integer({ min: 20, max: 1200 })
})

const industryGen = dream.customType('industry', function(helper) {
  const industries = ['Chemical', 'Technology', 'Automotive', 'Financial']
  return helper.oneOf(industries)
})

const company = dream.schema({
  association: 'company',
  nEmployees: 'nEmployees',
  nPatents: 'nPatents',
  industry: 'industry',
  stock: () => createTimeSeries(365)
})

export { createTimeSeries, company }
