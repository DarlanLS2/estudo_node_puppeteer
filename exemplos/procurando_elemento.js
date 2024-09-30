/**************************
 * Explicação de metodos:
 **************************/
  /*
   * page.$eval recebe dois parametros (seletor, pageFuntion)
   * sera procurado no codigo da pagina o primeiro elemento
   * que corresponde ao seletor, o seletor sera passado como
   * primeiro parametro da pageFunction 
   */

const puppeteer = require("puppeteer");

(async () => {
  try {
    // Iniciando o browser no mode headless (com interface grafica)
    const browser = await puppeteer.launch({ headless: false });
    // Cria uma nova pagina no navegador
    const page = await browser.newPage();
    // Navega ate a pagina da wikipedia
    await page.goto("https://pt.wikipedia.org/");
    // Obtem o titulo da pagina e o exibe no console
    const title = await page.title();
    console.log(title);
    /* Procura pelo primeiro elemento h1 e 
    retorna o conteudo de texto deste elemento*/
    const heading = await page.$eval("h1", (element) => element.textContent);
    console.log(heading);
    // Fechando o browser
    await browser.close();
  } catch (err) {
    // exibe o err caso de alguem erro na execução do try
    console.log(err);
  }
})();
