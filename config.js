const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "https://telegra.ph/file/b9aad1abad2b3394c5245.mp4" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL||""                       // put your app url here,
global.email="Muhammadzahid10212020@gmail.com"
global.location="Lahore,Punjab,Pakistan"
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Muhammad786:Muhammad786@cluster0.fwvspqh.mongodb.net/?retryWrites=true&w=majority"
global.DATABASE_URI=process.env.DATABASE_URL
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.scan = "https://suhail-md-vtsf.onrender.com/";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl = process.env.GURL  || "https://www.instagram.com/zidii_decent_boy?utm_source=qr&igsh=MzNlNGNkZWQ4Mg==";
global.website =process.env.GURL|| "https://www.instagram.com/zidii_decent_boy?utm_source=qr&igsh=MzNlNGNkZWQ4Mg==" ; 
global.THUMB_IMAGE=process.env.THUMB_IMAGE|| "https://telegra.ph/file/ef31f18fe99fad1e3bbf8.jpg" ; // SET LOGO FOR IMAGE 





global.disablepm = process.env.DISABLE_PM || "false",
global.userImages = process.env.USER_IMAGES|| "https://telegra.ph/file/ef31f18fe99fad1e3bbf8.jpg",
global.style = process.env.STYLE || "5",  // put '1' to "5" here to check bot styles




global.devs = "923312188910" // Developer Conatact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923312188910";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  //style:process.env.STYLE|| "2",  // put '1' & "2" here to check bot styles


  HANDLERS:process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH  || "main",
  VERSION:process.env.VERSION || "v.1.2.7-qr",
  caption:process.env.CAPTION || "©穆罕默德  ̶ ᷦ ̶ͥ ͩ ̶ͥ ̶ͥ🩵̶³̶🪽" , // ```『 穆罕默德  ̶ ᷦ ̶ͥ ͩ ̶ͥ ̶ͥ🩵̶³̶🪽 』```", //*『穆罕默德  ̶ ᷦ ̶ͥ ͩ ̶ͥ ̶ͥ🩵̶³̶🪽』*\n https://www.instagram.com/zidii_decent_boy?utm_source=qr&igsh=MzNlNGNkZWQ4Mg=="),

 
  author: process.env.PACK_AUTHER || "穆罕默德  ̶ ᷦ ̶ͥ ͩ ̶ͥ ̶ͥ🩵̶³̶🪽",
  packname: process.env.PACK_NAME || "💳",
  botname : process.env.BOT_NAME  || "穆罕默德  ̶ ᷦ ̶ͥ ͩ ̶ͥ ̶ͥ🩵̶³̶🪽",
  ownername:process.env.OWNER_NAME|| "穆罕默德  ̶ ᷦ ̶ͥ ͩ ̶ͥ ̶ͥ🩵̶³̶🪽",


  sessionName:process.env.SESSION_ID|| "SESSION_19_15_01_19_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkZ0cHVoRjR6UU8vZmh1VHlKQ0pSSVp5RHF6Y3lZV0poRW4xQ1lTOWdrST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiampzVmZXbTgrTEZnaEd3eFpmUm9TMklzWU9vZXAvMmFaSDdwK3lZYTRIWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPTysxVGF0blc5V0h2VUsvSUdwVEFOM2FzcHJ3b2l6N2xSY1hJcmIzNjBJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTR2FEUFo0U0hGeXo2S2cyNktMRmJ1WUxhM2VxekpnRkVjczVTQnd6U1hNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdHZXdwYUJ4R1ZvN21SaU9ldzBaUjZHQXREOW11a0ZkL1FIZFJ0dXc0MkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkE3VzVQczdLakllNFVodmpTam4vSXVjbk0zajl6Vm9IZzlYY0VRQndDUVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibURSTk4xS3RPK0M0TFBzMkthVHJoV0xQL2ZibldGMzBJVENRcmd6MXduVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWjkzWXBhTTQ0bDR2WE1HZGh0TXNpQjFRbEs5Z0M1QXZGdkdCdWtCdmwwWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFWOUNUVFhFWDBrOTV0QlEra1RMNkRXeVdwVDN0TDBiaUVYYTNJZy80Y1pzK2RLb29lTW4xU0NkZ3FMTFFMdXJZdlB4dmx3U3VHWWt2Q21xNTZuZmpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzAsImFkdlNlY3JldEtleSI6IkxQbGlCRnJINU9oVmxPMllMNWxlY3JsZkZCdUNtV0JQOE1EeVkrRWpFd3M9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlMyaVRjanJ5U3Flek5GYUNyNlBqeXciLCJwaG9uZUlkIjoiZDM4ZWIyYTItM2I0OC00ZTdjLTgwZmMtMTdjNGQ0MGVmOWU0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkR5WmluTDVUYzIxNDNCbER1R0NuWlR3L3daUT0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibEZJcTY1Z0JyWlhWaGM1ckQvb3l5eHB1M2drPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHltK2VZQ0VONlVxNjBHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUUZrWi9MbGFCMHo0ajg2K0w0OGpVZW1uZmVhbWxEV1lNZ08yWHEwSjlXUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWGc1UVVJTmNneFRHMis2V2tnaEx3ZlFocm15UGNudmxmeFdpY1dPSDlHTjRFVk0zRDZCdWdqck5tcEZXUVdieEFhT0tQSDk0cXF6bWNSUDNnRzVPRFE9PSIsImRldmljZVNpZ25hdHVyZSI6Illkb0w0VWs2b3VRSFVqdE5rU0piNmZhVUs1SHZqUjJ6RnBMQjBqTTVaZzlzZ0h0T1hqZlRLWnNTTFFvUUNkV1U5OTNzSFJoLzMzVTg4UXQzVWNEWGpBPT0ifSwibWUiOnsiaWQiOiI5MjMzMTIxODg5MTA6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLnqYbnvZXpu5jlvrcgIMy2IOG3piDMts2lIM2pIMy2zaUgzaXMtsy2wrPMtiJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMzMTIxODg5MTA6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVQlpHZnk1V2dkTStJL092aStQSTFIcHAzM21wcFExbURJRHRsNnRDZlZrIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzA1NjkxNzQ2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUd0RiJ9",  // PUT SESSION ID HERE 
  errorChat: process.env.ERROR_CHAT || "",
  warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGE|| "https://telegra.ph/file/b9aad1abad2b3394c5245.mp4",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  readcmds:process.env.READ_COMMANDS|| "false", 
  KOYEB_API: process.env.KOYEB_API  || "false",
readmessage:process.env.READ_MESSAGE|| "false",
 aitts_Voice_Id:process.env.AITTS_ID|| "37",
 alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
 
 
  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY|| "",
  read_status: process.env.AUTO_READ_STATUS || "true",
  save_status: process.env.AUTO_SAVE_STATUS || "true",


  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "穆罕默德  ̶ ᷦ ̶ͥ ͩ ̶ͥ ̶ͥ🩵̶³̶🪽",

};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
