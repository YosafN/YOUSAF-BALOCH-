const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,zimbabwe."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "zimbabwe/kadoma";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263716068460";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
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
  packname: process.env.PACK_NAME || "zeltraxx",
  botname : process.env.BOT_NAME  || "Manexx bot",
  ownername:process.env.OWNER_NAME|| ".Manexx",

  sessionName:process.env.SESSION_ID || " SUHAIL_18_23_02_21_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwidUNTMDRZbUFwdDlqSDRjTGlBNEZJcTRBU0R6eGRYaTV3RkZWTE5tai8yWT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlBIOFQ1WG1BTCtIRUhObmtNUjhVaTMwMzN3NENCTnVYVktSeWRGYUo0VVE9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwieUFNZ2NiUGtuWXBvU0ZqYVlZUTl1azgwNmVPQ0pyMXRaVjV3UTM3N0wwOD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjU1bVpWWHE0V044M3FrK3g2VXUxMkVwNm1HM0tQa2dPVG5CQWZpZkNsbTQ9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiS0N5ZjhVUW1Xd1Z2K3p6Y1R1V0JpSjZTVDI4ZWxocHNjRUVyWjhPTFkzbz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlo4eWQyTStBVzd4YS9zS3YzUTg4NVQwWHhaOVFTUUN2eTY3bjVjYXZBQnc9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJHSGdYV0NRQnRBZjVmRkZmQndyZ2Z1RGtXV2ZmVTUwS0dHUTNyRkJqaTBzPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiL3NGaXhBTG00QzdDdDBiZ2ZETjR2K3l5bU53REh4RXNGcHJ2UHZXQnhHTT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJpRmZmblJvMFU1L1VtdENVSnZkdGF3YUVUdmtpTnBBbmQrSWFyZmxvRU1uRnlkQTNxc0JwNlBBSk14TXZzenFBaTN6R0VpelVycjJ3czAwTm5veTFnZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTcwLFwiYWR2U2VjcmV0S2V5XCI6XCJwOGlzdUN1aHpqY1ZER0JlTkxFbFptTm5iTFdGOFc3dUtvSk01U09WM3NzPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwieFFGQUVHUkZTVGViSF84Yi1DQ1NNUVwiLFwicGhvbmVJZFwiOlwiMzI5ZjZmMzEtMjEyOS00Mjc3LTg3MzYtYTA0MDUwM2Q0ZDg2XCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ0cVdrekwxaFJTQVZZMk41dUdjd1dGZ2ZLNjg9XCJ9LFwicmVnaXN0ZXJlZFwiOmZhbHNlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImNkaHRNNHQyUUZDQWRMcXYySXB4WlVKYUpzMD1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDT2ZmenVVREVKYi8ySzRHR0FVZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcImNBdUQ3SVBROXhBOWFpclJpYlAydkxFQ1JEc1ljekgxL0FydjU2dENod0E9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJpVzBCemhiU0dndHJVK3ZoSVlHTitSSzRLTnZSMzdMVExhWFhYUFJ0eUNyeEM5S0ZVZEpzTU92VE1CK3pEamN3ZlVOOFh6Tng5aHpHMDRjaHdtYnBCdz09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcIkFQaFNlM0tDN1kydUhXY05HY0dYYzBxaXlzSVJhSk1CdlArQW9ic3BlVlNKRnpvWVpZMU0raTJ0WkRvZlRNcEZwejVJcTRxc2haaTAwWW5kMnNwcmd3PT1cIn0sXCJtZVwiOntcImlkXCI6XCIyNjM3MTYwNjg0NjA6MTFAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiMzgzNjcyNDQ4ODYyMjU6MTFAbGlkXCIsXCJuYW1lXCI6XCLwnZWEw6DwnZWf8J2VlvCdlanwnZWpLi7wn5KmXCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiMjYzNzE2MDY4NDYwOjExQHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQlhBTGcreUQwUGNRUFdvcTBZbXo5cnl4QWtRN0dITXg5ZndLNytlclFvY0FcIn19XSxcInBsYXRmb3JtXCI6XCJhbmRyb2lkXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzA4NTM5ODAyLFwibXlBcHBTdGF0ZUtleUlkXCI6XCJBQUFBQUJnVVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJnVC5qc29uIjogIntcImtleURhdGFcIjpcIkZDTU1FUlRlRVBPT1dqbjk4Tlp2VHJmbUZ2UmRpZGwwTVMwQ2FnV1MvRjA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAxODQwODkzNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQmdVLmpzb24iOiAie1wia2V5RGF0YVwiOlwiODdWaDlGaEdGV2JOcE0xYXRzOHV6Zi9zNmVIWDdhZG9jOEhOU1E1M0hqND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDE4NDA4OTM1LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJnVi5qc29uIjogIntcImtleURhdGFcIjpcIk5JZ3c4bWxkbmtQT3pNMVZCengrVS9lVzRJN21NbmJXdmRvT2hBbVBoZzQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAxODQwODkzNSxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDg1Mzk3MzkxMzJcIn0iCn0=",  // PUT SESSION ID HERE 
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
 
