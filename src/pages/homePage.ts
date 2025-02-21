import { Page, Locator, expect } from '@playwright/test'

class HomePage {
  page: Page

  public readonly mainMenu: {
    polygonLogo: Locator
    products: Locator
    stocksDropdown: Locator
    optionsDropdown: Locator
    indiciesDropdown: Locator
    currenciesDropdown: Locator
    docs: Locator
    company: Locator
    pricing: Locator
    contact: Locator
  }

  public readonly buttons: {
    signUp: Locator
    logIn: Locator
    s3FilesIncludedinAllPlans: Locator
    createAPIKey: Locator
    viewOurAPIDocs: Locator
  }

  public readonly socialMedia: {
    facebookIcon: Locator
    instagramIcon: Locator
    twitterIcon: Locator
    githubIcon: Locator
    youtubeIcon: Locator

  }

  //constructor 
  constructor(page: Page) {
    this.page = page

    this.mainMenu = {
      polygonLogo: page.locator('a[href="/"] img[alt="Polygon"]'),
      products: page.locator('button:has-text("Products")'),
      stocksDropdown: page.locator('div.group.relative').nth(0), 
      optionsDropdown: page.locator('div.group.relative').nth(1), 
      indiciesDropdown: page.locator('div.group.relative').nth(2), 
      currenciesDropdown: page.locator('div.group.relative').nth(3), 
      docs: page.locator('button:has-text("Docs")'),
      company: page.locator('button:has-text("Company")'),
      pricing: page.locator('button:has-text("Pricing")'),
      contact: page.locator('a:has-text("Contact")'),
    }

    this.buttons = {
      signUp: page.locator('a:has-text("Sign up")'),
      logIn: page.locator('a:has-text("Log in")'),
      s3FilesIncludedinAllPlans: page.locator('span:has-text("S3 Files Included In All Plans")'),
      createAPIKey: page.locator('a:has-text("Create API Key")'),
      viewOurAPIDocs: page.locator('a:has-text("View our API docs →")')
    }


    this.socialMedia = {
      facebookIcon: page.locator('a[href*="facebook.com/polygonio"]'),
      instagramIcon: page.locator('a[href*="instagram.com/polygon_io"]'),
      twitterIcon: page.locator('a[href*="twitter.com/polygon_io"]'),
      githubIcon: page.locator('a[href*="github.com/polygon-io"]'),
      youtubeIcon: page.locator('a[href*="youtube.com/@polygonio"]')
    }

  }

  //methods 
  async clickPolygonLogo(): Promise<void> {
    await this.mainMenu.polygonLogo.waitFor({ state: 'visible' }) 
    console.log('Polygon logo is visible') 
    await this.mainMenu.polygonLogo.click() 
    console.log('Polygon logo clicked') 
  }

  async clickPolygonLogoToNavigateHome(): Promise<void> {
    await this.mainMenu.polygonLogo.waitFor({ state: 'visible' })
    console.log('Polygon logo is visible')
    await this.mainMenu.polygonLogo.click()
    console.log('Clicked Polygon logo to navigate back to the home page')
  }

  async clickSignUp(): Promise<void> {
    await this.buttons.signUp.waitFor({ state: 'visible' })
    await this.buttons.signUp.click()
  }

  async clickLogIn(): Promise<void> {
    await this.buttons.logIn.waitFor({ state: 'visible' })
    await this.buttons.logIn.click()
  }

  async clickS3FilesIncludedInAllPlans(): Promise<void> {
    await this.buttons.s3FilesIncludedinAllPlans.waitFor({ state: 'visible' })
    await this.buttons.s3FilesIncludedinAllPlans.click()
  }

  async clickCreateAPIKey(): Promise<void> {
    await this.buttons.createAPIKey.waitFor({ state: 'visible' })
    await this.buttons.createAPIKey.click()
  }

  async clickViewOurAPIDocs(): Promise<void> {
    await this.buttons.viewOurAPIDocs.waitFor({ state: 'visible' })
    await this.buttons.viewOurAPIDocs.click()
  }


  async verifyFacebookIconNavigation(): Promise<void> {
    await this.page.waitForTimeout(3000)
  
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.socialMedia.facebookIcon.click()
    ])
  
    await newPage.waitForLoadState('domcontentloaded')
    await newPage.waitForTimeout(3000)
  
    const url = newPage.url()
    if (url !== 'https://www.facebook.com/polygonio') {
      throw new Error(`Expected URL to be https://www.facebook.com/polygonio but got ${url}`)
    }
  
    await newPage.waitForTimeout(2000)
    await newPage.close()
    await this.page.waitForTimeout(2000)
    await this.page.bringToFront()
  }  
  
}

export default HomePage
