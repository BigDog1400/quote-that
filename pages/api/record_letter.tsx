import { API_JSONBIN_CREATE_RECORD_PATH } from "../../constants";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
const API_KEY = process.env.JSONBIN_APIKEY;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  if (req.method === "POST") {
    // Process a POST request
    const { body } = req;
    const response = await axios.post(
      API_JSONBIN_CREATE_RECORD_PATH,
      { data: body },
      {
        headers: {
          "X-Master-Key": API_KEY
        }
      }
    );
    if (response.status === 200) {
      return res.status(200).json(response.data);
    } else {
      res.status(404).end(`Server error`);
    }
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
