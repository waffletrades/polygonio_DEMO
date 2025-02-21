import { Before, After } from '@cucumber/cucumber'
import { chromium, Browser, Page } from '@playwright/test'

let browser: Browser

console.log('⚠️  hook.ts file is being loaded...') 

Before(async function () {
  console.log('✅ Hook running: Launching browser...') 

  // Start up a new browser headed mode
  browser = await chromium.launch({ headless: false })  //true or false to turn on or off headless mode

  // Open a fresh browser context (isolated session, no cache/cookies from previous tests)
  const context = await browser.newContext()

  // Create a new page inside that context and store it for use in tests
  this.page = await context.newPage() 

  console.log('🟢 Hook completed: this.page is set!') 
})

After(async function () {
  console.log('🔴 Closing browser...')

  await browser.close()
})
