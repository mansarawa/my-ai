import React from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

export default function Uhi() {
  const mdText = `  # Sample Markdown

  This is a **bold** text and this is *italic* text.

  - Item 1
  - Item 2

  [Link to OpenAI](https://www.openai.com)
  `;

  const html = marked(mdText);
  console.log(mdText)
  const cleanHtml = DOMPurify.sanitize(html);

  return (
    <div dangerouslySetInnerHTML={{ __html: cleanHtml }}></div>
  );
}
