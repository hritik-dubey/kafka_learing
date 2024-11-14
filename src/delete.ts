import { Kafka } from 'kafkajs'

const kafka = new Kafka({
    // clientId: 'my-app',
    brokers: ['localhost:9092']
})

const admin = kafka.admin()

const run = async () => {
    // Deleting
    await admin.connect()
    let deleted = await admin.deleteTopics({ topics: ["start-events"]})
    console.log(deleted)
}

run().catch(console.error)