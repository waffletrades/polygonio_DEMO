import '../support/hook'  
import { Given, When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import HomePage from '../pages/homePage' 

let homePage: HomePage // store homepage instance 
Given('I navigate to the polygon home page', { timeout: 30000 }, async function () {
  await this.page.goto('https://polygon.io/', {
    timeout: 25000,
    waitUntil: 'networkidle'
  })

  homePage = new HomePage(this.page)
})


When('I click on the {string} menu item', async function (menuItem: string) {
  switch (menuItem) {
    case 'Products':
      await homePage.mainMenu.products.waitFor({ state: 'visible' })
      console.log('Products menu is visible')
      await homePage.mainMenu.products.click()
      console.log('Products menu clicked')
      break
    case 'Docs':
      await homePage.mainMenu.docs.waitFor({ state: 'visible' })
      console.log('Docs menu is visible')
      await homePage.mainMenu.docs.click()
      console.log('Docs menu clicked')
      break
    case 'Company':
      await homePage.mainMenu.company.waitFor({ state: 'visible' })
      console.log('Company menu is visible')
      await homePage.mainMenu.company.click()
      console.log('Company menu clicked')
      break
    case 'Pricing':
      await homePage.mainMenu.pricing.waitFor({ state: 'visible' })
      console.log('Pricing menu is visible')
      await homePage.mainMenu.pricing.click()
      console.log('Pricing menu clicked')
      break
    case 'Contact':
      await homePage.mainMenu.contact.waitFor({ state: 'visible' })
      console.log('Contact menu is visible')
      await homePage.mainMenu.contact.click()
      console.log('Contact menu clicked')
      break
    default:
      throw new Error(`Menu item "${menuItem}" not defined`)
  }
})

When('I click on the {string} dropdown item under Products', async function (dropdownItem: string) {
  await homePage.mainMenu.products.waitFor({ state: 'visible' })
  await homePage.mainMenu.products.click()
  console.log('Products dropdown expanded')

  switch (dropdownItem) {
    case 'Stocks':
      await homePage.mainMenu.stocksDropdown.waitFor({ state: 'visible' })
      await homePage.mainMenu.stocksDropdown.click()
      console.log('Stocks dropdown item clicked')
      break
    case 'Options':
      await homePage.mainMenu.optionsDropdown.waitFor({ state: 'visible' })
      await homePage.mainMenu.optionsDropdown.click()
      console.log('Options dropdown item clicked')
      break
    case 'Indices':
      await homePage.mainMenu.indiciesDropdown.waitFor({ state: 'visible' })
      await homePage.mainMenu.indiciesDropdown.click()
      console.log('Indices dropdown item clicked')
      break
    case 'Currencies':
      await homePage.mainMenu.currenciesDropdown.waitFor({ state: 'visible' })
      await homePage.mainMenu.currenciesDropdown.click()
      console.log('Currencies dropdown item clicked')
      break
    default:
      throw new Error(`Dropdown item "${dropdownItem}" under Products not defined`)
  }
})

Then('I click on the polygon icon to navigate back to the home page', async function () {
  await homePage.clickPolygonLogoToNavigateHome() 
})


When('I click on the Sign Up button', async function () {
  await homePage.clickSignUp()
})

When('I click on the Log In button', async function () {
  await homePage.clickLogIn()
})

When('I click on the S3 Files Included In All Plans section', async function () {
  await homePage.clickS3FilesIncludedInAllPlans()
})

When('I click on the Create API Key button', async function () {
  await homePage.clickCreateAPIKey()
})

When('I click on the View Our API Docs button', async function () {
  await homePage.clickViewOurAPIDocs()
})

Then('I verify the Facebook icon navigation', { timeout: 20000 }, async function () {
  await homePage.verifyFacebookIconNavigation()
})
