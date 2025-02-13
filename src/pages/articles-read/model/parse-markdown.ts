import { unified } from 'unified';
import toMarkdownAST from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkSmartypants from 'remark-smartypants';
import toHtmlAST from 'remark-rehype';
import rehypeShiki from '@shikijs/rehype';
import toHtmlString from 'rehype-stringify';

export async function parseMarkdown(body: string) {
    const file = await unified()
        .use(toMarkdownAST)
        .use([remarkGfm, remarkSmartypants])
        .use(toHtmlAST, { allowDangerousHtml: true })
        .use(rehypeShiki, { theme: 'dracula' })
        .use(toHtmlString, { allowDangerousHtml: true })
        .process(body);

    return { markdown: String(file) };
}
