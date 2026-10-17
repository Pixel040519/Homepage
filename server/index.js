import express from 'express';
const app = express();

const PAGE_ID = globalThis.process?.env.PAGE_ID || '118572181188909';
const PAGE_TOKEN = globalThis.process?.env.PAGE_TOKEN;

let cache = { data: null, time: 0 };

app.get('/api/fb-posts', async (req, res) => {
  try {
    if (cache.data && Date.now() - cache.time < 5 * 60 * 1000) {
      return res.json(cache.data);
    }
    const url =
      `https://graph.facebook.com/v26.0/${PAGE_ID}/posts` +
      `?fields=id,message,full_picture,permalink_url,created_time&limit=25` +
      `&access_token=${PAGE_TOKEN}`;
    const r = await fetch(url);
    const json = await r.json();
    if (!json.data) return res.status(502).json({ error: json.error || 'Facebook error' });
    const latestPosts = json.data
      .sort((firstPost, secondPost) => (
        Date.parse(secondPost.created_time) - Date.parse(firstPost.created_time)
      ))
      .slice(0, 4);
    cache = { data: latestPosts, time: Date.now() };
    res.json(latestPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(3001, () => console.log('API on http://localhost:3001'));