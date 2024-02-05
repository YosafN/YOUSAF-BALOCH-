const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="lodhihaxk@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://lodhihaxk:2vpnMDNOHyAc4Aw6@cluster0.ooa13jr.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI=process.env.DATABASE_URL || ""
global.scan = "https://suhail-md-vtsf.onrender.com/";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://wa.com/923096357349";
global.website=process.env.GURL || "https://wa.com/923447298550" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/0d952c400eafce9a9fc91.png" ; // SET LOGO FOR IMAGE 



global.devs = "923447298550" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923447298550";


 




//========================= [ BOT SETTINGS ] =========================\\
global.flush = process.env.FLUSH || "true"; // Make it "true" if bot not responed
global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.userImages = process.env.USER_IMAGES|| "text",
global.style = process.env.STYLE || "5",  // put '1' to "5" here to check bot styles
global.waPresence = process.env.WAPRESENCE  ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
global.MsgsInLog = process.env.MSGS_IN_LOG || "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
 

//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  || global.read_status_from || "923447298550,923xxxxxxxx";




















module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/



  HANDLERS : process.env.PREFIX || ".",
  BRANCH : process.env.BRANCH   || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sʜoᴀɪB-Lodhi" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sʜoᴀɪB-Lodhi 』```", //*『Shoaib Khan』*\"),

 
  author: process.env.PACK_AUTHER || "SHOAIB-LODHI",
  packname: process.env.PACK_NAME || "Shoaib♥️",
  botname : process.env.BOT_NAME  || "sʜoᴀɪB-Lodhi",
  ownername:process.env.OWNER_NAME|| "It'x LodhiHacker",





  sessionName:process.env.SESSION_ID || "SUHAIL_09_37_02_05_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiR0k3Y0Rwcm1mVG9KS0UrZW9QYitUS3VBM0ZDZEFUSmtmL05rdFhJcmlFVT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIklEWFdvYXAxaEtUVXMxeDNhTUNMdkNZR0xua0FTdVd4djhGREdkVUtGQjQ9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiK0R3RDUybzZwTFA4MHZMWGY1NFREdnJVb0hkSm1YRjRZWUc3YmY4VWxFOD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIi9oU3hSc3BxUzl1R0JCLzVpRWdUTmNDN3lCSHJ4SzNCU1dBbDN4L1YwV0k9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiUUFTV0l5VDJwcTdObWdHb3lQdW1TaWdQaHpMWFBKTDZXWlQvR0dVU2pYMD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkVuSndEREN5WHlVRjJoUkg4MzhrdjZIWk9NZnBXTGVwUFlJMmlIRXZHVlU9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJHSGY5SEd0TWlHTVcyQnM3S0h0VXdkZktQaWdWc3U4UDZIS0RQSmR6ZkhzPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiaHhlM2RLSE1DTktIY2tzdjhZTzlUV0JEbzlIT2I4OUFQbDFLTkE3bFIzVT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJOcUZuR1NiSWtrMDNISk1ZbEIrUUJaempodkl1TWFTNW8wVW5Ydk5oOVZVaUhlcDRzQXZQZVFMQVFMdWJCNmkrRWpEVE5WRERpWjhHbDdMM1FMMWlnUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTA0LFwiYWR2U2VjcmV0S2V5XCI6XCJab1FXbDZkU0o1UlNJb2xudzl4N1A1blR5RzE3SEFaQTZKR1prWUhIZWlJPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzNDQ3Mjk4NTUwQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjc2QjRFQ0FCNDc2RkFCNjVEMEZGOTc1RDdGQzE0QUJBXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MDcxMjU4Njh9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzNDQ3Mjk4NTUwQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIkU3OEJGREQwQzVFQzFBNTQ0RjNENzFFRjlGQUZFRDQ2XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MDcxMjU4Njh9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCIwNzViUHEtY1FPMjFpWXRfU2tyTXR3XCIsXCJwaG9uZUlkXCI6XCI0Nzk1YzY5MC0wZjQ5LTQ4MjktYTdkMS03MjQ5MmRjMTNjYmJcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInlvWGhEeXAzZ2FIeEluQW5UUkRaNEx4cUhxZz1cIn0sXCJyZWdpc3RlcmVkXCI6ZmFsc2UsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiUGFpYWxIcmh2MU5kTGJ5MWdXTXVJRElBd2lvPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNLK2Ywd1lRNTlpQ3JnWVlBaUFBS0FBPVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwidmpDYnF5MU1SK3Bwd1hBZzE5NHJWQlVvN3laSWFMdkhHWnBKZkt6QTBSYz1cIixcImFjY291bnRTaWduYXR1cmVcIjpcIkllVjBiVEhqOFkrbTVYTnVCVWJTRDF1bHB2ZHVVMDcxeExHYnIyVEtjbDNwUW9pQ0l2bEtaOXdwOHN4YkZpbGVjUkN2dTMvTUFIVTVaczkxMndNd0FRPT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwiRDlFNjhFU2t6bUoxN1ZNemxjeFdzRUJXNDNqbThiSUlCbVN3Z2xnM1NncnVMMjNmOXUwN1UzUmdhY0QxWFRwaEsrSFdaYmRqcEtkSVpwYW5MbGdraEE9PVwifSxcIm1lXCI6e1wiaWRcIjpcIjkyMzQ0NzI5ODU1MDoxMkBzLndoYXRzYXBwLm5ldFwiLFwibmFtZVwiOlwiTE9ESEkgQlJPVEhFUlwiLFwibGlkXCI6XCIyMzA4OTkyODc2OTY0MToxMkBsaWRcIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCI5MjM0NDcyOTg1NTA6MTJAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCYjR3bTZzdFRFZnFhY0Z3SU5mZUsxUVZLTzhtU0dpN3h4bWFTWHlzd05FWFwifX1dLFwicGxhdGZvcm1cIjpcInNtYmFcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MDcxMjU4NjYsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBS2YrXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS2YrLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWG9YSVpQV0Z6b1ZWTGlGcXBOWmtOTnVPMnZQZ3pRemdIbmNLaVN3V2Zmaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzk0Njc5OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzA3MTIyMDQxNDgzXCJ9Igp9",  // PUT SESSION ID HERE 
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API  || "false",





  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,



  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "sʜoᴀɪB-Lodhi",



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
 
