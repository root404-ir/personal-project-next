export async function GET() {
    const baseUrl = 'https://mtjs.ir'

    const spaceId = 'fulkbl2s1yqz'
    const accessToken = 'HTMhs9d6XgospFsw_OhKRCGKuRHoSbGxjf1xLgzTBkw'
    const contentType = 'post'

    const res = await fetch(
        `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?access_token=${accessToken}&content_type=${contentType}&select=fields.slug`
    )

    if (!res.ok) {
        return new Response('Failed to fetch slugs from Contentful', { status: 500 })
    }

    const data = await res.json()

    const posts = data.items.map(item => item.fields.slug)

    const urls = posts.map(slug => `
      <url>
        <loc>${baseUrl}/blog/post/${slug}</loc>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
      </url>
    `)

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>${baseUrl}</loc>
          <changefreq>monthly</changefreq>
          <priority>1.0</priority>
        </url>
        ${urls.join('')}
      </urlset>
    `

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml'
        }
    })
}
