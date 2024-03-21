import fs from 'fs';
import fsp from 'fs/promises';
import path from 'path';
import SpellChecker from 'spellchecker';
import puppeteer from 'puppeteer';
import fetch from 'node-fetch';
import { createServer } from 'http';
import express from 'express';
import { WebSocketServer } from 'ws';
import hljs from 'highlight.js';
import jaccard, { jaccardSimilarity } from 'jaccard-similarity-sentences';
import punycode from 'punycode.js';
const maxRequestsPerInterval = 100; const intervalInMilliseconds = 30000; let requestCount = 0; let DDoS = false;
setInterval(() => { if (requestCount > maxRequestsPerInterval) { console.log('Possible DDoS attack detected. Taking action...'); DDoS = true; } requestCount = 0; }, intervalInMilliseconds);
const server = createServer((req, res) => {
    requestCount = requestCount + 1;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('WebSocket Server is Running');
});
const wss = new WebSocketServer({ server });
AnotherFile(); ProfilImage(); SU_Security();
function SU_Security() {
     function Return() {
        if (!fs.existsSync(`./User`)) { fs.mkdirSync(`./User`); console.log(`\x1b[32mFolder "User" created successfully!\x1b[0m`); }
        if (!fs.existsSync(`./uploads`)) { fs.mkdirSync(`./uploads`); console.log(`\x1b[32mFolder "uploads" created successfully!\x1b[0m`); }
        if (!fs.existsSync(`./acount`)) { fs.mkdirSync(`./acount`); console.log(`\x1b[32mFolder "acount" created successfully!\x1b[0m`); }
        if (!fs.existsSync(`./SQL`)) { fs.mkdirSync(`./SQL`); console.log(`\x1b[32mFolder "SQL" created successfully!\x1b[0m`); }
        if (!fs.existsSync(`./User`)) { fs.mkdirSync(`./uploads`); console.log(`\x1b[32mFolder "User" created successfully!\x1b[0m`); }
        if (!fs.existsSync(`./profil`)) { fs.mkdirSync(`./profil`); console.log(`\x1b[32mFolder "User" created successfully!\x1b[0m`); }
        if (!fs.existsSync(`./waited_acount`)) { fs.mkdirSync(`./waited_acount`); console.log(`\x1b[32mFolder "User" created successfully!\x1b[0m`); }
        let filename = [];
        function getFiles(dir) { const files = fs.readdirSync(dir); return files.map(file => { filename.push(file) }); } getFiles('../S.U')
        let flength = filename.length;
        let secure = [
            'acount','conect_ai.mjs','node_modules', 'package-lock.json','package.json', 'profil', 'SQL', 'uploads','User', 'waited_acount'
        ]; let secures = secure.toString();
        function Delete(pathD) { try { fs.unlink(`./${pathD}`, (err) => { if (err) { } else { console.log(`\x1b[31mVirus deleted! Virus:${pathD}\x1b[0m`); } }); } catch (err) { console.log(`\x1b[31mVirus not Deleted! Virus:${pathD} ==> ${err}\x1b[0m`); } }
        for (let i = 0; i < flength; i++) { if (secures.includes(filename[i])) { } else { Delete(filename[i]) } } setTimeout(() => { filename = []; Return(); }, 3000);
    } Return();
}
function ProfilImage() {
const app = express();
app.use(express.static('./profil'));
app.listen(3002, () => {console.log(`\x1b[36mProfil Image: OK!\x1b[0m`);});
}
function AnotherFile() {
const app = express();
app.use(express.static('./uploads'));
app.listen(3001, () => {console.log(`\x1b[36mFile: OK!\x1b[0m`)});
}
wss.on('connection', function connection(ws) {
    console.log('\x1b[32mClient connected\x1b[0m');
    ws.on('message', function incoming(message) {
        console.log('\x1b[33mSystem starting\x1b[0m');
        if (DDoS == true) {
            SU_Security
        }
        try {
            message = JSON.parse(message);
            /** 
             * TODO:File Providers*/
            if (message.emailtxt && message.fileContent && message.fileExtension) {
                const fileBuffer = Buffer.from(message.fileContent, 'base64'); const fileExtension = message.fileExtension; const emailadress = message.emailtxt;
                ws.send('Wait:20000');
                setTimeout(() => {
                    let leternum = 0;
                    let letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; leternum = Math.floor(Math.random() * 26); let oneL = letter.charAt(leternum); let one = Math.floor(Math.random() * 10) + 1;
                    let two = Math.floor(Math.random() * 10) + 1; let three = Math.floor(Math.random() * 10) + 1; let four = Math.floor(Math.random() * 10) + 1; let five = Math.floor(Math.random() * 10) + 1;
                    const filenames = `${oneL}-${one}${two}${three}${four}${five}.`;
                    const fileName = filenames + fileExtension;
                    fs.writeFile(`./uploads/${filenames}.${fileExtension}`, fileBuffer, (err) => {
                        if (err) { const query = `Info?:The file could not be processed+/+Color:red+`; ws.send(query); }
                        else {
                            if (fileExtension.includes('png') || fileExtension.includes('jpg') || fileExtension.includes('jpeg') || fileExtension.includes('gif')) {
                                /** 
                                 * ?Image enhancement tools*/
                                let portnum = 0;
                                findEmptyPort()
                                    .then((port) => {
                                        console.log('Port returned by findEmptyPort:', port);
                                        if (port > 0) { portnum = port; }
                                    })
                                    .catch((err) => {
                                        console.error('Error:', err);
                                    });
                                console.log(portnum);
                                if (portnum == 0) { portnum = 3001 }
                                const url = `http://localhost:${portnum}/${fileName}`;
                                ws.send('Image:' + url);
                                /**  
                                * ? S.U function*/
                            }
                            else if (fileExtension.includes('mp4') || fileExtension.includes('avi') || fileExtension.includes('webm')) {
                                /** 
                                * ?Video enhancement tools*/
                                let portnum = 0;
                                findEmptyPort()
                                    .then((port) => {
                                        console.log('Port returned by findEmptyPort:', port);
                                        if (port > 0) { portnum = port; }
                                    })
                                    .catch((err) => {
                                        console.error('Error:', err);
                                    });
                                console.log(portnum);
                                if (portnum == 0) { portnum = 3001 }
                                const url = `http://localhost:${portnum}/${fileName}`;
                                ws.send('Video:' + url);
                                /**  
                                * ? S.U function*/
                            }
                            else if (fileExtension.includes('pdf')) {
                                /** 
                                * ?Pdf enhancement tools*/
                                let portnum = 0;
                                findEmptyPort()
                                    .then((port) => {
                                        console.log('Port returned by findEmptyPort:', port);
                                        if (port > 0) { portnum = port; }
                                    })
                                    .catch((err) => {
                                        console.error('Error:', err);
                                    });
                                console.log(portnum);
                                if (portnum == 0) { portnum = 3001 }
                                const url = `http://localhost:${portnum}/${fileName}`;
                                ws.send('PDF:' + url);
                                /**  
                                * ? S.U function*/
                            }
                            else { const query = `Info?:Acceptable file extensions:[Image:png,jpg,jpeg,gif Video:mp4,avi,webm]+/+Color:yellow+`; ws.send(query); }
                        }
                    });
                    setTimeout(() => { fs.unlink(`${emailadress}/${fileName}`, (err) => { if (err) { console.error('Error deleting file:', err); } else { } }); }, 60000);
                }, 2000);
            }
        }
        catch (err) {
            message = message.toString();
            let sign = ''; sign = message; const signupRegex = /S\((.+)\)U/g;
            const complateRegex = /%4\?4%Code:(.+)%4\?4%Email:(.+)%4\?4%/g;
            const loginRegex = /\/Email:([^?]+)\?Password:(.+)Finit%/g;
            /** 
             * ?Acount area*/
            if (signupRegex.test(sign)) {
                const nameRegex = /Name:([^+]+)\+Email:/g; const emailRegex = /Email:([^+]+)\+Password:/g; const passwordRegex = /Password:([^+]+)\+Profile:/g; const profileRegex = /Profile:(.+)\)Ulas/g;
                let name = ''; let email = ''; let password = ''; let profile = ''; let letter = ''; let leternum = 0;
                letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; leternum = Math.floor(Math.random() * 26); let oneL = letter.charAt(leternum); let one = Math.floor(Math.random() * 10) + 1;
                let two = Math.floor(Math.random() * 10) + 1; let three = Math.floor(Math.random() * 10) + 1; let four = Math.floor(Math.random() * 10) + 1; let five = Math.floor(Math.random() * 10) + 1;
                const code = `${oneL}-${one}${two}${three}${four}${five}`;
                sign = sign.replace(nameRegex, (match, names) => { name = names; return match; });
                sign = sign.replace(emailRegex, (match, emails) => { email = emails; return match; });
                sign = sign.replace(passwordRegex, (match, passwords) => { password = passwords; return match; });
                sign = sign.replace(profileRegex, (match, profiles) => { profile = profiles; return match; });
                let ok = email.trim();
                if (ok) {
                    let text = `Name:${name}%+/Email:${email}%+/Password:${password}%+/`;
                    fs.writeFile(`waited_acount/${code}.txt`, text, (err) => { if (err) { console.warn(err); } });
                    const file = Buffer.from(profile, 'base64');
                    fs.writeFile(`profil/${email}.png`, file, (err) => { if (err) { console.warn('Profil picture not saved'); } });
                }
            }
            else if (complateRegex.test(sign)) {
                let code = ''; let email = '';
                const codeRegex = /%4\?4%Code:(.+)%4\?4%Email/g; const emailRegex = /%4\?4%Email:(.+)%4\?4%/g;
                sign = sign.replace(codeRegex, (match, one) => { code = one; return match; });
                sign = sign.replace(emailRegex, (match, two) => { email = two; return match; });
                let name = ''; let password = ''; let emails = '';
                fs.readFile(`waited_acount/${code}.txt`, 'utf8', (err, data) => {
                    if (err) { let quick = 'Wrong code!'; let color = 'red'; const query = `Info?:${quick}+/+Color:${color}+`; ws.send(query); }
                    else {
                        const nameRegex = /Name:(.+)\%\+\/Email/g;
                        data = data.replace(nameRegex, (match, names) => { name = names.trim(); return match; });
                        const emailRegex = /Email:(.+)\%\+\/Password/g;
                        data = data.replace(emailRegex, (match, one) => { emails = one.trim(); return match; });
                        const passwordRegex = /Password:(.+)\%\+\//g;
                        data = data.replace(passwordRegex, (match, two) => { password = two.trim(); return match; });
                        if (email == emails) {
                            if (name) {
                                if (password) {
                                    if (!fs.existsSync(`./SQL/${email}.su`)) {
                                        fs.writeFile(`./SQL/${email}.su`, `Name:⁂${name}⁂Email:⁂${email}⁂Password:⁂${password}⁂`, (err) => { if (err) { let quick = 'Please retry...'; let color = 'red'; const query = `Info?:${quick}+/+Color:${color}+`; ws.send(query); } });
                                        let quick = 'Signup?'; ws.send('Wait:10000'); const query = `/&Email:${emails}+Name:${name}+&/`; ws.send(query);
                                    }
                                    else {
                                        let quick = 'E-mail used!'; let color = 'red'; const query = `Info?:${quick}+/+Color:${color}+`; ws.send(query)
                                    }
                                    fs.unlink(`waited_acount/${code}.txt`, (err) => { if (err) { console.error('Error deleting file:', err); } });
                                }
                            }
                        }
                    }
                });
            }
            else if (loginRegex.test(sign)) {
                let email = ''; let password = '';
                const emailRegex = /\/Email:([^?]+)\?Password:/g; const passwordRegex = /\?Password:(.+)Finit%/g;
                sign = sign.replace(emailRegex, (match, emails) => { email = emails; return match; });
                sign = sign.replace(passwordRegex, (match, passwords) => { password = passwords; return match; });
                ws.send(`Info?:Please wait+/+Color:green+`);
                fs.readFile(`./SQL/${email}.su`, 'utf8', (err, data) => {
                    if (err) {
                        let quick = 'Email not found!'; let color = 'red'; const query = `Info?:${quick}+/+Color:${color}+`; ws.send(query);
                    }
                    else {
                        const acountRegex = /Name:⁂([^⁂]+)⁂Email:⁂([^⁂]+)⁂Password:⁂([^⁂]+)⁂/g;
                        data.replace(acountRegex, (match, Nam, Ema, Pass) => {
                            if (match) {
                                if (password == Pass) {
                                    let quick = 'Welcome'; let color = 'green'; const query = `Info?:${quick}+/+Color:${color}+`; ws.send(query); let log = `SET(%Email:${email}/Name:${Nam}%)VALUE`; ws.send(log);
                                }
                                else {
                                    let quick = 'Wrong password'; let color = 'red'; const query = `Info?:${quick}+/+Color:${color}+`; ws.send(query);
                                }
                            }
                            else {
                                let quick = 'Acount is broken!'; let color = 'red'; const query = `Info?:${quick}+/+Color:${color}+`; ws.send(query);
                            }
                        });
                    }
                });
            }
            else if (sign.startsWith('Save:')) {
                let email = ''; let child = '';
                const emailRegex = /Email:([^+]+)\+/g; const childRegex = /Child:(.+)Finaly/g;
                sign = sign.replace(emailRegex, (match, emails) => { email = emails; });
                sign = sign.replace(childRegex, (match, childs) => { child = childs; });
                fs.writeFile(`acount/${email}.txt`, child, (err) => { if (err) { ws.send(`Info?:Error!Please retry+/+Color:red+`) } });
            }
            else if (sign.startsWith('EmailLoader:')) {
                let email = sign.slice(12);
                fs.readFile(`acount/${email}.txt`, 'utf8', (err, data) => {
                    if (err) { }
                    else { if (data) { ws.send('Data:' + data); } }
                });
            }
            /**  
             * ?Acount area */
            else {
                let Maxquery = 3; let DataSU = []; let returnedOrginal = '';
                const apiKey = 'AIzaSyDgIUU6T4PoqNrVy9FVtvs7W4VZDmxH1Bk'; const searchEngineId = 'f426500cb44ff4fc6'; let BridgeReply = '';
                let autoquery = ''; message = message.slice(2); autoquery = message.replace(/\n/g, ''); let email = '';
                const emailRegex = /email\+([^+]+)\+txt/g; autoquery = autoquery.replace(emailRegex, (match, emailtxt) => { email = emailtxt; return ''; });
                setTimeout(() => { Asks(autoquery); }, 1000);
                const time = new Date; const year = time.getFullYear(); const month = time.getMonth() + 1; const day = time.getDay();
                const folderName = `./User/${email}/SuperUser`; let fileName = `./User/${email}/SuperUser/${year}_${month}_${day}/memory.sup`;
                if (!fs.existsSync(`./User/${email}`)) { fs.mkdirSync(`./User/${email}`); console.log(`\x1b[32mFolder "${email}" created successfully!\x1b[0m`); }
                if (!fs.existsSync(folderName)) { fs.mkdirSync(folderName); console.log(`\x1b[32mFolder "${folderName}" created successfully!\x1b[0m`); }
                else { console.log('\x1b[31mFolder is not createable or folder is exists.\x1b[0m'); };
                const currentDate = new Date(); const midnight = new Date(currentDate); midnight.setHours(24, 0, 0, 0);
                const nextDay = new Date(midnight.getTime() + 1000);
                function runAtMidnight() {
                    Maxquery = 3; const Folderdate = new Date; const folderSync = `./User/${email}/SuperUser/${Folderdate.getFullYear()}_${Folderdate.getMonth() + 1}_${Folderdate.getDay()}`;
                    if (!fs.existsSync(folderSync)) { fs.mkdirSync(folderSync); console.log(`\x1b[32mFolder "${folderSync}" created successfully!\x1b[0m`); }
                    fileName = `./User/${email}/SuperUser/${Folderdate.getFullYear()}_${Folderdate.getMonth() + 1}_${Folderdate.getDay()}/memory.sup`;
                } runAtMidnight();
                const timeUntilMidnight = nextDay.getTime() - currentDate.getTime(); setTimeout(runAtMidnight, timeUntilMidnight);
                const filename = [];
                function getFiles(dir) { const files = fs.readdirSync(dir); return files.map(file => { return { name: filename.push(path.parse(file).name) }; }); }
                getFiles(`./User/${email}/SuperUser`); let flength = filename.length;
                async function readData() {
                    try {
                        for (let i = 0; i < flength; i++) { const dataused = await fsp.readFile(`./User/${email}/SuperUser/${filename[i]}/memory.sup`, 'utf-8'); DataSU.push(dataused); }
                    } catch (err) { console.error(err); }
                } readData();
                function Asks(returned) {
                    returnedOrginal = returned;
                    let expressionOK = ''; let question = ''; let fix = ''; question = returned; let questionA = []; const isMisspelled = SpellChecker.isMisspelled(returned);
                    if (returned.startsWith('--notfix--')) { question = question.replace(/--notfix--/g, ''); auto(question) } else {
                        if (isMisspelled) {
                            const expression = question.split(" "); expression.forEach((expF) => { questionA.push(expF) }); const aLength = questionA.length;
                            for (let i = 0; i < aLength; i++) { if (SpellChecker.isMisspelled(questionA[i])) { fix = SpellChecker.getCorrectionsForMisspelling(questionA[i])[0]; } else { fix = questionA[i] } expressionOK = expressionOK + ' ' + fix } question = expressionOK;
                            console.log(`\x1b[32mFixed:${question}\x1b[0m`); let questionL = question.toLowerCase(); auto(questionL.slice(1).replace(/\s+/g, ' '));
                        } else { question = returned; let questionL = question.toLowerCase(); auto(questionL.replace(/\s+/g, ' ')) }
                    }
                    function auto(QueryAuto) {
                        const queryRegex = new RegExp(`Query:⁂${QueryAuto}⁂Reply:⁂([^⁂]+)⁂`, 'g');
                        fs.readFile(fileName, 'utf8', (err, dataEngineer) => {
                            if (err) { fs.writeFile(fileName, '', (error) => { if (error) { console.log('\x1b[31mMemory error!\x1b[0m'); } }) }
                            if (queryRegex.test(dataEngineer)) {
                                const matchedTexts = []; dataEngineer.replace(queryRegex, (match, replys) => { matchedTexts.push(replys); return match; });
                                const randomIndex = Math.floor(Math.random() * matchedTexts.length); const selectedText = matchedTexts[randomIndex]; Maxquery = Maxquery - 1;
                                if (Maxquery == 0) { Query(); return ''; } else { console.log(`\x1b[32m${selectedText}\x1b[0m`); ws.send(selectedText) }
                            }
                            else if (queryRegex.test(DataSU)) {
                                const matchedTexts = []; let DataS = DataSU.toString();
                                DataS.replace(queryRegex, (match, replys) => { matchedTexts.push(replys); return match; });
                                const randomIndex = Math.floor(Math.random() * matchedTexts.length); const selectedText = matchedTexts[randomIndex]; Maxquery = Maxquery - 1;
                                if (Maxquery == 0) { setTimeout(() => { Query() }, 1800000); return ''; } else { console.log(`\x1b[32m${selectedText}\x1b[0m`); ws.send(selectedText) }
                            }
                            else { const SUlang = new SU_LANGUAGE; SUlang.SU_Dep(question); }
                        });
                    }
                }
                class USE {
                    Wikipedia(SearchW) {
                        setTimeout(() => {
                            const apiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${SearchW}`;
                            fetch(apiUrl)
                                .then(response => response.json())
                                .then(inf => {
                                    const shortDescription = inf.extract;
                                    const image = inf.originalimage.source;
                                    if (shortDescription) { const reply = new USE; reply.Reply(shortDescription, 'Wikipedia', image); }
                                    else { SearchW = ''; const reply = new USE; reply.Reply('Not found!', 'Wikipedia'); }
                                })
                                .catch(bug => { const reply = new USE; reply.Reply('Not found!', 'Wikipedia'); });
                        }, 1000);
                    }
                    WikipediaALL(SearchWA) {
                        const apiUrl = `https://en.wikipedia.org/wiki/${SearchWA}`;
                        async function result() {
                            try {
                                const browser = await puppeteer.launch({ headless: "new" }); const page = await browser.newPage();
                                await page.goto(apiUrl, { waitUntil: 'domcontentloaded' }, { timeout: 0 });
                                const element = await page.$('#mw-content-text');
                                if (element) {
                                    const text = await element.getProperty('innerText');
                                    const textValue = await text.jsonValue(); const reply = new USE; reply.Reply(textValue, 'Wikipedia');
                                } else { const reply = new USE; reply.Reply('Not found!', 'Wikipedia') }
                            } catch (err) { console.log(err) }
                        } result();
                    }
                    Google(SearchG) {
                        const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${SearchG}`;
                        fetch(url)
                            .then(response => response.json())
                            .then(data => {
                                var { items } = data;
                                if (data && data.items && Array.isArray(data.items)) {
                                    async function Info() {
                                        try {
                                            const browser = await puppeteer.launch({ headless: 'new' });
                                            const page = await browser.newPage(); var length = 1;
                                            for (var i = 0; i < length; i++) {
                                                var link = items[i].link; await page.goto(link, { waitUntil: 'domcontentloaded' }, { timeout: 0 });
                                                page.setDefaultNavigationTimeout(0); const the = await page.$$eval('html', anchors => anchors.map(html => html.innerHTML));
                                                if (the) { const text = await page.$$eval('html', anchors => anchors.map(html => html.innerText)); const reply = new USE; reply.Reply(text, 'Google'); } else { Info(); }
                                            } await browser.close();
                                        } catch (err) { console.log(err) }
                                    } Info();
                                }
                            });
                    }
                    File(SearchF) {
                        const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${SearchF}`;
                        fetch(url)
                            .then(response => response.json())
                            .then(data => {
                                var { items } = data;
                                try {
                                    async function lettry() {
                                        const browser = await puppeteer.launch({ headless: "new" }); const page = await browser.newPage(); const allLinks = []; var length = items.length;
                                        for (var i = 0; i < length; i++) {
                                            try { var link = items[i].link; await page.goto(link, { waitUntil: 'domcontentloaded' }, { timeout: 10000 }); page.setDefaultNavigationTimeout(0); const hrefsOnPage = await page.$$eval('a', anchors => anchors.map(a => a.href)); allLinks.push(hrefsOnPage); } catch { }
                                        }
                                        let Filelink = allLinks.toString(); try {
                                            setTimeout(() => {
                                                let filemime = ['doc', 'docx', 'log', 'msg', 'odt', 'pages', 'rtf', 'tex', 'txt', 'pdf', 'eml', 'csv', 'dat', 'key', 'mpp', 'ppt', 'pptx', 'rpt', 'vcf', 'xml', 'aif', 'iff', 'm3u', 'm4a', 'mid', 'mp3', 'mpa', 'wav', 'wma', '3g2', '3gp', 'asf', 'avi', 'flv', 'm4v', 'mov', 'mp4', 'mpg', 'rm', 'srt', 'swf', 'vob', 'wmv', '3dm', '3ds', 'max', 'obj', 'bmp', 'dds', 'gif', 'heic', 'jpg', 'png', 'psd', 'pspimage', 'tga', 'thm', 'tif', 'tiff', 'yuv', 'ai', 'eps', 'ps', 'svg', 'indd', 'pct', 'pdf', 'xlr', 'xls', 'xlsx', 'accdb', 'db', 'dbf', 'mdb', 'pdb', 'sql', 'apk', 'app', 'bat', 'cgi', 'com', 'exe', 'gadget', 'jar', 'wsf', 'bmp', 'gif', 'ico', 'jpeg', 'png', 'psd', 'tiff', 'swf', 'html', 'asp', 'cer', 'cfm', 'css', 'htm', 'js', 'jsp', 'part', 'php', 'rss', 'xhtml'];
                                                let links = ''; const linkRegex = new RegExp(`https:([^,]+)\\.${filemime},`, 'g'); links = Filelink.match(linkRegex);
                                                for (let i = 0; i < links.length; i++) {
                                                    let linker = ''; linker = links[i]; const reply = 'Filenodefetchxqx:304' + `++${filemime}++` + linker;
                                                    const reply2 = new USE; reply2.Reply(reply, 'File');
                                                }
                                            }, 3000)
                                        } catch { const reply = new USE; reply.Reply('Not found!', 'File'); }
                                        await browser.close();
                                    } lettry();
                                } catch { }
                            });
                    }
                    CodeModifier(code) {

                    }
                    Youtube(SearchY) {

                    }
                    ImageTool(ImageData) {

                    }
                    PDFTool(PDFData) {

                    }
                    VideoTool(VideoData) {

                    }
                    Remember(alarms, note) {
                        if (note) {
                            setTimeout(() => {
                            }, alarms);
                        }
                    }
                    Weather(from, time) {
                        async function wheater() {
                            let link = `https://www.google.com/search?q=${from}weather`;
                            const browser = await puppeteer.launch({ headless: "new" }); const page = await browser.newPage();
                            await page.goto(link, { waitUntil: 'domcontentloaded' }, { timeout: 0 }); await page.waitForNavigation();
                            const element = await page.$('#wob_wc'); const text = await element.getProperty('innerText');
                            const textValue = await text.jsonValue(); const reply = new USE; reply.Reply(textValue, 'Weather');
                        } wheater();
                    }
                    Reply(value, where, add) {
                        if (value && where) { const vals = value.replace(/\n/g, ' '); new SU_LANGUAGE(vals, where, add); }
                    }
                    ThisName() {
                        return 'SuperUser prototype v 1.0.3';
                    }
                }
                class SU_LANGUAGE {
                    constructor(a, b, c, d) {
                        this.a = a; this.b = b; this.c = c; this.d = d;
                        if (this.d) { ws.send(this.d) }
                        if (this.a && this.b) {
                            if (this.a == 'Not found!') { }
                            else if (this.a) {
                                if (this.b == 'Wikipedia') { ws.send('Image:' + this.c); ws.send(this.a); }
                                else { ws.send(this.a) }
                            }
                        }
                    }
                    SU_Dep(s) {
                        let ss = ''; ss = s.toLowerCase(); 
                            const dataRegex = new RegExp(`Query:⁂([^⁂]+)⁂Reply:⁂([^⁂]+)⁂`, 'g');
                            let maxscore = 0; let I = 0; let DataParse = []; let DataString = DataSU.toString(); DataString.replace(dataRegex, (match, one, two) => { DataParse.push(match) });
                            function similarty(value, othervalue, index) { if (jaccard.jaccardSimilarity(value, othervalue) >= maxscore) { maxscore = jaccard.jaccardSimilarity(value, othervalue); I = index; console.log(DataParse[I]) } }
                            const length = DataParse.length;
                            for (let i = 0; i < length; i++) {
                                setTimeout(() => {
                                    similarty(ss, DataParse[i].replace(dataRegex, (match, query, reply) => { return query; }), i); if (length - 1 == i) {
                                        DataParse[I].replace(dataRegex, (match, query, reply) => {
                                            new SU_LANGUAGE('', '', '', reply);
                                        });
                                    }
                                }, 1000);
                            }
                        }
                }
            }
        }
    });
});
server.listen(3000, () => {
    console.log(`\x1b[36mServer is runing...\x1b[0m`);
});
