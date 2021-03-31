import { generateImage } from 'jsdom-screenshot'
import resolutions from './resolutions'
import puppeteer from 'puppeteer'
import { DEFAULT_PORT, EMAIL, PASSWORD, SIGNIN, ADMIN_LOGIN, ADMIN_PASSWORD } from '@/constants'

export let browser, page
export const timeout = 50000

const commonSettings = {
  waitUntilNetworkIdle: true,
}

export const snapshotConfiguration = ({ filename }) => {
  return {
    customSnapshotIdentifier: filename,
  }
}

export const beforeAllTest = async () => {
  browser = await puppeteer.launch({ headless: false })
  page = await browser.newPage()
  await page.goto('http://localhost:' + DEFAULT_PORT)
}

export const SignInTest = async () => {
  await page.click(`[data-testid=${EMAIL}]`)
  await page.keyboard.type(ADMIN_LOGIN)
  await page.click(`[data-testid=${PASSWORD}]`)
  await page.keyboard.type(ADMIN_PASSWORD)
  await Promise.all([
    page.click(`[data-testid=${SIGNIN}]`),
    page.waitForNavigation({ waitUntil: 'load' }),
  ])
}

export const afterAlltest = async () => {
  await browser.close()
}

export default async (expect, componentName) => {
  const tests = Object
    .keys(resolutions)
    .map(resolution => ({
      image: generateImage(Object.assign(commonSettings, resolutions[resolution])),
      resolutionCode: resolution,
    }))

  for (let i = 0; i < tests.length; i += 1) {
    const { image, resolutionCode } = tests[i]
    const filename = `${componentName}-${resolutionCode}`

    const testResult = await image
    expect(testResult).toMatchImageSnapshot(snapshotConfiguration({ filename }))
  }
}