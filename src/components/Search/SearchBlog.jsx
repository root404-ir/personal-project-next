'use client'

import { useEffect, useRef } from 'react'
import { autocomplete } from '@algolia/autocomplete-js'
import '@algolia/autocomplete-theme-classic'

const SearchBlog = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current || containerRef.current.childElementCount > 0) return

    autocomplete({
      container: containerRef.current,
      placeholder: 'جستجو در مقالات...',
      getSources({ query }) {
        return [
          {
            sourceId: 'post',
            getItems() {
              if (!query) return []
              return fetch('/api/searchApi', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query }),
              })
                .then(res => res.json())
                .then(data => data.hits || [])
            },
            templates: {
              item({ item, html }) {
                return html`
                  <div class="p-3 flex justify-start hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg w-full">
                    <a href="/blog/post/${item.slug}" class="block w-full">
                      <h4 class="text-base font-bold text-black">${item.title}</h4>
                    </a>
                  </div>
                `
              },
              noResults({ html }) {
                return html`<div class="p-3 text-center text-gray-400">چیزی پیدا نشد!</div>`
              },
            },
          },
        ]
      },
    })
  }, [])

  return (
    <div className="max-w-xl mt-10">
      <div ref={containerRef} />
    </div>
  )
}

export default SearchBlog
