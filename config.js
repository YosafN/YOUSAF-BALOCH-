const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="reu12th@gmail.com"
global.location="Lagos,Nigeria."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://reu12th:70MdPF6sgyr09FDB@reu12th.24zvdy2.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://wa.link/xb2qzt";
global.website=process.env.GURL || "https://wa.link/xb2qzt" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://www.journaldugeek.com/app/uploads/2021/12/template-jdg-96-2.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "2348145461867" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348145461867";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "$",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©𝔰𝔱𝔢𝔦𝔫 - 𝔪𝔡" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),

  author : process.env.PACK_AUTHER|| "𝔰𝔱𝔢𝔦𝔫 - 𝔪𝔡",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "𝔰𝔱𝔢𝔦𝔫 - 𝔪𝔡",
  ownername:process.env.OWNER_NAME|| "𝔰𝔱𝔢𝔦𝔫",

  sessionName:process.env.SESSION_ID || "SUHAIL_20_23_02_25_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiTUIvRENFY291cVhNdzM3a0VLUTVENkk0ZGJLSFAzUHRhTjQ3TnpDTzNYcz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlZQMW9GMW50end6eFEwTDdVa0lzdStVSGk4MVRzWWxQWEhpdmx0L2o5bm89XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiS0hrOHJvMldjV3gvWTR1T2tCSTlZRmFnSkhXdFI5SVNPQkdwTkhKMFluaz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIm5uWE12T0JMRlVkTHM5R3FJa0FpQjV0bnJhOEt5ZE1MQkY3dDB1T2ZUbUU9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwic1BJazZmVkI4R3IzOENZVFA0NG9SYnJINGZ0bWlleDljVk9naE9XYmxFYz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIitoY01Ea3dnc0szSU5nVWdHbFplMkRadGNycy9KdGx5NHY0TDBnTEhNRUU9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJDSnVmbmQvWnpzNjFNUFpYdkZHVncrQ05aZlBzZUtCMTNtZGtxZnJBR1VJPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwieUM3VFJ3a1lyZEVMMllSTElSYTRtb3dDVTd0VHpycDQ1Wm1relJyUlhqVT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJFSWk5MzFhOWlRWEVsMk1kd0tXb2c0ZzlCZmlweWY5WkNEbDU5NTg1dE9uVVRkQWF3a2xGS1JYUzRwL0RQa0VxbHViQTJiL0hWZnJ5K0ZOaFVaRVVEZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjUyLFwiYWR2U2VjcmV0S2V5XCI6XCJ3ZTY4U3Q1YVh2bEY4bFFpRDA0RWNtaG9ZemtZeGVkN01XdkhTWnFCMmxNPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwicDFyOEw5bnVRUS1zV0lndV8zeldfZ1wiLFwicGhvbmVJZFwiOlwiMjg2YWNlZjMtZWFlYi00ZmM3LWEyZDQtYTUyNDlhZTVlNjFmXCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCI0Y2IzeWdSbFQ3MzI3S296ZlUycEdUTkNkY1k9XCJ9LFwicmVnaXN0ZXJlZFwiOmZhbHNlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIisxQ2FvODFmbk84MTE4amdDU3VMOTlmanQrUT1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDSkdmaElNREVKakQ3cTRHR0FnZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIkVpeU9kVi9rWVA3TzJmVVRRcnh3V1pDZ0F0TUVOSTdpOHM0Njh3dmVVaEU9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJrbGdsMUVWR1pBTjhLVFM5V25kanFESWpkdHpVdE9QS1k3QXdOSlpQSG1FeDl3Y2RRSVY1R2Y0UU93Ti9ydnV6YWRkQWQ1Q3BxaEhvUlkzc2hOdDdDQT09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcIlJ3Z3IyUUMyQmJqazczT0RrV3VWeENkT2IzbVZ6Ym80U1c5Z3RaZ0VqK1R4WWo1NHM4RFAyUlc3dzlNQVlBT0RCdThFTm15TXZaUDBFbVFwWEVhb0FBPT1cIn0sXCJtZVwiOntcImlkXCI6XCIyMzQ4MTQ1NDYxODY3Ojk2QHMud2hhdHNhcHAubmV0XCIsXCJsaWRcIjpcIjU0NTcyMDA1NDk5MDc2Ojk2QGxpZFwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjIzNDgxNDU0NjE4Njc6OTZAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCUklzam5WZjVHRCt6dG4xRTBLOGNGbVFvQUxUQkRTTzR2TE9Pdk1MM2xJUlwifX1dLFwicGxhdGZvcm1cIjpcImlwaG9uZVwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcwODg5MjU3Mn0iCn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "e86BtygJoRU8M5H6GP8CQ2AC",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "16d5fea3ec974a94db8fa6b173eb81a2",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "GOJO SATURO",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })


// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",

