import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
const HAPPY_API_KEY = process.env.HAPPI_DEV_API_KEY;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  if (req.method === "GET") {
    // Process a GET request
    const {
      query: { q }
    } = req;
    const response = await axios.get(`https://api.happi.dev/v1/music`, {
      params: {
        q: q,
        type: "artist",
        apikey: HAPPY_API_KEY
      }
    });
    return res.status(200).json(response.data);
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
