const express = require('express');
const app = express();

const PAGE_ID = '118572181188909';
const PAGE_TOKEN = process.env.PAGE_TOKEN;

let cache = { data: null, time: 0 };

app.get('/api/fb-posts', async (req, res) => {
  try {
    if (cache.data && Date.now() - cache.time < 5 * 60 * 1000) {
      return res.json(cache.data);
    }
    const url =
      `https://graph.facebook.com/v26.0/${PAGE_ID}/posts` +
      `?fields=id,message,full_picture,permalink_url,created_time&limit=6` +
      `&access_token=${PAGE_TOKEN}`;
    const r = await fetch(url);
    const json = await r.json();
    if (!json.data) return res.status(502).json({ error: json.error || 'Facebook error' });
    cache = { data: json.data, time: Date.now() };
    res.json(json.data);
  } catch (e) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(3001, () => console.log('API on http://localhost:3001'));