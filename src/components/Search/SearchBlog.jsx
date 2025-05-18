'use client'

import { useEffect, useRef } from 'react'
import algoliasearch from 'algoliasearch/lite'
import { autocomplete } from '@algolia/autocomplete-js'
import '@algolia/autocomplete-theme-classic'

const searchClient = algoliasearch('LVKCS8LKZB', '160a361199c8fcf3c8f13f6de762a706')
const index = searchClient.initIndex('post')

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
            sourceId: 'posts',
            getItems() {
              if (!query) return []
              return index
                .search(query, { hitsPerPage: 5 })
                .then(({ hits }) => hits)
            },
            templates: {
              item({ item, html }) {
                return html`
                  <div class="p-3 flex justify-start hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg w-full">
                    <a href="/blog/post/${item.slug}" class="block w-full">
                      <h4 class="text-base font-bold text-gray-800 dark:text-gray-200">${item.title}</h4>
                    </a>
                  </div>
                `
              },
              noResults({ html }) {
                return html`<div class="p-3 text-center text-gray-400">چیزی پیدا نشد!</div>`
              }
            }
          }
        ]
      }
    })
  }, [])

  return (
    <div className="max-w-xl mt-10">
      <div ref={containerRef} />
    </div>
  )
}

export default SearchBlog
