const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="anonymous303ruby@gmail.com"
global.location="lagos,nigeria."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://ahil1:787191784abhi@ahil1.kzr1tt3.mongodb.net/?retrywrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/JiUrFXwymnF7BUTDBNlp4K";
global.website=process.env.GURL || "https://chat.whatsapp.com/Lavv3e83dea6MGSRsaXsKt" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "2349137924240" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "23457709672";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/536728756740b9f9cba0c.jpg" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2349157709672";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_47_04_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDg4LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0LFxuICAgICAgICA3NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDQwLFxuICAgICAgICA1NixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY5LFxuICAgICAgICAxODAsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDk4LFxuICAgICAgICAyNyxcbiAgICAgICAgNjksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjA2LFxuICAgICAgICA5MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxLFxuICAgICAgICA5MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTM4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQxLFxuICAgICAgICA2MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDQyLFxuICAgICAgICAwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDYyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNixcbiAgICAgICAgMTQ0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDU2LFxuICAgICAgICA5MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDksXG4gICAgICAgIDExNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDk5LFxuICAgICAgICA5LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzksXG4gICAgICAgIDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTAyLFxuICAgICAgICA3MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU3LFxuICAgICAgICAzLFxuICAgICAgICAzMixcbiAgICAgICAgMzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODcsXG4gICAgICAgIDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NSxcbiAgICAgICAgMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1LFxuICAgICAgICA4NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTI4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDgsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ5LFxuICAgICAgICA2NixcbiAgICAgICAgNTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDY2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTEwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjksXG4gICAgICAgIDE1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDc1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEzLFxuICBcImFkdlNlY3JldEtleVwiOiBcInZZSW82UHlmWnFUL0pwYjI5NG9pMGdicGd4ZWRSOXlueGFGRVVOS0VwMVE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlhBbk9pV1lUU3dXRGNWRnJWN2N6S3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTY3YWM4OGItNzgxYy00NzQwLTg3ZGItMmI5YWFiNGEzYjYxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMixcbiAgICAgIDY2LFxuICAgICAgMTkxLFxuICAgICAgNDIsXG4gICAgICA3LFxuICAgICAgMjUzLFxuICAgICAgNzAsXG4gICAgICAxOTIsXG4gICAgICAyMDgsXG4gICAgICAyMDksXG4gICAgICAxMixcbiAgICAgIDEyOSxcbiAgICAgIDE4LFxuICAgICAgMTI2LFxuICAgICAgMjAsXG4gICAgICAxMjMsXG4gICAgICAxMDQsXG4gICAgICAyMzIsXG4gICAgICAyMCxcbiAgICAgIDg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NSxcbiAgICAgIDc5LFxuICAgICAgMTc1LFxuICAgICAgMzMsXG4gICAgICAxODgsXG4gICAgICAxLFxuICAgICAgMTg2LFxuICAgICAgMzQsXG4gICAgICA4OCxcbiAgICAgIDIwMixcbiAgICAgIDQyLFxuICAgICAgMjE4LFxuICAgICAgMTU2LFxuICAgICAgMzksXG4gICAgICAxNjAsXG4gICAgICAxOTcsXG4gICAgICAyNCxcbiAgICAgIDE5OSxcbiAgICAgIDIzMixcbiAgICAgIDIwNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxUUM2SFpWMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEzNzkyNDI0MDozN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTA0Nzg0NzUzMzQ4ODUwOjM3QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuaYr+eahCDljL/lkI0gQW5vbnltb3VzXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXFsbGJjR0VNSHNwckVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5RUFIdnZMUWZkZ0M2VEc5R1FIQzJlZ0YxL015R0lpaWpHc2pLd1hJYUZZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkRpek9STkY3amRLbU9VckREMDZ1a1R0NHdhbDAzSmJMMlBnOFd6NzBuTlovWHBHa1R4QUJQRFZ6Tk9oZTNJZ1lkRzU5OW5WZCs1U0hCL0R0UHNWUkFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm84NmNESk50N250WUNZbEtXd3VzSFZlZTIrS1RPTkJHZkUyZDZpQ0NTQkpaRmE0TkdTazVNRmZsWWhIQUlmU3hpaVBlS2U4T2lubzFkdjlmSERRa2dRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzc5MjQyNDA6MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTQwMDk2NjksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIaEdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhoRy5qc29uIjogIntcImtleURhdGFcIjpcInQ2WWQ2OEdjV3F4MTVVOUxGOElKWUl0cGRRRzJCekhyOGhjVks5ekFXVUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTcyNjMwNDkwNSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE0MDA5NjQ2OTc1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "anonymousmd", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Sammy",
  packname: process.env.PACK_NAME || "anonymousmd",
  botname : process.env.BOT_NAME  || "anonymous md",
  ownername:process.env.OWNER_NAME|| "sammy",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "Anonymous"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
