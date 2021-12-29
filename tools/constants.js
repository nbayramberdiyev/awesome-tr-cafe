import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

export const GEOJSON_EXT = '.geojson'

export const COLORS = Object.freeze({
  RED: '#C24740',
  YELLOW: '#F3AE1A',
  GREEN: '#50C240',
  GRAY: '#BEBEBE',
})

export const ROOT_DIR = resolve(dirname(fileURLToPath(import.meta.url)), '..')

export const README_PATH = resolve(ROOT_DIR, 'README.md')
