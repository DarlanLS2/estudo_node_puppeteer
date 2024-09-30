/***************************************
 * Importação de bibliotecas
 ***************************************/
import puppeteer from "puppeteer";

/***************************************
 * Inicializando e conectando ao browser
 ***************************************/
const browser = await puppeteer.launch();
const page = await browser.newPage();

/*
 * Ao iniciar o browser, pelo menos um contexto é criado.
 * Outros contextos podem ser criados, e cada um tem seu próprio
 * armazenamento local e cookies.
 */
const context = await browser.createBrowserContext();
const page1 = await context.newPage();
const page2 = await context.newPage();

/***************************************
 * Finalizando recursos
 ***************************************/
// Fechando o contexto, incluindo page1 e page2
await context.close();

// Fechando o browser
await browser.close();
