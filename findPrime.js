process.on("message", (message) => {
    const jsonRes = isPrime(message.number);
    process.send(jsonRes)
    process.exit();
})

const isPrime = (number) => {
    const startTime = new Date();
    let endTime = new Date();
    let isPrime = true;
    
    for (let i = 3; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            endTime = new Date();
            break;
        }
    }

    if (isPrime) {
        endTime = new Date();
    }

    return {duration: endTime.getTime() - startTime.getTime(), isPrime, number};
}