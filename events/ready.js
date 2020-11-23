module.exports = async(client) => {
    console.log(`[API] Connecté à ${client.user.username}`);
    await client.user.setActivity(`Pasta La Nigga`, {
        type: "PLAYING", //can be LISTENING, WATCHING, PLAYING, STREAMING
    });
};