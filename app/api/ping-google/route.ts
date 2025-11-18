import { NextRequest, NextResponse } from 'next/server'

// API para notificar a Google cuando se publica un nuevo post
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { slug, secret } = body

    // Validar el secret para evitar uso no autorizado
    if (secret !== process.env.PING_SECRET) {
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 401 }
      )
    }

    if (!slug) {
      return NextResponse.json(
        { error: 'El slug es requerido' },
        { status: 400 }
      )
    }

    const postUrl = `https://tcsystems.es/blog/${slug}`
    const sitemapUrl = 'https://tcsystems.es/sitemap.xml'

    // Ping a Google para que recrawlee el sitemap
    const googlePingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`
    
    try {
      await fetch(googlePingUrl, { method: 'GET' })
    } catch (error) {
      console.error('Error haciendo ping a Google Sitemap:', error)
      return NextResponse.json(
        { error: 'Error notificando a Google' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Google notificado correctamente',
      postUrl,
      sitemapUrl,
    })
  } catch (error) {
    console.error('Error en ping-google API:', error)
    return NextResponse.json(
      { error: 'Error procesando la solicitud' },
      { status: 500 }
    )
  }
}

