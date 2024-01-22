const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.audio= "https://github.com/MR-NIMA-X/ZUSYCO-DB/raw/main/media/audios/ZUSYCO-wichil.mp3" ;  
global.video= "" ;
global.devs = "923104697800"
global.port =process.env.PORT
global.appUrl=process.env.APP_URL||""                       // put your app url here,
global.email="Muhammadzahid10212020@gmail.com"
global.location="Lahore,Punjab,Pakistan"
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Muhammad786:Muhammad786@cluster0.fwvspqh.mongodb.net/?retryWrites=true&w=majority"
global.DATABASE_URI=process.env.DATABASE_URL
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.scan = "https://suhail-md-g1y0.onrender.com/";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl = process.env.GURL  || "https://www.instagram.com/zidii_decent_boy?utm_source=qr&igsh=MzNlNGNkZWQ4Mg==";
global.website =process.env.GURL|| "https://www.instagram.com/zidii_decent_boy?utm_source=qr&igsh=MzNlNGNkZWQ4Mg==" ; 
global.THUMB_IMAGE=process.env.THUMB_IMAGE|| "https://telegra.ph/file/09cc6457e00eb9786ca8d.mp4" ; // SET LOGO FOR IMAGE 




global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,923104697800";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923104697800";

module.exports = {

  menu: process.env.MENU || "https://github.com/MR-NIMA-X/ZUSYCO-DB/raw/main/media/audios/ZUSYCO-bitch.mp3", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  style:process.env.STYLE|| "2",  // put '1' & "2" here to check bot styles


  HANDLERS:process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH  || "main",
  VERSION:process.env.VERSION || "v.1.2.7",
  caption:process.env.CAPTION || "©穆罕默德  ̶ ᷦ ̶ͥ ͩ ̶ͥ ̶ͥ🩵̶³̶🪽" , // ```『 穆罕默德  ̶ ᷦ ̶ͥ ͩ ̶ͥ ̶ͥ🩵̶³̶🪽 』```", //*『穆罕默德  ̶ ᷦ ̶ͥ ͩ ̶ͥ ̶ͥ🩵̶³̶🪽』*\n https://youtube.com/@Zidii_decent_boy?si=NHvsmFpXt4ou-XEJ"),


  author: process.env.PACK_AUTHER || "穆罕默德  ̶ ᷦ ̶ͥ ͩ ̶ͥ ̶ͥ🩵̶³̶🪽",
  packname: process.env.PACK_NAME || "💳",
  botname : process.env.BOT_NAME  || "穆罕默德  ̶ ᷦ ̶ͥ ͩ ̶ͥ ̶ͥ🩵̶³̶🪽",
  ownername:process.env.OWNER_NAME|| "穆罕默德  ̶ ᷦ ̶ͥ ͩ ̶ͥ ̶ͥ🩵̶³̶🪽",


  sessionName:process.env.SESSION_ID|| "SESSION_01_01_20_24_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS01UaWtmWmZTQmU1RTlWa0hSOU85VHFDT2ZkUFozMHJLS1ZtRzJUTmVVZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUJTWTBoQURtSlVsRFpodFRNelRBL1NEUGtGOTdjYnc3UzdHZXhhMkVXTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTGs5YTVLTnlRSHFsL21lVjk5Vi8vaEJTc3lSbHZ5RE5LMnBBYWNvUjJNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGQjZuYkdoeldVZzY5SWtRa2ttQzdBRW1ob0ZpdGpKVytvQzFjVUxjSHpZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVCemxXVHczU2dhaUxKSEE2V3RESGpSUVBZWEc1T3ZHNUtTL0wrbUZyWEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFreUxNQklUZWg0bVM5cjJhSnJYRnRMaklNSmNKUTIrTlkreEgxSktxUU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0hxK0llZkQxYjR5eFV6Y29UbUMrRU1LREU3VTZxRk1GTzQwRW1VbFJsUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV09NZHQ0dk5nQzlsZjdFNVVFTnNVYjM0WUZZbDFmZzBmUWVDYjZQdi9Caz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik50cjdydnBkWUNCSVdZQkRXUFpIK1NVdnNNM3kxR3VyNTNLUDl4bG1JSHB1RGc1QngrOGdCVmNYYXZ2OE1kcitoQjZETDkraHVycG0weWczRm5weGdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQwLCJhZHZTZWNyZXRLZXkiOiJnMGZpcWFTc3F5U2tNNU14VS9VaFlOYjNZTXAxQmlRcy9LOGhkc3pFbXhrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzMxMjE4ODkxMEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0OUE0QzM5NTJGOEUyQ0M0MDI0MDY4REUwQTlFNTBGQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzA0NjUwMTA5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMzMTIxODg5MTBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiODYxNjcwQzhGQzdDMEJEMDJFMUMyMEE2Q0QzOUJFNzQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcwNDY1MDEwOX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzEyMTg4OTEwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjlDNTk5NzNFMkE2MUVEN0M0RTMyMTNCRTU0MUM2RUVBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MDQ2NTAxMTF9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzMxMjE4ODkxMEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0OUFDQzA5OTg1Q0M2OEYzQ0ZCQ0NEMkVEREE1MDdEQyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzA0NjUwMTEyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJfZGw0cVp6UlJjdWhVNERPSnQ0ZzBRIiwicGhvbmVJZCI6ImVkZGZmMzA0LWU3MDAtNGEwMC1hZjBlLThmYjJmODJjZDY1YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6T091NHRoRUxmYW4zaWhxT284ZW41bzMrN0k9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxLQTBvRVA0Mm9JNlEydVM3UWdwT3JxdFlKYz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0x1bStlWUNFUHJLNjZ3R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlFGa1ovTGxhQjB6NGo4NitMNDhqVWVtbmZlYW1sRFdZTWdPMlhxMEo5V1E9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImdzZWZpQTVzQXVwR1NNZkZpckpjdXNKWGFpRitEYXFRZHNrcWVvMkFvL0lpWjVRb3FMYXhEd2RXRzZIMm5tU3U5aWVJNTd5NVJ4b3VXYmUzS3kyVkJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIyL0dlWUNqUG5jVStZcmg3R2tGcXVPeXc2a2dOamRUc0I4UVZ3bHBCT0dEbnc2dTMxbkQraGZSL0pXaEx3VHZGbEV4WVVLNmFlVWx3MHBkdjBsK2dnZz09In0sIm1lIjp7ImlkIjoiOTIzMzEyMTg4OTEwOjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi56mG572V6buY5b63ICDMtiDht6YgzLbNpSDNqSDMts2lIM2lzLbMtsKzzLYifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMzEyMTg4OTEwOjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVUJaR2Z5NVdnZE0rSS9PdmkrUEkxSHBwMzNtcHBRMW1ESUR0bDZ0Q2ZWayJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwNDY1MDEwOCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHdEUifQ==",  // PUT SESSION ID HERE 
  errorChat: process.env.ERROR_CHAT || "",
  warncount: process.env.WARN_COUNT || 3,
  userImages:process.env.USER_IMAGES|| "https://telegra.ph/file/dc78c62fc6f99d853384f.jpg",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog: process.env.MSGS_IN_LOG|| "true", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  readcmds:process.env.READ_COMMANDS|| "true", 
  KOYEB_API: process.env.KOYEB_API  || "false",
readmessage:process.env.READ_MESSAGE|| "true",
 aitts_Voice_Id:process.env.AITTS_ID|| "37",
 alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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
