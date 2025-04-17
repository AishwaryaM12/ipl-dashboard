import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get(
        'https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/feeds/203-matchschedule.js',
        { responseType: 'text' }
    );

    // Extract the JSON from JSONP (function call)
    const jsonpData = response.data;
    const jsonStr = jsonpData.match(/\((.*)\)/)?.[1];
    const jsonData = JSON.parse(jsonStr || '{}');

    res.status(200).json(jsonData);
  } catch (error) {
    console.error('Error fetching IPL data:', error);
    res.status(500).json({ error: 'Failed to fetch IPL data' });
  }
}
