import { Kafka } from 'kafkajs'

const kafka = new Kafka({
    // clientId: 'my-app',
    brokers: ['localhost:9092']
})

const producer = kafka.producer()

const run = async () => {
    // Producing 
    await producer.connect()
    let count = 1
    async function sendMessage() {
        await producer.send({
            topic: 'payment-done',
            messages: [
                { value: `Hello KafkaJS user! from nodejs again without the clientId ${count++}` },
            ],
        })
    }
    setInterval(sendMessage,200)

}

run().catch(console.error)