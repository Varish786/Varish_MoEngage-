import { connect } from 'mongoose'

const ConnectDb = async () => {

    try {
        const db = await connect(process.env.DB_URL)
        // const db=await connect('mongodb://0.0.0.0:27017/webApp')
        console.log("connect DB")
    } catch (err) {
        console.log(`error ${err.message}`)
    }
}

ConnectDb()


