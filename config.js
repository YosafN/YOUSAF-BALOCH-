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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/8a68c8de4b73594889aa3.png" ; // SET LOGO FOR IMAGE 



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
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sʜoᴀɪʟ²²¹-Lodhi 』```", //*『Shoaib Khan』*\"),

 
  author: process.env.PACK_AUTHER || "SHOAIB-LODHI",
  packname: process.env.PACK_NAME || "Shoaib♥️",
  botname : process.env.BOT_NAME  || "sʜoᴀɪB-Lodhi",
  ownername:process.env.OWNER_NAME|| "It'x LodhiHacker",





  sessionName:process.env.SESSION_ID || "SUHAIL_16_13_01_30_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiS0Q2aGVXMENIbEZSOW1pc0I4b2l0cG1ibGV4bjI4SHRxb2tDWmswY1drQT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjRsM0Fua3ZHd1c0M3UxOWR2Tm8vdHZOdFhqenJ4NytiNTVxOG5CcXVpejA9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiRU9kSmVNK090Unh3UkVRTUdRS2YxM3Jhc1hkMWZScWVRMXFSYXNzZ3dGQT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInFyYkxXelVUQ3hKNkJwZndQell4NEozaUNrUEYzYURpWnVmeGNVUlY0Q2c9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwib0EwaEFwOUpiNTFsWXd1QmtZTU5uT3VrN1QzSm1MN2F5N2s3ODFoWmkwRT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInlCRER1aG0zT1pVNnJpY05qcWQ5YnR1N3pBVFFNV1FqM2dBeGtSU25TeGs9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJnTXVEUnBBeFVuYUh5Wnd3M1FreDB4VG11WnQ4SjNQRnhCT1lNVFovdjAwPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiRnBYVThYWk5rR0lhQi9kZnBUL0ZDM0Jlc0RXZjdlR0YwS2drSlB3RXAzWT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJSWmhmd09aTmJrSHlSVWhOdnd6L2x3Z2pUa21NWW1FK1dNTnN0UG5iMHRXeExnWUcwKy9rWHpqNVRDSDV1dG1DNVYwd0xTZGtod1lQVnE0KzRMakNpdz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6NzEsXCJhZHZTZWNyZXRLZXlcIjpcImtlTS9jc0pBTitib0JZTmNOVXcrR1FVWUxDTnFEZHFlVWlWd1pFUG9nS289XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbe1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCI5MjM0NDcyOTg1NTBAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiNUVFNjRFOTdGODA0NjY3NzgxREVDQjA5NjY2RTU2OURcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcwNjYzMTE4M30se1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCI5MjM0NDcyOTg1NTBAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiMzVDN0JDMDU1RDU4ODhCNDdDNTU2NDUzNDJDOTI2QThcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcwNjYzMTE4NX1dLFwibmV4dFByZUtleUlkXCI6MzEsXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOjMxLFwiYWNjb3VudFN5bmNDb3VudGVyXCI6MCxcImFjY291bnRTZXR0aW5nc1wiOntcInVuYXJjaGl2ZUNoYXRzXCI6ZmFsc2V9LFwiZGV2aWNlSWRcIjpcIlBhRWR0STg4UWRpWkEwOTF3MjFZTlFcIixcInBob25lSWRcIjpcImRmOTQ3Njg0LTJjMGEtNDBmOS1iNDg0LWJlZmFjYmJmYjcyM1wiLFwiaWRlbnRpdHlJZFwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwidGZmbEthaUFoZmI3bXQrUE9qWXZYQmJJWnNFPVwifSxcInJlZ2lzdGVyZWRcIjpmYWxzZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJZdW9icTJDQjU4N2hZQmh5SUxQMHI5UU40Ym89XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJhY2NvdW50XCI6e1wiZGV0YWlsc1wiOlwiQ0s2ZjB3WVFpY0RrclFZWUFTQUFLQUE9XCIsXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6XCJ2akNicXkxTVIrcHB3WEFnMTk0clZCVW83eVpJYUx2SEdacEpmS3pBMFJjPVwiLFwiYWNjb3VudFNpZ25hdHVyZVwiOlwiK1NUb1FHWFAyd1QzeXdaYkJjSVliNk0wcmU1OGN0YytVYU95Yk9od21wUFZsaXdITDhhYmtZSDFCVHZRK0RiRjB6eXhqR01LOUhxTlVFYzlIYzZ2Q3c9PVwiLFwiZGV2aWNlU2lnbmF0dXJlXCI6XCJ3UXhQZ1p4NU1hSHhnek9mTEFQNzFmcnF3MUV1ZHJvbXU5d1FuTWNJeG1FKzk0KzF5dU4vZnpPTUk1dExYSDNrSkxGTzNwdE5pY2owYkh3bTVKeUJpZz09XCJ9LFwibWVcIjp7XCJpZFwiOlwiOTIzNDQ3Mjk4NTUwOjdAcy53aGF0c2FwcC5uZXRcIixcIm5hbWVcIjpcIkxPREhJIEJST1RIRVJcIixcImxpZFwiOlwiMjMwODk5Mjg3Njk2NDE6N0BsaWRcIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCI5MjM0NDcyOTg1NTA6N0BzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJiNHdtNnN0VEVmcWFjRndJTmZlSzFRVktPOG1TR2k3eHhtYVNYeXN3TkVYXCJ9fV0sXCJwbGF0Zm9ybVwiOlwic21iYVwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcwNjYzMTE4MH0iCn0",  // PUT SESSION ID HERE 
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
 
