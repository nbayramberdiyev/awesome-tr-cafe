#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'
import assert from 'assert/strict'
import chalk from 'chalk'
import { GEOJSON_EXT, ROOT_DIR, README_PATH } from './constants.js'
import { cities, calcluateAverageDownloadSpeed, determineMarkerColor } from './utils.js'

let readmeContent = readFileSync(README_PATH, 'utf8')

cities.forEach((city) => {
  /*
  |--------------------------------------------------------------------------
  | 1. Parse and update the GeoJSON files of cities.
  |--------------------------------------------------------------------------
  */

  const cityGeoJsonPath = resolve(ROOT_DIR, city + GEOJSON_EXT)
  const cityGeoJson = JSON.parse(readFileSync(cityGeoJsonPath, 'utf8'))

  for (const feature of cityGeoJson.features) {
    // "Download Speed" may be an array, in such case we calculate the average
    const averageDownloadSpeed = calcluateAverageDownloadSpeed(feature.properties['Download Speed'])

    // set marker color
    feature.properties['marker-color'] = determineMarkerColor(feature.properties['Status'], averageDownloadSpeed)

    // set marker symbol
    if (!feature.properties['marker-symbol']) {
      feature.properties['marker-symbol'] = 'cafe'
    }
  }

  writeFileSync(cityGeoJsonPath, JSON.stringify(cityGeoJson, null, 2) + '\n')

  /*
  |--------------------------------------------------------------------------
  | 2. Parse and update README.md file.
  |--------------------------------------------------------------------------
  */

  // match the number after the city name e.g. [İstanbul (34)](istanbul.geojson)
  const matched = readmeContent.match(`\\((\\d+)\\)\\]\\(${city}`)
  assert(matched, `${city} does not exist in README.md file.`)
  const cafes = parseInt(matched[1], 10)

  if (cafes !== cityGeoJson.features.length) {
    console.log(chalk.red('%s: Found inconsistent number of cafés. Found %d, actual %d.'), city, cityGeoJson.features.length, cafes)
    console.log(chalk.yellow('%s: Updating README.md file, don’t forget to commit it!'), city)

    const re = new RegExp(`(.*)\\((\\d+)\\)\\]\\((${city})`)
    readmeContent = readmeContent.replace(re, `$1(${cityGeoJson.features.length})]($3`)
  }

  console.log(chalk.black.bgGreen(' %s: Done with %d records! ') + ' 🤙', city, cityGeoJson.features.length)
})

writeFileSync(README_PATH, readmeContent)
