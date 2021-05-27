const [userName] = process.argv.slice(2)

runDatabase()

async function runDatabase() {
  const mongodb = require('mongodb')
  const client = await mongodb
    .connect('mongodb://localhost', {
      useUnifiedTopology: true,
    })
    .catch(error => {
      console.error(error)
      process.exit(1)
    })

  const db = client.db('lean-coffee-board')

  const response = await db
    .collection('users')
    .deleteOne({ name: userName })
    .catch(error => {
      console.error(error)
      client.close()
      process.exit(1)
    })

  console.log(
    `SUCCESS: deleted ${userName}, with ObjectId "${response.deletedCount}"`
  )

  client.close()
}
