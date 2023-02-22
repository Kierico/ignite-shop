import { stripe } from "@/src/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const { priceId } = req.body;

    /* Se não estiver sendo chamado pelo método POST */
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed.' })
    }

    if (!priceId) {
        return res.status(400).json({ error: 'Price not fond.' })
    }

    const success_url = `${process.env.NEXT_URL}/success`
    const cancel_url = `${process.env.NEXT_URL}/`

    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: success_url, // url para direcionar o cliente depois da compra.
        cancel_url: cancel_url, // url para direcionar o cliente depois de cancelar a compra.
        mode: 'payment',
        line_items: [
            {
                price: priceId,
                quantity: 1,
            }
        ],
    })

    return res.status(201).json({
        checkoutUrl: checkoutSession.url,
    })
}