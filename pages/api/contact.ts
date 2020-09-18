import { NextApiRequest, NextApiResponse } from "next";

export default function (_: NextApiRequest, res: NextApiResponse) {
  return res.status(200).end();
}
