import {Builder, By, Capabilities} from 'selenium-webdriver'

describe('sample', () => {

  const capablity =  Capabilities.firefox()
  const driver =
    new Builder().withCapabilities(capablity).usingServer('http://localhost:4444/wd/hub').build()
  
  test('basic', async () => {
    await driver.get('http://www.google.com')
    const title = await driver.getTitle()
    expect(title).toBe('Google')
  })

  test('local', async () => {
    await driver.get('http://localhost:5000/test')
    const body = await driver.findElement(By.css('body')).getText()
    expect(body).toBe('ok')
  })

  afterAll(async () => {
    await driver.close()
  })
})
