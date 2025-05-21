export async function POST(req) {
    try {
      const { query } = await req.json()
  
      const ALGOLIA_APP_ID = 'LVKCS8LKZB'
      const ALGOLIA_API_KEY = '160a361199c8fcf3c8f13f6de762a706'
  
      const response = await fetch(`https://${ALGOLIA_APP_ID}-dsn.algolia.net/1/indexes/post/query`, {
        method: 'POST',
        headers: {
          'X-Algolia-Application-Id': ALGOLIA_APP_ID,
          'X-Algolia-API-Key': ALGOLIA_API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          params: `query=${encodeURIComponent(query)}&hitsPerPage=5`,
        }),
      })
  
      const data = await response.json()
      return Response.json(data)
    } catch (err) {
      return Response.json({ error: 'Search failed', details: err.message }, { status: 500 })
    }
  }