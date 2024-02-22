const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️", 
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'oladips",

  sessionName:process.env.SESSION_ID || "", //  SUHAIL_18_44_02_19_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwib0YvUDh3R1FSMG44bU1jeHBBa3IvMVJ5dEFLMUVPQVdOYjUvZERkTlgxWT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjBiRndGVzZUdGpzWGkwTFpqVmJIMGNhNlM2MnNWV05iT01vV3dlYVkxMWc9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiYUVOT2dWeVZST2xHWmVNcHEwNnpseFp3djA2RTM2OGtEbHRXRkR3N3ExMD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJUWWNrMGRMVEZkQ0w1ZHo0M0kxSHM4cDFkakg2OFdVVnRXUm8vaDFnaFk9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiUUVJY2dEYndiRFdTOUlRRnVzYUFERWZubStxdGpjSGpRMFMxVFZpT0NGQT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIndUc1ozc1hpMU93NWsvVTRnUlI3VWdEWnFMNmpZSU9wVkx1eXRUVXYwM2M9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJLQUpWWjJLYk9FY002NG52TnNyNENyNkNSaXNZVkU5MWxVYUxEVFliKzBJPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiSGhVcUZ5VGZBTFhDUW0zNWJ2NGg0WU9SMkJCTWp4dDF4OWJPTzdxL2FrST1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCI1T0lSUlY2VEJTTXVVbVVvTGpGc3RtSXlPZnM2VmFGcHJMS0hOL0dVYUhOQk9HYTZZbG1HRml5YWFYbzdGNWFIa0p6OE9Sek9yZ2l5RTdITU1Nb0JnQT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6NjEsXCJhZHZTZWNyZXRLZXlcIjpcIjBGSysxNTl4S3VSRE44bUd2TkRqNjlKUVh6eE1Oak05QkswOHNLcXBPOEU9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbe1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCIyMzQ4MDcyMzc2MDUwQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjIzRTc2NTQxNDNBQjlDMDgyNDQ0ODJEQUE1MUFGREE0XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MDgzNjgyNjZ9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjAsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJYakpSTWJWTlFHV0pfQ3V6bzJQTjB3XCIsXCJwaG9uZUlkXCI6XCI3MzQzNGVhYi01YjFlLTQ5MjgtYTlmMy1hOWM3YTAwNzU0YjFcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlZiNi9XUXNSdWtuQml1VGp5bmxpQnp5VHd5bz1cIn0sXCJyZWdpc3RlcmVkXCI6dHJ1ZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJVMXRXa0FENzRoOUZnWEJ6c2J2eDhTMUR4Rmc9XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJwYWlyaW5nQ29kZVwiOlwiOVdCMjVNUDlcIixcIm1lXCI6e1wiaWRcIjpcIjIzNDgwNzIzNzYwNTA6MkBzLndoYXRzYXBwLm5ldFwiLFwibGlkXCI6XCIyMzg1OTgzODUzMjgyOTY6MkBsaWRcIixcIm5hbWVcIjpcIk9sYWRpcHNpbmlnYW1pXCJ9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNKdTBndGtCRUlERHpxNEdHQUU9XCIsXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6XCJCV0lTb0ZmMDUzM1VucDdPK3lzSzJkLzhhN2Y1dTB4K1dqSXY0Yk5Ud0VNPVwiLFwiYWNjb3VudFNpZ25hdHVyZVwiOlwiRVhkYWFYWXpvUFZLRFB2blRrWk1hSUpCRHJDVkZOalBIaG9CS0NSRjRwKzk4c1JIVlhVWk9qUEhEQmx0V1hQYVdoVVVrQU92QXVNWU9qcmN0ck9rRGc9PVwiLFwiZGV2aWNlU2lnbmF0dXJlXCI6XCJGTy9oTzR5UVJiRVJMNi9sYmNDa1ArK1pqNkN3ZGRhZGg2SkYwcFdJODBHT3JxN3ZvblhyTlBtc01KSmFHaFA4Wk83VjNSV2pPdTQ4dHdIS1U2VU5pdz09XCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiMjM0ODA3MjM3NjA1MDoyQHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQlFWaUVxQlg5T2Q5MUo2ZXp2c3JDdG5mL0d1MytidE1mbG95TCtHelU4QkRcIn19XSxcInBsYXRmb3JtXCI6XCJhbmRyb2lkXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzA4MzY4MjYwLFwibXlBcHBTdGF0ZUtleUlkXCI6XCJBQUFBQU5MY1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5MYy5qc29uIjogIntcImtleURhdGFcIjpcIjRnUjJoUHhNTmIzRWgzRGlHMGJrN1FXWXRNaUhYU05YclpWWGNkd2lwRm89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDU1MTIxNDM0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzA4Mjg4NjIwODU0XCJ9Igp9
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



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
 
