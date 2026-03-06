import { useEffect } from 'react'

type SeoMetaProps = {
  title: string
  description: string
  ogTitle?: string
  ogDescription?: string
}

const upsertMetaByName = (name: string, content: string) => {
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null

  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('name', name)
    document.head.appendChild(meta)
  }

  meta.setAttribute('content', content)
}

const upsertMetaByProperty = (property: string, content: string) => {
  let meta = document.querySelector(
    `meta[property="${property}"]`,
  ) as HTMLMetaElement | null

  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('property', property)
    document.head.appendChild(meta)
  }

  meta.setAttribute('content', content)
}

function SeoMeta({ title, description, ogTitle, ogDescription }: SeoMetaProps) {
  useEffect(() => {
    document.title = title

    upsertMetaByName('description', description)
    upsertMetaByProperty('og:title', ogTitle ?? title)
    upsertMetaByProperty('og:description', ogDescription ?? description)
  }, [description, ogDescription, ogTitle, title])

  return null
}

export default SeoMeta
