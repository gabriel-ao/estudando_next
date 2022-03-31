/* eslint-disable import/no-anonymous-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { apiBase, apiKey } from '../../../lib/tmdb';
export default async (req, res) => {
  const movieId = req.query.id;

  console.log(' req.query.id ', req.query);

  const result = await fetch(
    `${apiBase}/movie/${movieId}?api_key=${apiKey}&language=pt-BR`
  );
  const json = await result.json();

  res.status(200).json({
    info: json,
  });
};

// site.com/api/search?q=NOMEDOFILME
