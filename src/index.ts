import { ApolloServer } from 'apollo-server'
import { schema } from './graphql/schema'
import { initData } from './db/initData'

initData()

const server = new ApolloServer({ schema })

const PORT = process.env.PORT || 5000;

(async function () {
    const serverPrimise = await server.listen({ port: PORT,  })
    console.log(`Server running on ${serverPrimise.url}`)
})()
