import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	switch (req.method) {
		case 'GET': {
			if (!req.query.text) {
				return res.status(400).json({ type: 'error', reason: 'text is required' });
			}
			if (!req.query.direction) {
				return res.status(400).json({ type: 'error', reason: 'direction is required' });
			}

			const response = await axios.get(`http://mcgraw.rm.cab:5001/?text=${encodeURI(req.query.text as string)}&direction=${req.query.direction}`);
			return res.status(200).json(response.data);
		}
		default: {
			return res.status(405).json({ type: 'error', reason: 'Only GET is allowed' });
		}
	}
};
