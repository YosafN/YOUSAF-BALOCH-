## Deploy on VPS or PC.
- You need to Install git,ffmpeg,curl,nodejs,yarn with pm2 
   1. Install git ffmpeg curl 
      ``` 
       sudo apt -y update &&  sudo apt -y upgrade 
       sudo apt -y install git ffmpeg curl
      ``` 
   2. Install nodejs  
      ```   
      sudo apt -y remove nodejs
      curl -fsSl https://deb.nodesource.com/setup_lts.x | sudo bash - && sudo apt -y install nodejs
      ```
  
   3. Install yarn
      ```
      curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - 
      echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
      sudo apt -y update && sudo apt -y install yarn
      ```  
  
   4. Install pm2
      ```
      sudo yarn global add pm2
      ```
  
   5. Clone Repo and install required packages
      ```
      git clone https://github.com/SuhailTechInfo/Suhail-Md
      cd Suhail-Md
      yarn install --network-concurrency 1
      ```

   6. Create an env file for ENV. 
      ```
      touch config.env
      nano config.env
      ```
      copy paste lines below.

      ```
      OWNER_NUMBER="08118667211"
      SESSION_ID = "SESSION"SUHAIL_20_42_03_05_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwidUxJUTI1dmwrVXB2eFROZWJiaHR0RGRWZGVRWU1sbkZoaTliREd5THFXRT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImlzbUFZVit0S3h5Z3dZSWl1TFRGZk9PTEhCWlNQQ3EvR2gzbkErSU5MeUU9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwibVBoeEkzak90NHlFQUtHMklHMnlabloyTWw5TXhnTllRek5WQkpXVzZtTT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImhDOU94Y0hIVEo5OG5qS3lHdm9NTjZuK1djRFd2SGZNZkwvZW44U2swRlU9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiMER1b25XL2JLV1FLSC9VeFcxZU50YWtOY2M5T3lrZUpJUXI0OGpidjYzYz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIm9RR2R1SG9PVndnYm13ZW5ldCtvakxCelZIUnBzWm5YU1ZFWHZER04wVm89XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJzSXI5aFE5aFFwNTlKcUZvZlk4NW5KZnJGYjVDWWxHSmFSd2ZqdUpqWWxjPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiejd5eDZBai9qbVd0RWZhdU1KeEloU0dKMVRtOXpxYlE3a0F3OTk2c0tSMD1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJFY0sxTDdVcVFEVG5xM1BxRW1VcGdxUk9ZWlpoWUk1V3ZDSVRTQzZCUUtTWG9xelBiVkQ4S3NTU3pmTExlbTE0cUpNUDlHb3RXVEtvOStsMDF5SzdnZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6OTAsXCJhZHZTZWNyZXRLZXlcIjpcImlibWYxZDVDRkNGU25UNnY4RzFUa1h4b0NxQW1Ia2xVNzBJZWFUTFFEazQ9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbXSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjAsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJnRFJvbWpOQ1NGV0JmRTAyay02MEZnXCIsXCJwaG9uZUlkXCI6XCJjMWJjNmNmZi1jNjA5LTQ0OGUtODVkYS1mMDk1NTk3MzY1MjFcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIk5mU2RvQ0w0cVFGdkc1SmV1ZmJSdXJRMGsydz1cIn0sXCJyZWdpc3RlcmVkXCI6dHJ1ZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ1NC9tQzYxN3U4cmpYUHF2UGZNL2RVcHNrZm89XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJwYWlyaW5nQ29kZVwiOlwiVkRXNUpaRVFcIixcIm1lXCI6e1wiaWRcIjpcIjIzNDgxMTg2NjcyMTE6MTlAcy53aGF0c2FwcC5uZXRcIixcIm5hbWVcIjpcIuGOqs6d4Y+G4Y634Y6sIOGOrOGOoOGPhs2yXCIsXCJsaWRcIjpcIjE1Mjc0MjIyMzk0MTcyOToxOUBsaWRcIn0sXCJhY2NvdW50XCI6e1wiZGV0YWlsc1wiOlwiQ0lMSHZLb0ZFSjJIbnE4R0dBRWdBQ2dBXCIsXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6XCJ6L0pMM3pidUlablhQRXlOa0pPa1NKdWIwK2hqVmJUVzZhSEk4Z05CVEhVPVwiLFwiYWNjb3VudFNpZ25hdHVyZVwiOlwiNXVwNkNYQUZ1d0FRMFhlOVN3L2g5dlRGWldNMjExQ1FlSHFMZWd3b05WdyswbkNxTUJYUExsdnRMOXlWT0JLcjJKK3UrbVlxc01Hd3JZdXdjUXRrREE9PVwiLFwiZGV2aWNlU2lnbmF0dXJlXCI6XCJxeXBucFJVdWpjQTY0cmZsazZmR1oycFNtMEVEQUFXUDluU2pIWFhJLytPLzRUSVZnUWVxNC80RVJya1U3LytEaEhGZ0VGNWk3RUhPMnlDTTFWK2Vpdz09XCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiMjM0ODExODY2NzIxMToxOUBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJjL3lTOTgyN2lHWjF6eE1qWkNUcEVpYm05UG9ZMVcwMXVtaHlQSURRVXgxXCJ9fV0sXCJwbGF0Zm9ybVwiOlwic21iYVwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcwOTY3MTMzMSxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFEN09cIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEN08uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJINEhaZklOTHUvampoSnFlblc3VTJNRFV0MGttQTV0SkdaN2NwUi9PUmRvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MzEyNDk3ODksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDk0NjMzMTE5OTZcIn0iCn0=
      THUMB_IMAGE = "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg"
      OWNER_NAME = "OT-BOT"
      PREFIX = .
      WARN_COUNT = 3
      DISABLE_PM = "false"
      THEME= "SUHAIL"
      MODE = "public"
      ANTILINK_VALUES = "https://,chat.whatsapp.com"
      
      ```
      ctrl + o and ctrl + x, To save and exit

   7. start and stop bot
 
      To start bot ``` npm start ```,
      To stop bot ``` npm stop ```

 
<h2 align="center">  NOTICE </h2>
---
- *Suhail-Md is not made by `WhatsApp Inc.` Sometimes or misusing the bot might `ban` your `WhatsApp account!`*
- *In that case, I'm not responsible for banning your account.*
- *Use Suhail-Md at your own risk by keeping this warning in mind.*
 
