import { readdirSync } from 'fs'
import { basename  } from 'path'
import assert from 'assert/strict'
import { COLORS, ROOT_DIR, GEOJSON_EXT } from './constants.js'

export const cities = readdirSync(ROOT_DIR)
  .filter((filename) => filename.endsWith(GEOJSON_EXT))
  .map((filename) => basename(filename, GEOJSON_EXT))

export const calcluateAverageDownloadSpeed = (downloadSpeed) => {
  if (!Array.isArray(downloadSpeed)) {
    downloadSpeed = [downloadSpeed]
  }

  const sum = downloadSpeed
    .map((value) => {
      const matched = value.match(/^\d+(?:\.?\d+)?(?=\s?Mbps)/i)
      assert(matched, 'Download speed does not contain a valid numeric value.')

      const speed = matched[0]
      assert(speed, 'The value of download speed is invalid.')

      return parseFloat(speed)
    })
    .reduce((a, b) => a + b, 0)

  return sum / downloadSpeed.length
}

export const determineMarkerColor = (status, downloadSpeed) => {
  if (status === 'Closed') {
    return COLORS.GRAY
  }

  if (downloadSpeed < 4) {
    return COLORS.RED
  }

  if (downloadSpeed < 10) {
    return COLORS.YELLOW
  }

  return COLORS.GREEN
}
