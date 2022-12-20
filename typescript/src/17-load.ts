import _ from 'lodash'

const data = [
  {
    username: 'justin',
    role: 'dev'
  },
  {
    username: 'aneudy',
    role: 'manager'
  },
  {
    username: 'gaby',
    role: 'payment'
  },
  {
    username: 'arturo',
    role: 'imp'
  }
];

const rta = _.groupBy(data, (item) => item.role)
console.log(rta)
