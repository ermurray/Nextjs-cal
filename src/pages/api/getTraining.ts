import type { NextApiRequest, NextApiResponse } from 'next'
import { scheduleSessions } from "stubs/example-data"



export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(scheduleSessions)
}