export default async function handler(req, res) {
    if (req.method === 'POST') {
        return await createInquiry(req, res);
    }
    else {
        return res.status(405).json({ message: 'Method not allowed', success: false });
    }
}

async function createInquiry(req, res) {
    const body = req.body;
    const discordWebook = process.env.DISCORD_WEBHOOK
    try {
        const response = await fetch(discordWebook, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          });
        return res.status(200).json({success: true});
    } catch (error) {
        console.error("Request error", error);
        res.status(500).json({ error: "Error creating question", success:false });
    }
}