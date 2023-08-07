import {MongoClient} from 'mongodb'
export const useMongo = async () => {
    const connectionString = import.meta.env.VITE_MONGODB_CONN_STRING
    console.log(import.meta.env)
    const client = new MongoClient(connectionString)

    const connect = await client.connect();

    return {
        connection: connect
    }
}
