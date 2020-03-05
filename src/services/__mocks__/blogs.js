const blogs = [
  {
    'title': 'Great time coding javascript',
    'author': 'Lin',
    'url': 'localhost:3008',
    'likes': 13,
    'user': {
      'username': 'Lin',
      'id': '5e58deeb0dc269ce619d211c'
    },
    'id': '5e58df000dc269ce619d211d'
  },
  {
    'title': 'Hive helsinki is a new coding school',
    'author': 'Lin',
    'url': 'localhost:4200',
    'likes': 9,
    'user': {
      'username': 'Lin',
      'id': '5e58deeb0dc269ce619d211c'
    },
    'id': '5e58df2c0dc269ce619d211e'
  },
  {
    'title': 'Typescript is even better!',
    'author': 'Karen',
    'url': 'localhost:3007',
    'likes': 7,
    'user': {
      'username': 'Karen',
      'id': '5e58dee20dc269ce619d211b'
    },
    'id': '5e58df4b0dc269ce619d211f'
  },
  {
    'title': 'Global warming is getting real!!',
    'author': 'Karen',
    'url': 'localhost:3008',
    'likes': 7,
    'user': {
      'username': 'Karen',
      'id': '5e58dee20dc269ce619d211b'
    },
    'id': '5e58df740dc269ce619d2120'
  },
  {
    'title': 'Sunday fun day ;) ',
    'author': 'Demo',
    'url': 'https://bloglist-yan.herokuapp.com/',
    'likes': 15,
    'user': {
      'username': 'Demo',
      'id': '5e59017237aaeb071e3e12b8'
    },
    'id': '5e5905d833cfe10004e22c04'
  },
  {
    'title': 'A cat has nine lives.',
    'author': 'Demo',
    'url': 'localhost:4200',
    'likes': 5,
    'user': {
      'username': 'Demo',
      'id': '5e59017237aaeb071e3e12b8'
    },
    'id': '5e59079208e22412f76fa979'
  },
  {
    'title': 'An apple a day keeps the doctor away.',
    'author': 'Karen',
    'url': 'localhost:3008',
    'likes': 8,
    'user': {
      'username': 'Karen',
      'id': '5e58dee20dc269ce619d211b'
    },
    'id': '5e5907cd08e22412f76fa97a'
  }
]

const setToken = () => console.log('token')

const getAll = () => {
  return Promise.resolve(blogs)
}

export default { getAll, setToken }