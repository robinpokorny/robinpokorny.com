import type { VercelRequest, VercelResponse } from '@vercel/node';
import { client, renderBody } from "./_lib/oauth2";

export default async (req: VercelRequest, res: VercelResponse) => {
  const code = req.query.code as string;
  const { host } = req.headers;

  try {
    const { token } = await client.getToken({
      code,
      redirect_uri: `https://${host}/api/callback`
    });

    res.status(200).send(
      renderBody("success", {
        token: token.access_token as string,
        provider: "github"
      })
    );
  } catch (e) {
    res.status(200).send(renderBody("error", e));
  }
};
