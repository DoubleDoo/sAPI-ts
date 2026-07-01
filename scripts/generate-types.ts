import openapiTS, { astToString } from 'openapi-typescript'
import * as fs from 'node:fs'
import * as path from 'node:path'
import * as url from 'node:url'

const args = process.argv.slice(2)
const pathArg = args.find((a) => a.startsWith('--path='))
const specPath = pathArg ? pathArg.replace('--path=', '') : './api-1.json'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const absoluteSpecPath = path.resolve(process.cwd(), specPath)
const outputPath = path.resolve(__dirname, '../src/generated/schema.ts')

if (!fs.existsSync(absoluteSpecPath)) {
  console.error(`Spec file not found: ${absoluteSpecPath}`)
  process.exit(1)
}

console.log(`Generating types from: ${absoluteSpecPath}`)
console.log(`Output: ${outputPath}`)

async function generate() {
  const ast = await openapiTS(url.pathToFileURL(absoluteSpecPath))
  const output = astToString(ast)

  fs.mkdirSync(path.dirname(outputPath), { recursive: true })
  fs.writeFileSync(outputPath, output, 'utf-8')

  console.log('Done.')
}

generate().catch((err) => {
  console.error(err)
  process.exit(1)
})
