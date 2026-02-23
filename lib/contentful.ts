import { createClient } from 'contentful'
import { Document } from '@contentful/rich-text-types'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

export interface BlogPost {
  title: string
  slug: string
  excerpt: string
  coverImage: {
    url: string
    title: string
  }
  content: Document
  publishedDate: string
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await client.getEntries({
      content_type: 'myBlogs',
      order: ['-fields.publishedDate'],
    })

    return response.items.map((item: any) => ({
      title: item.fields.title,
      slug: item.fields.slug,
      excerpt: item.fields.excerpt,
      coverImage: {
        url: `https:${item.fields.coverImage.fields.file.url}`,
        title: item.fields.coverImage.fields.title,
      },
      content: item.fields.content,
      publishedDate: item.fields.publishedDate,
    }))
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await client.getEntries({
      content_type: 'myBlogs',
      'fields.slug': slug,
      limit: 1,
    })

    if (response.items.length === 0) {
      return null
    }

    const item = response.items[0]
    return {
      title: item.fields.title as string,
      slug: item.fields.slug as string,
      excerpt: item.fields.excerpt as string,
      coverImage: {
        url: `https:${(item.fields.coverImage as any).fields.file.url}`,
        title: (item.fields.coverImage as any).fields.title,
      },
      content: item.fields.content as Document,
      publishedDate: item.fields.publishedDate as string,
    }
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}
