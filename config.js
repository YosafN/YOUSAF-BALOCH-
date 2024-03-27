const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="nafsatsoufi@gmail.com"
global.location="Nairobi,KENYA."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/nafsatsoufi/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaWrCuH35fLuVP2iCc2R";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaWrCuH35fLuVP2iCc2R" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "254758516840" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254758516840";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/13ac9b94f58fae3023e5c.jpg.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_57_03_27_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiSUlDVVNQUWJrcmI0eDdOY3k0UDBBaEk5VFo5aFRaUE41NjJMRGxITHVYaz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImpRNnhHc0Y3T09LanVLM2EvQW1YTjBvQ3QwT2xCV2tNQ29LcmJIeFdsRHM9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQ0RSR1BkVVQrcVVrdmwwcm1UQ1BVWUJldFdzZ0dFcThDTlBkWFZBVGFGWT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkFwcE81TW8wMnBBQll0VW0xNURVNjl3UHJZUnhwQ1QySVMybFVzc2NQeDA9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiTUE2Ynd6cXlaTWJXUnpzcDRIbGNMeTk3ME9Zc2NDNVEybXNKYW54Q24wRT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIk9KL0NaUmFRUU9rVW0rR2F1WFp3TGcxUWVnVmFlRzhJamI1dXUrWVV4bms9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ1QkUxMyttUE14VWh5R2lSY3RCOHJlcEIrK0xQR25jSWNYTi9vSU9tMkU4PVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNTNOZDRHZWpUZ3pEbEFIL01iYU90YStaYUhldndlbEJacTg4ZVFwdk8xdz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJYTnV2V3VzMU9MaVdSVFltOG8zUUp2ZUZFdzlIWnVxdmJVMG5wbmwvdSttaHlZTjBoYmd0VVpqeUEwWmNDaGF0ZFhZYU90UHpWVVJGdFVGRWh3T09qZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjQ0LFwiYWR2U2VjcmV0S2V5XCI6XCJjTUg1R2xTZ3RCRWNla0dwRVVDQ0o0Ny92blM0VkRzbE4ya3ptN2RrclpzPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjU0NzU4NTE2ODQwQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIkFENkVCNUQzRDc0OUY1Qzk3NUEzNDgwQzRDNUQyNEFFXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTE1MTU0NzB9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjU0NzU4NTE2ODQwQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjAxMjhFMTI2NTVGMTcxQ0U4QjY2OTc5ODYxNDE5NDlFXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTE1MTU0NzF9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJVR29Da1NqZlRiZVg3TmRBYmRfM2xBXCIsXCJwaG9uZUlkXCI6XCJkMjk0MmUzNy00MGE2LTQ3NWQtODBjZS1hYzdjY2Q0YTUwNTVcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIk9tVWUvLzdyVkFaVkpQbHFCcURZNi9SN3Zocz1cIn0sXCJyZWdpc3RlcmVkXCI6dHJ1ZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJPMUwxakkvUE8yV1VzUm1vNXlkVDVlcG4vOTQ9XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJwYWlyaW5nQ29kZVwiOlwiM0U3NjY2RVRcIixcIm1lXCI6e1wiaWRcIjpcIjI1NDc1ODUxNjg0MDo1QHMud2hhdHNhcHAubmV0XCIsXCJuYW1lXCI6XCJNYWxkaXZlc1wiLFwibGlkXCI6XCIyNzE5MzYyOTA1ODY2OTU6NUBsaWRcIn0sXCJhY2NvdW50XCI6e1wiZGV0YWlsc1wiOlwiQ0pLd3pQd0JFTVhPanJBR0dBRWdBQ2dBXCIsXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6XCJCODFvSzM5WWhWOWxnWFFRYS9aOCtkbWdRRWdqRndIdENzWUg5TXNRQ0c0PVwiLFwiYWNjb3VudFNpZ25hdHVyZVwiOlwiYmRiTUtaQUZlSitzMjd4Z1NWMkxReHZiRmlvdGQ5YkNkeFRPNSs1WklKRlVOeWlPOGZoQW1KaWFkUUkvZDNubFhDc0ZUd3Z0d2N5VkVlNXVRRFVrRHc9PVwiLFwiZGV2aWNlU2lnbmF0dXJlXCI6XCJlYmdHS3YrRHVrL3Q2d2pQaGlnRVhBdEMxUjV2cm1TMGVwTVptTG9IYmFtNUx5NW1WZzZnVkgzQjBmWURXZ2FxZkJhblh6SFo3SjlTd25sQ0VncnJnQT09XCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiMjU0NzU4NTE2ODQwOjVAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCUWZOYUN0L1dJVmZaWUYwRUd2MmZQblpvRUJJSXhjQjdRckdCL1RMRUFodVwifX1dLFwicGxhdGZvcm1cIjpcInNtYmFcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MTE1MTU0NjUsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBSmFoXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSmFoLmpzb24iOiAie1wia2V5RGF0YVwiOlwieXBNMFk2cDEzeEF3ZFN6cVJmblB5OS8zelRMUHpYbldNOGpjbVA5MjFCbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1Mjk3MzM2NTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxMTUxNTQ3MDMyNVwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©amaldives²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "maldy-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Mal-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x MaldY",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "53c914a6-aeb2-402b-b838-0165bc8fcf1a",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
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
