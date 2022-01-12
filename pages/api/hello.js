// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '../../lib/prisma';

// export default function handler(req, res) {
  //   res.status(200).json({ name: 'John Doe' })
  // }

export default async function handler(req, res) {
    if (req.method === 'POST') {
        return await createInquiry(req, res);
    }
    else {
        return res.status(405).json({ message: 'Method not allowed' });
    }
}

async function createInquiry(req, res) {
    const body = req.body;
    try {
        const newEntry = await prisma.question.create({
            data: {
                text: body.text,
                name: body.name,
                twitterHandle: body.twitterHandle,
            }
        });
        return res.status(200).json(newEntry);
    } catch (error) {
        console.error("Request error", error);
        res.status(500).json({ error: "Error creating question" });
    }
}