const puppeteer = require("puppeteer");

(async () => {
  try {
    // Iniciando o browser no mode headless (com interface grafica)
    const browser = await puppeteer.launch({ headless: false });
    // Cria uma nova pagina no navegador
    const page = await browser.newPage();
    // Navega ate a pagina da wikipedia
    await page.goto("https://github.com/DarlanLS2");
    // Procura o elemento e retorna o textContent deste elemento 
    const qntdRepositorios = await page.$eval('[class="Counter"]', (element) => element.textContent);
    console.log(`Esta é a quantidade de repositorios que este perfil possui: ${qntdRepositorios}`);
    // Fechando o browser
    await browser.close();
  } catch (err) {
    // exibe o err caso de alguem erro na execução do try
    console.log(err);
  }
})();
