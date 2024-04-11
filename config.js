const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://m-saad001:<password>@saad01.268bdgk.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/9c39650103d292eca4a78.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923418595810" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923418595810";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/9c39650103d292eca4a78.jpg,https://telegra.ph/file/9c39650103d292eca4a78.jpg,https://telegra.ph/file/9c39650103d292eca4a78.jpg,https://telegra.ph/file/9c39650103d292eca4a78.jpg" // 
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923418595810,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923418595810,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_26_04_11_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQ0pkQnNRdUF5a3RmNnFLbXpYK1lxTjErRkJOQWFIUGh4SU0wR0tUNUdWcz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlZPWXg3a01TclhpNVMwR09SMWNLSGo5Z3ZqZUlUQUFKcExua29GL3ZiRUE9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiYUR5ZE5ERmcvaG04d2J5dmwxall0Q1pEbnU5eDhCMDBRMEEwbFpaOHZWWT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjlLWnBISEJPZXQrdEROZm1kWGd6MWNRUTR5eEIySUZMZEJKT2kyWVJSV3c9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwic082L2w0elRkT0JSSTh2WVBnV1Noa1pMTy9KVlFrNjRQMVlTeEVuMnZWbz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjdObmc4N0ZKSjR3d2NjRGhXWmlzRWovTU0vVTQ5elhrOVJ4MjBJL3ZFUUE9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJxUE5HVVdsMnorMkJ5VzdtcDBmSW8rRTgwd1FaOHFyRjl2ckNjSFhJZUVBPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwidVg5NzFkTkdSdnlSQWtrY2lBQlJNZE5kL2hzd2FNZXF1NVZZRHFsZ3VWdz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJaT3BtUWdsM1EvTWR1MUhTUy9zVUFWWHZqZTR1ZG1TLzhjVEszWFpWMFB4L3BpcHN3WGhQT01rV2lWVUZ4L0xyVnBpVVI2K25yZzhsSW5PNzdwemxoQT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjA4LFwiYWR2U2VjcmV0S2V5XCI6XCJoUGFUbUVTakJMUFlKenJIUytyVzFPN01Va2dRL3lUUXNES1RpZXU2bnlzPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzMjM5NjI2NDI0QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjlFMzlDRDkzM0EyQjVGNkE1Qjc3MkYzNTQxNTkyNjk0XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTI4NjcyMDV9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzMjM5NjI2NDI0QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjdFODRDMzNERTEwNEU5MDYyMTZGNjBEMThFRjJBNDc0XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTI4NjcyMDV9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJ1V055TllkVVJQcWwyUmtaYUYyV01BXCIsXCJwaG9uZUlkXCI6XCJiZDQwNGZhNC1hYTk2LTQzNTUtOWIyMi1mNGViNGFiM2EwMGFcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInhHSGY1STJmbnpKYmpEWEJTY29FRnB0dWJMaz1cIn0sXCJyZWdpc3RlcmVkXCI6dHJ1ZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJiRUEwZEhDQmpXRStsMmE5alAvNkVFZzh4K2M9XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJwYWlyaW5nQ29kZVwiOlwiSkNGQVNBUVZcIixcIm1lXCI6e1wiaWRcIjpcIjkyMzIzOTYyNjQyNDoxNUBzLndoYXRzYXBwLm5ldFwiLFwibGlkXCI6XCIxMDQ4ODc4NjYxMTgzNTg6MTVAbGlkXCIsXCJuYW1lXCI6XCLiuJnwk4apwqvhj5rkuYjkuYjhjqDwlJKdwrvqnJvYnPCThqpcIn0sXCJhY2NvdW50XCI6e1wiZGV0YWlsc1wiOlwiQ1BYMjZlSUVFUCtPNGJBR0dBVWdBQ2dBXCIsXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6XCJYV2wxNEhTcTZmbUNLNlB2RXBjM3Y1Z0I5aW1wZG55UEM5Q2sva1dmbVhZPVwiLFwiYWNjb3VudFNpZ25hdHVyZVwiOlwiWi95bW4rRDFxSmhXRkdEaE85RGh2cFZqVmdKN0tyN0R2RVd2RmNMN2IwaitXd1VTR2xuUkl3N01pOWpzUVlRSk1vQ0VRMTlkNitaNjFHYTBvYkRmQ1E9PVwiLFwiZGV2aWNlU2lnbmF0dXJlXCI6XCI4OEc0Z0tsT0dKQldTR2x2WHI1MTk5c0RDRW5xME45bzBaMjZYZnRWVFRzK0VnRVlCcVhmdnU0UUMxMFU5amhCMFJpcGVzM1ZSdG5uR0lUVW5NUVJqdz09XCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiOTIzMjM5NjI2NDI0OjE1QHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQlYxcGRlQjBxdW41Z2l1ajd4S1hONytZQWZZcHFYWjhqd3ZRcFA1Rm41bDJcIn19XSxcInBsYXRmb3JtXCI6XCJhbmRyb2lkXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzEyODY3MjAyLFwibXlBcHBTdGF0ZUtleUlkXCI6XCJBQUFBQUp5VVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUp5VS5qc29uIjogIntcImtleURhdGFcIjpcIkZlTTZSSThrVEVoZFFKVXRQWDczOGxBazBtOTZLTFl0cUhMaEJsQ3E4SFk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI4MDk5ODI1NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©SAAD<3"),
 
  author : process.env.PACK_AUTHER|| "Saad<3",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "ᏚAAᎠ",
  ownername:process.env.OWNER_NAME|| "Ꮪ么么Ꭰ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
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
