const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://vacaja:<1234>@cluster0.gh3syzk.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://shor.by/MoreAccounts";
global.website=process.env.GURL || "https://shor.by/MoreAccounts" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://mallucampaign.in/images/img_1707943853.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255693440878;




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255693440878";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "mpatch-1",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©Vinei_Adobe" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Vinei_TV",
  packname: process.env.PACK_NAME || "Vinei",
  botname : process.env.BOT_NAME  || "Vinei Bot",
  ownername:process.env.OWNER_NAME|| "It'x Adobe",

  sessionName:process.env.SESSION_ID || "SUHAIL_00_55_02_20_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiaU9pQlFqWC9VVklLT0dYb25TdVpDbWZmMHRnMDFTOHZNbS9DOFBIaXdVcz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjlRaWRkU1ZKNFZaQlRURmlqd0lUYkU4L0hzdkd1aDJIaTJHTS9ZRG56bE09XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwic0RCUzNYMkxGSkdyaVJaRFRxNE1hR1lINWpFT3ZURWYzMGhVeWp5aHNrQT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjcwQytHSm5vbkFOcWJZNVdVV0RUZ0x0alZMaDlySmdIcGlHY0xleVVFRVk9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZUQra3pHNHZ5d3FUYXUzbmhGMDgyTDNva1VWay80UE1WSzkxZGhMaGZYaz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlREeEFyckloMzB4K2Vrekg1bmZTUktMbThtVXowQkNndkJJbjlPWHJjVlU9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ1Q1NwZlVuR3pHeTFYVm11WFlTeHlSdUt4NW4yNWFCSmtib0tYS1ZWTTJrPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwidFZWVDZCS012NTlpTFNjL0hGcmROYnNhUTRrdmJuY3BSUGtxTDFUd3NXND1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJxWWhMRVFQSXhMRVJNc1FXMVhORXVVSkNoenFnR0tpUFdLejRNRyttZXFVT3JjRXNKelhqUW1WMnRkeVptM2dpZ20zWjh5eklEU0RFcC9UNXp6cWhqZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjE4LFwiYWR2U2VjcmV0S2V5XCI6XCJjclc4VHJhMHdEeHFvQTdvZHJPT2ZLcnBNb1dRRFM3UVVNZlF1TEdDZWRVPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjU1NjkzNDQwODc4QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjFEMThCRDlENjgwOUUyMUQyNTQ4NjYzNjdFQTZGRkQyXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MDgzOTA1Mjh9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjU1NjkzNDQwODc4QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIkVBMDUzNTcxRDYyQjg5RjVGNTI1RTI4ODMzRjhGNjNGXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MDgzOTA1Mjl9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOnRydWV9LFwiZGV2aWNlSWRcIjpcIm5DSlhUdGZfUlZXSnYxenNuc0JJeWdcIixcInBob25lSWRcIjpcIjU4NzRhZmE4LWEzNWEtNDRmYS04M2VmLWU3OTQyNWZmM2I5ZlwiLFwiaWRlbnRpdHlJZFwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiRGM4UnFwUVdVb3RLYUYrM016dHFhSDFhVnIwPVwifSxcInJlZ2lzdGVyZWRcIjp0cnVlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIklzdnhJSkh1OUJPa1hkbDdPcVI3RmpMaDhTYz1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcInBhaXJpbmdDb2RlXCI6XCJRWTc5NUc1NVwiLFwibWVcIjp7XCJpZFwiOlwiMjU1NjkzNDQwODc4OjVAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiOTc4NzgzNDUyNzc1MTM6NUBsaWRcIixcIm5hbWVcIjpcIlZpbmVpXCJ9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNPR2t6cjBIRVB2d3o2NEdHQUVnQUNnQVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiSDVyQm8zZ0RncEErVCtDaTdNZ1VoMFNpSzlabVIwUDFjaUdVbjhCWnd5TT1cIixcImFjY291bnRTaWduYXR1cmVcIjpcIjN0ekhQUXRwZ1RiVDVKSDB2K2JENkRLaDFUeWZTMmw3dGRlT09xMml5QkdYbDl4c0Zha1pxREVNKzBmL1pYNFZkcklHWDZUYXhUU1llTW5xTlJ3R0J3PT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwiRkVvdmhtbGpzK2tiKzBDcHl3eGtqZ0dtR2hYVEFid1dNbVIrL2dXMVhBUDJGYXRrR3lIc2V5c2JBMG04YVIyZFhSdklUS0VwYy84RXNvR0xJYnlrZ0E9PVwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjI1NTY5MzQ0MDg3ODo1QHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQlIrYXdhTjRBNEtRUGsvZ291eklGSWRFb2l2V1prZEQ5WElobEovQVdjTWpcIn19XSxcInBsYXRmb3JtXCI6XCJhbmRyb2lkXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzA4MzkwNTI2LFwibXlBcHBTdGF0ZUtleUlkXCI6XCJBQUFBQUpDa1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpDay5qc29uIjogIntcImtleURhdGFcIjpcIkRXY3M5RGREVE9NZUZDd2Rkd1hqWkNDaWQ5UEZybExJeGJRaFZRbnNFemc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAwODI1NzEyMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "c8935065-5f47-4f90-b3e5-3f04bb934692",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "adobe12",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "VINEI",



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
 
