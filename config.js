const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.devs = "27653224519"
global.port =process.env.PORT
global.appUrl=process.env.APP_URL||""                       // put your app url here,
global.email="molebatsikamohelo0@gmail.com"
global.location="Nigeria,Lesotho,South Africa"
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Suhail_Md:Suhail_Md@cluster1.0tlyzhm.mongodb.net/?retryWrites=true&w=majority"
global.DATABASE_URI=process.env.DATABASE_URL
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.scan = "https://suhail-md-vtsf.onrender.com/";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Lesotho/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl = process.env.GURL  || "https://chat.whatsapp.com/JqmP5suyE4U2QKwbJxt5NE";
global.website =process.env.GURL|| "https://chat.whatsapp.com/JqmP5suyE4U2QKwbJxt5NE" ; 
global.THUMB_IMAGE=process.env.THUMB_IMAGE|| "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 




global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,27653224519";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "27653224519";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  style:process.env.STYLE|| "2",  // put '1' & "2" here to check bot styles


  HANDLERS:process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH  || "main",
  VERSION:process.env.VERSION || "v.1.2.7",
  caption:process.env.CAPTION || "©Kay²²¹-AS" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),

 
  author: process.env.PACK_AUTHER || "Kay💯",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Kay-aslegend",
  ownername:process.env.OWNER_NAME|| "Kay💯AS ⚡Legend",


  sessionName:process.env.SESSION_ID|| "SESSION_21_52_01_17_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUZpZ1dHbXBXZnRIeFUyaktPT2graGNPdUZTQy9KNlNoOCtteEJOd2FWRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWWgrM3FJdjdwaTQ1eHlqWE8xc1pJcmRQRFd4RUh5UHZNdm5NQzYrMXRYbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpR21Oald6RkVHTzQ0aWxNVythQ0J4Y01jdmQ2N1MzY0Fqb20xemJYblhVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1T1hnS1NJU3pGT1lPU25jViswRDU4bExHaHA5RURWNDJCdkhsbEV1aEdzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1CV2JjWDhmbEFYMTNKamRhUzVxdlRvN1liZ3lWVFRMTm96WXh1RlpJSEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBBNkNqSEZRWUhnYWhKRDhJTFBLSjJhdW9nYjZDMitjQmlHdklJR1RaakU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUZYUEh1NUZiRFh0L0EwZ2l5ekxSOUQ3eGRCUE1yVjZRdFIzZHZSaHEwMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUDM1cGxwOHRQeU1BY1NvU1ZmVlVzdVRhcUVpZ2VoT1VOeFptYk9hOVdrUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpPNHlHMENOWnZXcmtmNGdQdXVudWdNeGRhRGlXeVJGd2d3d1hYVnM3YlI5SEJYbHVpbkJPZTQ5RmVQeG11VklkTkZzaXdzVTVUSkxuRW9qOE54QkN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjcsImFkdlNlY3JldEtleSI6IkFPZlpEWTREeDVNamhKdHBDRWJXcVN3cnJidkJiVGJFQTFkMzdEajdSWjA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjNlOENYVFNiUWQtMVNETE1KZkwzU3ciLCJwaG9uZUlkIjoiZWUwZDI1MjEtNmJjMy00YzAxLWJkM2YtYzdkZGM4ZDI0YmU0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRoYkRqUlAvV1NrcVhYaUVnM3Y2TXRYVU9YND0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicitCZXE0VHZzdEVmT3Zha1ZlN0RqL1NEYS9FPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSmlTdTdrSEVQQ1hvYTBHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiM3FBM0wxNWVuai94RkVJK2VrbGRlbTlZNm5xWGpxbEN3b21xU3FNbzQwVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoia2dyaGVqQnFtT2swMzMxZkZDelRDNmZJZWNUWnljN0tlRzMrWmlLOHRzVVpFZkdkaVRSaENEMjRxODNHNVVxYTJVdWMvNU5GZmQwMG93VUJRSW5PRGc9PSIsImRldmljZVNpZ25hdHVyZSI6IkwxSVJoa2l6YnNUOVJURDlsenV5U3NiNXJjQ0dSRXJzZ3BqNzMvakFRMTBoZGpIMzdFaHBvNkN6UjZ6R0h4dUJoZzAwb1V4cEFKUDBnOGJsTkRRRkRBPT0ifSwibWUiOnsiaWQiOiIyNzY1MzIyNDUxOTo2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkthefCfkq8ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjc2NTMyMjQ1MTk6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkNmdOeTllWHA0LzhSUkNQbnBKWFhwdldPcDZsNDZwUXNLSnFrcWpLT05GIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzA1NTI4MzExfQ==",  // PUT SESSION ID HERE 
  errorChat: process.env.ERROR_CHAT || "",
  warncount: process.env.WARN_COUNT || 3,
  userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  readcmds:process.env.READ_COMMANDS|| "false", 
  KOYEB_API: process.env.KOYEB_API  || "false",
readmessage:process.env.READ_MESSAGE|| "false",
 aitts_Voice_Id:process.env.AITTS_ID|| "37",
 alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
 

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY|| "",
  read_status: process.env.AUTO_READ_STATUS || "true",
  save_status: process.env.AUTO_SAVE_STATUS || "false",


  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",

};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 
