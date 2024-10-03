const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto("https://github.com/login");
  await page.type('[name="login"]', "seuEmail");
  await page.type('[name="password"]', "suaSenha");
  await page.click('[type="submit"]');
  await page.waitForNavigation();
  await page.screenshot({path: "perfil.png"});
  await browser.close();
})()