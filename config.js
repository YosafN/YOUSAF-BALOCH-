const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Accra,Ghana."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI=process.env.DATABASE_URL || ""
global.scan = "https://suhail-md-vtsf.onrender.com/";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Accra/Ghana";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/HWPYyrfLZGG0334PUYEjuz";
global.website=process.env.GURL || "https://chat.whatsapp.com/HWPYyrfLZGG0334PUYEjuz" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "233246114422" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null.233246114422";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233246114422";


 




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  || global.read_status_from || "923184474176,923xxxxxxxx";




















module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/



  HANDLERS : process.env.PREFIX || ".",
  BRANCH : process.env.BRANCH   || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),

 
  author: process.env.PACK_AUTHER || "jayjey-",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "jay360b0t",
  ownername:process.env.OWNER_NAME|| "It'x jayjey",





  sessionName:process.env.SESSION_ID || "SUHAIL_01_55_01_31_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZURXSDJLaVJVYjZmQUFnMlVTRUJCY1YwNGJHMFptbVI1SzJmdjdZNnVVMD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjRWT295d1RYQjJENTZOcTBSOWVqbmRNd1ArcUNxTlQ2TUZWVEJydXV4RW89XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwieU5QVm5HTVA5dDZwcTJSa2ZDN3NMUEQwUmN6Q0tmVzlZcU9vdENrbS9Gbz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInpQS2lhWDVjMVRkZDFURkVtWE5UVmVhNGpJV0gyUEJURHlYUG9LYnNwVzQ9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwid0xxMjBmWUp4dW9mWXFkd3U1VzZBc2N6Q3lNc1lqRTd3L3BSSXNPOW9FND1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkE1ZFdUMTk5dFhJcFI3cTd2U0pid2UxZDY5SzV2NjJ0Z3JpWDRxQm1BalE9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ3Szh1anprRWozek5zNmpnMDY1MWhHeGRvSlF5UldHT2pBL09BT1hrWjJBPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiR2hUQm1Kb1UyN2NsNk9wT1pUNElrd1FtZE1NaDh2bUVqZ1BSQVBqQVFtUT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJVRXM5cWRRb2FvNHBiMGp3Y3VYVmphZlFveDE3WCtPbDBUZ2JUMWlTd1ZXWXJVcUNHaGhBREQ5RXQrYUNFQjYxcG5FU1JRaml5UjFlWCtJWUVLcjJnQT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTAzLFwiYWR2U2VjcmV0S2V5XCI6XCJySktBN0N1SE1KWUQydmRvUUdvWHFlMlZQSmVkclRyNEt1UmZjT3VRTFl3PVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiYmtmdXdEeHZSdDZzQ2hmQlpVUGY4Z1wiLFwicGhvbmVJZFwiOlwiNjJjZGVmODQtNDM5MC00ZDE5LWE5NTAtYzA5MjJkYmRmZTRmXCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJEQ0ErcHdLWDdhdXZmTlh0djZ5SzZnMUlPbVU9XCJ9LFwicmVnaXN0ZXJlZFwiOmZhbHNlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIi9KRzdTQ3Uyb2UxL3Z5ZW9xWGlOQXhCRHk5WT1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDS2o5ejhZREVQN1E1cTBHR0FFZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIkVoZ1BVK09IaEgyamRoM3NHWCs4c2l2NHRmV2dGL2NyM1B4Y0lpK3JwUjQ9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCIrSEt6ZFVKTEpIem9vY2lESFhlUnl0LzVRZlphTDhzektVcVlXd0d5dnluSVM3MDBqUml1REZWVWMvRndhOFh4SGJ4OEJDSFI0MGNwS0lmNFpGd0JCZz09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcInV1MVVzYnRSNmJMS3pvUzN6WjRQV0lDTnc1T25iUVQ0U1EzdmpwcHdwV2dKM1YyUHI2VWxLODYwbnJGaEJ1SjFMMk9KaGZJUzBRK1pBWjBkSVhOZ2lRPT1cIn0sXCJtZVwiOntcImlkXCI6XCIyMzMyNDYxMTQ0MjI6MTJAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiOTI3MTk4NTQ3MDI4MDI6MTJAbGlkXCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiMjMzMjQ2MTE0NDIyOjEyQHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQlJJWUQxUGpoNFI5bzNZZDdCbC92TElyK0xYMW9CZjNLOXo4WENJdnE2VWVcIn19XSxcInBsYXRmb3JtXCI6XCJpcGhvbmVcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MDY2NjYxMTN9Igp9",  // PUT SESSION ID HERE 
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
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
