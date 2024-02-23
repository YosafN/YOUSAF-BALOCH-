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
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

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
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_21_37_02_08_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiVURzTlA5NG8yaklsV1BVdGxod3B2M25DREZ5OU5PSHBtS3UvdXQzMFZYOD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIms0K21TQm9ONVVVSnlDeXVSYmUzU0RHcWJ2a3M3ZXlPUGFIN2dmK1RpSHc9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwib0xNVGFGaXZOQ3RxM2tFbUpjaEd0M1BQc3lQQ0o3QW9zalFvSE4zWmFVOD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIm1sVFVCMHY1a1ZEQ2lBbUxhWE41dW1YTzBCNEhrRDJFdS9NbWo1ZmROSEU9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiK0lSVmlzUndVTmlVZVIreHFuR1NEZWFWRVhOM2dHaFlPcG9DTExoK2hYOD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkE3R1NMWENPN2VKY1hsQ1BXbUwrcmJGaGoxZzE5MVBNd2lCUzFseVBoQnM9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ1Rk11YXFldkQwbDNGVEZ4OUNZSkFCTjl0UTEwcDVRVjFGOUZ0aWprRjJVPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwibmM2TzR4Nmh6Tzh1NzZxcUgvSEZvMk9xbEp6bDJsQkl1eUxEbVpYV1hCWT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCIvZ0hkSWllY3dBWFo3dk9kd3RXaVllTVhxMGtuNTJScW9iTmNoZDF3ZU9PLzhmbFBqSHpPWVpHTzBBVVRjakhyNzJJMDN0UDBoT2UwaE54VlorQXlCUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTY2LFwiYWR2U2VjcmV0S2V5XCI6XCJVQTNMQ2tWdkNweExCOEhCQWV3MWZoZ1Exa3Z2ZXdXRkowNlZTTmVqY3hrPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiTnlLakVhZVNUNDJSczZCOWoxZ0RSZ1wiLFwicGhvbmVJZFwiOlwiNmVmZDBkMjQtZjcxNC00MzdkLTgxMTAtNDYyZDZlYWNmZWM0XCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJqQ0pVMUxPcS9DaGh2MDQ3Y1pCVnJEdS8rRjA9XCJ9LFwicmVnaXN0ZXJlZFwiOmZhbHNlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjhoOHc1MGtTZkcvRGZyaVZhUkJQOVRLWkY5az1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDTHJTcEx3S0VKQ1RsYTRHR0FNZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIjRnNVdlZm9LM092Uno2SVFrTFN2YzAzc3RYQmk0N05DRXZ4eGtxWGxZMG89XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJNRy81Rnd6NWh3TTc4VmpVdmJJZHZ2SThkODAwZVYrTDZxaWhFZWlLeE9HRjFMelQxYjdqb01ScWF0V1BTN1JRcWZUbVJBbUExdjZ5MW9rMkZDd2xqQT09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcIlZZQlNhbFYxVkc2MVJObS84WFVBK1pXdFhGVXBGcFFSQ1l1VGJ2S0FUdGpKdXEwMVljNlJ0N0lvT2hCZXRZWWNoeHNyYktJNDN5cEhreGlKSnFySkFBPT1cIn0sXCJtZVwiOntcImlkXCI6XCIyMzQ4MTI5NTg0ODMxOjZAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiMTk3NjExNTYyNzU4MzU2OjZAbGlkXCIsXCJuYW1lXCI6XCJFbW15Z3JlYXRfZ2FkZ2V0XCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiMjM0ODEyOTU4NDgzMTo2QHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQmVJT1ZubjZDdHpyMGMraUVKQzByM05ON0xWd1l1T3pRaEw4Y1pLbDVXTktcIn19XSxcInBsYXRmb3JtXCI6XCJpcGhvbmVcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MDc0MjgyNDMsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBSW9IXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSW4rLmpzb24iOiAie1wia2V5RGF0YVwiOlwiam04aGE2empsUDdzV0g3VWgvM1VieG5NNVprUnlPTnhyR2p4ZDBkY200TT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyODEwNzg0MDU4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE2OTUyMDE3OTQwMTJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJbjUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJXWVIrSXpUQzh2U3MzTFVPNHcxWGdKK21tRzZWSHgzUDdnWERtTFA0aEdBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI4MTA3ODQwNTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTY5NTExODMwMDU2M1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUluNy5qc29uIjogIntcImtleURhdGFcIjpcImM3S0I5SDd3Kzg3NzIrSWRxUnUyVElXbU5FVGVhekNjOEEwVHJpMkNGdXc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjgxMDc4NDA1OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNjk1MTI0Mjk1NzMwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSW9BLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNSszK1ZURHliTWR3SGJiMXNkUHVwV1FoUUVnTDdTWXpBcnQxVmJRVE5DRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyODEwNzg0MDU4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE2OTUyMjUzMTA2MThcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJb0MuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNU2pRTThLbC9RVm5QY1FaNkFBUm1mblpHOUNpUGsvSGdYRktTaVhZcXZvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI4MTA3ODQwNTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTY5NjQ4OTMxOTQwNlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlvRS5qc29uIjogIntcImtleURhdGFcIjpcImlNWXhtOWlKOEZJS2pjMWlsRW1FdktEWmZoZWJDTDZEZTRCMllEbXc3TVk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjgxMDc4NDA1OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNjk3MDIyMTgyMDAyXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSW9HLmpzb24iOiAie1wia2V5RGF0YVwiOlwidmEvM1loSWpyWGp1SURrVElOY1U0SFI4K1NybnA1bFF3QmRRbkgwdzM5cz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyODEwNzg0MDU4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE2OTc4NDI2Mjc5MjVcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJb0guanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpdG1uQXBxOGNYZTU3eGFNbzJvSW1wZ0EzS3VJYmtVUXl6L0syRlVKSmU4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI4MTA3ODQwNTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcwMDQ2NjYyMDU3NVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlvSi5qc29uIjogIntcImtleURhdGFcIjpcIkpla2JoZ050NWhoOTd0a1Y3VmQvbzVKNVJUenlQWnlUcENnRzdwY096NWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjgxMDc4NDA1OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzAwNDc4NDI5MzcwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSW9LLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOGZPeVNNbWZkVlM0RDg2WUNZS243UnNyc0NGSTJieENNNVpMYUNGTVBKdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyODEwNzg0MDU4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDMwODY2ODEzOTJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJb0wuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1SnhTd3JNMExmOHZtaVZmWlBsZkMreWg3d21NN3NSeTlKRVMvQzc4UldFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI4MTA3ODQwNTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcwNTY5NzM4MzY5OFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQVFBQUluNi5qc29uIjogIntcImtleURhdGFcIjpcIkVHMlV1cTZoM3JNb1lCUndZcW5YdXlJY0tsVStTb0JxcjBuMWFNR1ZtUms9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjgxMDc4NDA1OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzQsMF19LFwidGltZXN0YW1wXCI6XCIxNjk1MTIyODg3MjI5XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBUUFBSW44Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiRmdpVkhPY1BIZzJKNVJ1RzBsSWdpdUFtaG5hQ0U4YnJlckQ5c1ZBTTRwVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyODEwNzg0MDU4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbNCwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE2OTUxOTkyMTkwMDVcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFRQUFJbl9fLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQ2JlS21QUWRXT1dmdGNSSzUyWWpLdnN5bjlPM3dRODV1VEFYb0sxSjMwZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyODEwNzg0MDU4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbNCwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE2OTUyMDY4MTI4NzBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFRQUFJb0IuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJCR010WjA5WmRDZ3NDM3M2cmNha1R1SVREcnFmTktRNDdaRlp0di9TaGNvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI4MTA3ODQwNTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOls0LDBdfSxcInRpbWVzdGFtcFwiOlwiMTY5NjQ1NDg5OTI1N1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQVFBQUlvRC5qc29uIjogIntcImtleURhdGFcIjpcIkc1Y0dnbGs4RDRTa1BQekFkellFM1ZMT0NXZXFzeUZsaEsrSHduc3ppbnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjgxMDc4NDA1OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsNF19LFwidGltZXN0YW1wXCI6XCIxNjk2OTY5NTIxODc3XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBUUFBSW9GLmpzb24iOiAie1wia2V5RGF0YVwiOlwiR2xVa2FaK3VlZkV4N2JHRDFKU2NkUlp6dmU3S0VtNkpTM3ZVZUcwKzNSTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyODEwNzg0MDU4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbNCwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE2OTc4MzA2ODQ0NzBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFRQUFJb0guanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJsQm92U1BWdVZPVzNIVXl3N0NRb0lFZGhDWGtMbjNHRXY4eTRmMGJuVThNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI4MTA3ODQwNTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOls0LDBdfSxcInRpbWVzdGFtcFwiOlwiMTcwMDQ3MDIwODUzNVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQVFBQUlvSS5qc29uIjogIntcImtleURhdGFcIjpcIkxDOFozeWxEWTJWQk5PN1p0RkY5R01sWUNCRlZtVVJCMCs2dEtqS005RHM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjgxMDc4NDA1OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsNF19LFwidGltZXN0YW1wXCI6XCIxNzAwNDcwMjkyNjAyXCJ9Igp9",  // PUT SESSION ID HERE 
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
 
