import { chromium } from "@playwright/test";
const browser = await chromium.launch({ executablePath:"/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
  args:["--headless=new","--use-gl=swiftshader","--enable-webgl","--ignore-gpu-blocklist"] });
const page = await browser.newPage({ viewport:{width:1000,height:800} });
const errors=[]; page.on("pageerror",e=>errors.push(String(e)));
await page.goto("http://127.0.0.1:8000/",{waitUntil:"load"});
await page.waitForFunction(()=>!!window.__nanobotMetrics,null,{timeout:30000});
const gui=()=>page.evaluateHandle(()=>Array.from(document.querySelectorAll(".lil-gui")).find(g=>g.querySelector(":scope > .title")?.textContent==="Comandos"));
async function setName(v){const h=await gui();await h.evaluate((el,val)=>{const i=el.querySelector(".controller.string input");i.value=val;i.dispatchEvent(new Event("input",{bubbles:true}));i.dispatchEvent(new Event("change",{bubbles:true}));},v);}
async function click(n){const h=await gui();await h.evaluate((el,name)=>{Array.from(el.querySelectorAll(".controller.function")).find(c=>c.querySelector(".name")?.textContent===name)?.querySelector("button")?.click();},n);}
async function panel(t){return page.evaluate((w)=>{const f=Array.from(document.querySelectorAll(".lil-gui")).find(g=>g.querySelector(":scope > .title")?.textContent===w);if(!f)return"(no)";const ds=Array.from(f.children).filter(c=>c.tagName==="DIV"&&!c.classList.contains("children")&&!c.classList.contains("title"));return ds.length?ds[ds.length-1].innerText:"(vacio)";},t);}
async function done(){const c=await panel("Cola de tareas");return /^(?:(?:exoesqueleto|relleno|color \d+): done\n?)+$/.test(c.trim());}
const png=Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=","base64");
await page.locator('input[type="file"]:not([data-scan-slot])').setInputFiles({name:"o.png",mimeType:"image/png",buffer:png});
await setName("persona"); await click("Formar objeto");
await page.waitForTimeout(2500);
await page.screenshot({path:"/tmp/tipos-1-exoesqueleto.png"});
console.log("EXOESQUELETO ->", JSON.stringify(await panel("Tipos de bot")));
for(let i=0;i<60;i++){ await page.waitForTimeout(3000); if(await done()) break; }
await page.screenshot({path:"/tmp/tipos-2-completo.png"});
console.log("COMPLETO ->", JSON.stringify(await panel("Tipos de bot")));
console.log("ERRORES:", errors.length?errors:"ninguno");
await browser.close();
