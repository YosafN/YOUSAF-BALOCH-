const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="habyazor@gmail.com"
global.location="Port-au-Prince,Haiti."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://famous-tech1:@cluster0.bdhpqkd.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/BE4phFIz5PgEeod6S5jULF";
global.website=process.env.GURL || "https://chat.whatsapp.com/BE4phFIz5PgEeod6S5jULF" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "43782508" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "+509 35 41 6174";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "43782508";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/d8ab3073078f251637224.jpg" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_22_04_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDgwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTczLFxuICAgICAgICAxMTAsXG4gICAgICAgIDMzLFxuICAgICAgICAxODIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMixcbiAgICAgICAgNTUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjMxLFxuICAgICAgICA2MixcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNixcbiAgICAgICAgODMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDUwLFxuICAgICAgICA2NixcbiAgICAgICAgNDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODUsXG4gICAgICAgIDE5LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjEsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ1LFxuICAgICAgICA1NixcbiAgICAgICAgMTksXG4gICAgICAgIDk1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDY0LFxuICAgICAgICAyOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk2LFxuICAgICAgICA2OCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTUxLFxuICAgICAgICA3OSxcbiAgICAgICAgODUsXG4gICAgICAgIDU0LFxuICAgICAgICAzNixcbiAgICAgICAgNTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA3LFxuICAgICAgICA5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQzLFxuICAgICAgICA0MCxcbiAgICAgICAgMSxcbiAgICAgICAgMjI4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjA3LFxuICAgICAgICA1OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDUyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2MixcbiAgICAgICAgMzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI4LFxuICAgICAgICA4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM2LFxuICAgICAgICA1MCxcbiAgICAgICAgNixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDgzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODAsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExNixcbiAgICAgICAgNTgsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzLFxuICAgICAgICA1MixcbiAgICAgICAgOTksXG4gICAgICAgIDExNixcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDU4LFxuICAgICAgICAxODIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMixcbiAgICAgICAgMTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjAsXG4gICAgICAgIDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDM0LFxuICAgICAgICAxODUsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwic0d2Z0lZZTQvZFFxQ0xPVXpYemszZTJJMWJaM01qdXdsaWRDQ3N6YThKRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUWpUMG1TOHRRRS16OHJYSW1fV3dBUVwiLFxuICBcInBob25lSWRcIjogXCI2OTcxZWNmYy1hZDg2LTQ0MjYtOTEzNy0wODcxZGI1YTA1MTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjU1LFxuICAgICAgMjA5LFxuICAgICAgMTc1LFxuICAgICAgNjEsXG4gICAgICAyMTQsXG4gICAgICA2NyxcbiAgICAgIDksXG4gICAgICAxMDUsXG4gICAgICAyMTksXG4gICAgICAyMzcsXG4gICAgICA0LFxuICAgICAgNzIsXG4gICAgICAyOCxcbiAgICAgIDEzMCxcbiAgICAgIDk5LFxuICAgICAgMjM3LFxuICAgICAgMTYyLFxuICAgICAgNDgsXG4gICAgICAxOTEsXG4gICAgICAxMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzcsXG4gICAgICAxODQsXG4gICAgICA5NSxcbiAgICAgIDQsXG4gICAgICAwLFxuICAgICAgMjUxLFxuICAgICAgMTE5LFxuICAgICAgMTE1LFxuICAgICAgMjE1LFxuICAgICAgMTgxLFxuICAgICAgMTc0LFxuICAgICAgMTM2LFxuICAgICAgMjExLFxuICAgICAgMTU1LFxuICAgICAgMTQyLFxuICAgICAgMjA0LFxuICAgICAgMTIxLFxuICAgICAgMTI3LFxuICAgICAgNTgsXG4gICAgICA5NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01td2pNb0NFTGJaaExFR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOXlURnRiMGJ3MDNyUEhjU0lNRCtBYjd6aktwd2orZFNWMmUweHUvdVNEOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJsRVZ5OHhGdFZBcFdLcnNDd3J3a0JnbTEzWEZrWW1QSk9DN0swOGNYZWRLamVyejRkdkdZWE03WkNUMzcyWlZ6UTZJVDZFS1laOElGZTEvdWxmUW1DQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJYYWFDd0kzajAxQ3YreVI2OUxUenNoY2pUNlk1M09yVDQwNExmU2l3MkZkY1gwQzhhaGNrdk5hODBKS2NBOWZod3NQUnhEOUd5MS9ydkFjQ3lGVHhCUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjUwOTQzNzgyNTA4OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxODMwNDYzMTI3NTY0Mzo5QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkhhYmJ5ODhfRkZYXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI1MDk0Mzc4MjUwODo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA2M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzEzNDUwMTcxXG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "IA FAMOUS TECH ",
  packname: process.env.PACK_NAME || "BYBYMIX",
  botname : process.env.BOT_NAME  || "IA BYBYMIX OF FAMOUS-TECH",
  ownername:process.env.OWNER_NAME|| "BYBYMIX ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
