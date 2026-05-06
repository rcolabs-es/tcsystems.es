import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

const INLINE_MD_REGEX = /(\*\*([^*\n]+)\*\*)|(__([^_\n]+)__)|(\*([^*\n]+)\*)|(_([^_\n]+)_)|(`([^`\n]+)`)|(\[([^\]]+)\]\(([^)\s]+)\))/g

function renderInlineMarkdown(text: string, baseKey: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = []
  let lastIndex = 0
  let counter = 0
  let match: RegExpExecArray | null

  INLINE_MD_REGEX.lastIndex = 0
  while ((match = INLINE_MD_REGEX.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index))
    }
    const key = `${baseKey}-${counter++}`
    if (match[2] !== undefined) {
      nodes.push(
        <strong key={key} className="font-bold text-gray-900 dark:text-white">
          {match[2]}
        </strong>
      )
    } else if (match[4] !== undefined) {
      nodes.push(
        <strong key={key} className="font-bold text-gray-900 dark:text-white">
          {match[4]}
        </strong>
      )
    } else if (match[6] !== undefined) {
      nodes.push(
        <em key={key} className="italic">
          {match[6]}
        </em>
      )
    } else if (match[8] !== undefined) {
      nodes.push(
        <em key={key} className="italic">
          {match[8]}
        </em>
      )
    } else if (match[10] !== undefined) {
      nodes.push(
        <code key={key} className="bg-gray-100 dark:bg-zinc-800 px-2 py-1 rounded text-sm font-mono">
          {match[10]}
        </code>
      )
    } else if (match[12] !== undefined && match[13] !== undefined) {
      const href = match[13]
      const rel = !href.startsWith('/') ? 'noreferrer noopener' : undefined
      nodes.push(
        <a
          key={key}
          href={href}
          rel={rel}
          className="text-[#0e9acd] hover:text-[#0c87b8] underline transition-colors"
        >
          {match[12]}
        </a>
      )
    }
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }
  return nodes
}

function processChildren(children: React.ReactNode): React.ReactNode {
  return React.Children.map(children, (child, idx) => {
    if (typeof child === 'string') {
      return <React.Fragment key={`md-${idx}`}>{renderInlineMarkdown(child, `md-${idx}`)}</React.Fragment>
    }
    return child
  })
}

export const PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <div className="my-8">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || 'Blog image'}
            width={800}
            height={500}
            className="rounded-2xl w-full"
          />
          {value.caption && (
            <p className="text-center text-sm text-gray-500 dark:text-zinc-400 mt-2">
              {value.caption}
            </p>
          )}
        </div>
      )
    },
    highlightBox: ({ value }: any) => {
      const styleClasses = {
        blue: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800/50',
        green: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800/50',
        purple: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800/50',
        red: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800/50',
        yellow: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800/50',
      }

      const colorClass = styleClasses[value.style as keyof typeof styleClasses] || styleClasses.blue

      return (
        <div className={`p-6 rounded-2xl border ${colorClass} my-6`}>
          {value.title && (
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {value.title}
            </h3>
          )}
          {value.content && (
            <p className="text-gray-600 dark:text-zinc-300 leading-relaxed">
              {renderInlineMarkdown(value.content, 'hb')}
            </p>
          )}
        </div>
      )
    },
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 mt-12">
        {processChildren(children)}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
        {processChildren(children)}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 mt-6">
        {processChildren(children)}
      </h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-gray-600 dark:text-zinc-300 leading-relaxed mb-6">
        {processChildren(children)}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-[#0e9acd] pl-6 my-6 italic text-gray-600 dark:text-zinc-300">
        {processChildren(children)}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold text-gray-900 dark:text-white">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic">{children}</em>
    ),
    code: ({ children }: any) => (
      <code className="bg-gray-100 dark:bg-zinc-800 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a
          href={value.href}
          rel={rel}
          className="text-[#0e9acd] hover:text-[#0c87b8] underline transition-colors"
        >
          {children}
        </a>
      )
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-zinc-300 mb-6">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-zinc-300 mb-6">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li>{processChildren(children)}</li>,
    number: ({ children }: any) => <li>{processChildren(children)}</li>,
  },
}
