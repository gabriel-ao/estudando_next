// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { apiBase, apiKey } from '../../lib/tmdb';
export default async (req, res) => {
  let search = req.query.q;

  console.log(' req.query.q ', req.query);
  const result = await fetch(
    `${apiBase}/search/movie?api_key=${apiKey}&language=pt-BR&query=${search}`
  );
  const json = await result.json();

  res.status(200).json({
    list: json.results,
  });
};

// site.com/api/search?q=NOMEDOFILME
