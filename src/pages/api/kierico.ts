/** Arquivo ServerSide, as informações não serão mostradas ao usuário. */

import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    return res.json({ message: 'Kiérico Souza' })
}