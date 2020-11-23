const { ShardingManager } = require("discord.js");
require("dotenv").config();

const shards = new ShardingManager("./index.js", {
    token: process.env.TOKEN, // If your token was inside .env, use process.env
    totalShards: "auto"
});

shards.on("shardCreate", shard => {
    console.log(`[${new Date().toString().split("2", 5).join("1")}] Launched shard #${shard.id}`);
});

shards.spawn(shards.totalShards, 1000);