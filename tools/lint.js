#!/usr/bin/env node

import { readFileSync } from 'fs'
import { resolve } from 'path'
import assert from 'assert/strict'
import chalk from 'chalk'
import { GEOJSON_EXT, ROOT_DIR, README_PATH } from './constants.js'
import { cities } from './utils.js'

const readmeContent = readFileSync(README_PATH, 'utf8')

cities.every((city) => {
  const cityGeoJsonPath = resolve(ROOT_DIR, city + GEOJSON_EXT)
  const cityGeoJson = JSON.parse(readFileSync(cityGeoJsonPath, 'utf8'))

  // match the number before the city name e.g. [İstanbul (34)](istanbul.geojson)
  const matched = readmeContent.match(`\\((\\d+)\\)\\]\\(${city + GEOJSON_EXT.replace('.', '\\.')}\\)`)
  assert(matched, `${city}: Not linked in README.md file.`)
  const cafes = parseInt(matched[1], 10)

  if (cafes !== cityGeoJson.features.length) {
    throw new Error(`${city}: Need to update the counter in README.md file.`)
  }

  return true
})

console.log(chalk.black.bgGreen(' Done! ') + ' 🤙')
