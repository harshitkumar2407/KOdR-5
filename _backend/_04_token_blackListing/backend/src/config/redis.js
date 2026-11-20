
// const Redis = require("ioredis");

// const cacheInstance = new Redis(process.env.REDIS_URL);


// cacheInstance.on("connect",()=>{
//     console.log("✅ Redis is connect successfully");
// })

// cacheInstance.on("error",(error)=>{
//     console.error("❌ Redis connection fails",error.message);
    
// })
// module.exports = cacheInstance



const Redis = require("ioredis");

const cacheInstance = new Redis(process.env.REDIS_URL, {
    retryStrategy(times) {
        const delay = Math.min(times * 500, 5000);

        console.log(`🔄 Redis reconnecting... Attempt ${times}`);

        return delay;
    },

    maxRetriesPerRequest: 3,

    connectTimeout: 10000,

    enableReadyCheck: true,
});

cacheInstance.on("connect", () => {
    console.log("🔌 Redis socket connected");
});

cacheInstance.on("ready", () => {
    console.log("✅ Redis is ready to accept commands");
});

cacheInstance.on("error", (error) => {
    console.error("❌ Redis error:", error.message);
});

cacheInstance.on("close", () => {
    console.log("⚠️ Redis connection closed");
});

cacheInstance.on("reconnecting", (delay) => {
    console.log(`🔄 Redis reconnecting in ${delay}ms`);
});

cacheInstance.on("end", () => {
    console.log("🛑 Redis connection ended");
});

cacheInstance.on("wait", () => {
    console.log("⏳ Redis waiting for connection");
});

module.exports = cacheInstance;
