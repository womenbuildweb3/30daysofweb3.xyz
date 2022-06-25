import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import {oneDark} from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock = {
  code({node, inline, className, children, ...props}) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
    <SyntaxHighlighter 
      style={oneDark} 
      language={match[1]} 
      PreTag="div" {...props}>
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>

    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  }
}

export default CodeBlock