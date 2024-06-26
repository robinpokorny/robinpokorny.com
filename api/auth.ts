import type { VercelRequest, VercelResponse } from '@vercel/node';
import crypto from "crypto";
import { client } from "./_lib/oauth2";

export const randomString = () => crypto.randomBytes(4).toString(`hex`);

export default (req: VercelRequest, res: VercelResponse) => {
  const { host } = req.headers;


  const url = client.authorizeURL({
    redirect_uri: `https://${host}/api/callback`,
    scope: `repo,user`,
    state: randomString()
  });

  res.writeHead(301, { Location: url });
  res.end();
};
