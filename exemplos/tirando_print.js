/***********************
 * Importando puppeter
 ***********************/
const puppeteer = require("puppeteer");

/*********************
 * Função assincrona
 *********************/
(async () =>  {
    try {
        // Conecta ao browser
        const browser = await puppeteer.launch({headless: false}); 
        // Cria uma nova pagina
        const page = await browser.newPage();  
        // Vai para a pagina "https://github.com/DarlanLS2" 
        await page.goto("https://github.com/DarlanLS2");
        // Tira um print e salva como "perfil.png"
        await page.screenshot({path: "perfil.png"});
        // Fecha o browser
        await browser.close();
    } catch (err) { 
        // Exibe o erro, caso de algum
        console.log(err)
    }
})();