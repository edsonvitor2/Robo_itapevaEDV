const puppeteer = require('puppeteer'); // instancia puppeteer 
console.log("teste");

// função assincrona 
async function robo(){ 
    const browser = await puppeteer.launch({ headless: false }); // instancia o navegador 
    const page = await browser.newPage(); // abre o navegador 
    await page.goto('https://unsplash.com/pt-br');     // abre o site 
    await page.click('[href="/pt-br/login"]'); // clica no botao de login 

    await page.waitForSelector('[name="email"]'); // espera a pagina carregar ate aparece o campo de email 
    await page.type('[name="email"]', 'edsoncousa@gmail.com'); // digita o email 
    await page.type('[name="password"]', 'Edson1234!'); // digita a senha 
    await page.click('[value="Login"]'); // clica no botao login 

    await page.waitForSelector('[class="sRm3U"]'); // espera carregar o menu so usuario 
    await page.click('[class="sRm3U"]'); // clica no menu do usuario 

    await page.waitForSelector('[href="/logout"]'); //espera carregar o botao de sair 
    await page.click('[href="/logout"]'); // clica no boao de sair 

};

robo();