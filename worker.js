const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS });
    }

    const url = new URL(request.url);

    if (request.method === 'GET' && url.pathname === '/kv') {
      const key = url.searchParams.get('key');
      if (!key) return new Response('key required', { status: 400, headers: CORS });
      const value = await env.PARKING_KV.get(key);
      return new Response(JSON.stringify({ value }), {
        headers: { 'Content-Type': 'application/json', ...CORS },
      });
    }

    if (request.method === 'POST' && url.pathname === '/kv') {
      const { key, value } = await request.json();
      if (!key) return new Response('key required', { status: 400, headers: CORS });
      await env.PARKING_KV.put(key, value);
      return new Response(JSON.stringify({ ok: true }), {
        headers: { 'Content-Type': 'application/json', ...CORS },
      });
    }

    return new Response('Not found', { status: 404, headers: CORS });
  },
};
