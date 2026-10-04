import { spawnSync } from 'node:child_process'
import { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const slidev = resolve(root, 'node_modules/@slidev/cli/bin/slidev.mjs')
const dist = resolve(root, 'dist')

const decks = [
  ['slides-clase-1.md', 'clase-1'],
  ['slides-clase-2.md', 'clase-2'],
]

function siteBase() {
  const raw = (process.env.BASE_PATH ?? '').trim()
  if (!raw || raw === '/') return ''
  return `/${raw.replace(/^\/+|\/+$/g, '')}`
}

function runSlidev(entry, outDir, base) {
  const args = [
    slidev,
    'build',
    entry,
    '--out',
    outDir,
    '--base',
    base,
    '--router-mode',
    'hash',
  ]
  console.log(`\n[build] ${entry} → ${outDir}  base=${base}\n`)
  const result = spawnSync(process.execPath, args, { cwd: root, stdio: 'inherit' })
  if (result.status !== 0) process.exit(result.status ?? 1)
}

const base = siteBase()

rmSync(dist, { recursive: true, force: true })
mkdirSync(dist, { recursive: true })

for (const [entry, dir] of decks) {
  runSlidev(entry, `dist/${dir}`, `${base}/${dir}/`)
}

for (const name of ['index.html', '404.html']) {
  const html = readFileSync(resolve(root, 'site', name), 'utf8').replaceAll('__SITE_BASE__', base)
  writeFileSync(resolve(dist, name), html)
}

copyFileSync(resolve(root, 'site/site.css'), resolve(dist, 'site.css'))
writeFileSync(resolve(dist, '.nojekyll'), '')

for (const file of ['index.html', '404.html', 'site.css', 'clase-1/index.html', 'clase-2/index.html']) {
  if (!existsSync(resolve(dist, file))) {
    console.error(`[build] missing dist/${file}`)
    process.exit(1)
  }
}

console.log(`\n[build] site ready at dist/  base=${base || '/'}\n`)
