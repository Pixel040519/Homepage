const PAGE_ID = globalThis.process?.env.PAGE_ID || '118572181188909';
const CACHE_DURATION = 5 * 60 * 1000;

let cache = { data: null, time: 0 };

export default async function handler(request, response) {
  const pageToken = globalThis.process?.env.PAGE_TOKEN;

  if (request.method !== 'GET') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  if (!pageToken) {
    return response.status(500).json({ error: 'PAGE_TOKEN is not configured' });
  }

  if (cache.data && Date.now() - cache.time < CACHE_DURATION) {
    return response.json(cache.data);
  }

  try {
    const params = new URLSearchParams({
      fields: 'id,message,full_picture,permalink_url,created_time',
      limit: '25',
      access_token: pageToken,
    });
    const facebookResponse = await fetch(
      `https://graph.facebook.com/v26.0/${PAGE_ID}/posts?${params}`
    );
    const json = await facebookResponse.json();

    if (!facebookResponse.ok || !Array.isArray(json.data)) {
      return response.status(502).json({
        error: json.error || 'Facebook error',
      });
    }

    const latestPosts = Array.from(
      new Map(json.data.map((post) => [post.id, post])).values()
    )
      .sort((firstPost, secondPost) => (
        Date.parse(secondPost.created_time) - Date.parse(firstPost.created_time)
      ))
      .slice(0, 4);

    cache = { data: latestPosts, time: Date.now() };
    return response.json(latestPosts);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: 'Server error' });
  }
}
