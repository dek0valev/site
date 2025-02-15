import fs from 'node:fs/promises';
import { join, parse } from 'node:path';
import { cwd } from 'node:process';

export async function generateStaticParams() {
    const entries = await fs.readdir(join(cwd(), 'content', 'articles'), {
        recursive: true,
        withFileTypes: true,
    });

    const mdFiles = entries.filter((entry) => entry.isFile() && entry.name.endsWith('.md'));

    const slugs = mdFiles.map((file) => parse(file.name).name);

    return slugs.map((slug) => ({ slug }));
}