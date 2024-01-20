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
      OWNER_NUMBER="+2347086262284"
      SESSION_ID = "SESSION_01_24_01_20_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUw3ZFJ5YWdGc1VDemdTdVlDVmU0VVFobmZHQ1c5VjhwNlZpVGNGNzUzYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN29lbFo1eWl6TkFabWdYcno5ZWtGaVFmbzZQaU1xUGRFS3A0ZUc3aGgycz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTGdhMDRxdlVsRjRyaE5rSHdWb1greE4rUzU2elRPa2NpdWZ0RGJhdTJJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmaUQ4cHViMzlDSG1qL2xpcUpZZEpOK0w0L01YU21hT0hPcUdhcStCRGxrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklQdFVJSFdKaDFTSVlFZVRiRm9tQUY3YXBPSTIxZjBIbVpqOGh1VGJDRWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InF3VXB5N1R2ZUdxL1dvdmdJQkZ3cm5uMzRsdlY4dVJ6WnovWDRCTko1VU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUZrc2MxR3BmZWxpSmVVRTI4UkdxV3VOK2VmNDhuS1U3ZFBsZUQxTXRYUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY3hvKy9zRVBUK1FKODlmUzFsNWJjZ24xc0xicVI5RW1MUVhKVXJMZENCST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjN2TTA2YUVnNi94eG9MWDI0QmY4MExOM2psMkJyUkF6RFVGZDk4VjlOZVJPOUxxc0UyNjE3dkFPa1NHL2FObzU1VEt3RGVxNU14VWFUZWUyYmg2WENBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ3LCJhZHZTZWNyZXRLZXkiOiI2UDhxZmxpMTFZZEhnTlFMUDkwM3Yvcitaa2JJdUc3VFFtV0FsN1lyTWtBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwODYyNjIyODRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNzhBOEEzQkE4MzczNTIyOTA4OTk4MzkzMkFEMzQ3RjIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcwNTcxMzg5Mn1dLCJuZXh0UHJlS2V5SWQiOjYxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6NjEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiSTJSTkhzM3ZSQnVVdlptdlpfMEoxUSIsInBob25lSWQiOiJlMDJhYzA4ZC1mMjIwLTQ2ZDktYmNiZi01N2E5MDhmM2RmZGMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWnZralA2b3B1ZWJTL0REUGlzM1JsTWpxdHNjPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHOHNJMzNOcXZQOG15MG83clRnMHdGd0NJdG89In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNLTE1qNGtDRU5qQnJLMEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ2alZQQWg3WjNZRnIrWGovY1hBd0srUCtLWFpENGR1WDR6MnZmTjBLUm00PSIsImFjY291bnRTaWduYXR1cmUiOiJKWFJMQ0pWUFdBNTFEYmxudUlTbDQzYnB2MHc2SzNpWFdhMFVkSWlzRnpkUXZ4dnE1RlVZY3FFSFhEZmQ0YU1QM0ZILzlZT3FnUFhyeTdwaHY5WTFCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoibWpHdlI0TmRTdTZEQW40S3hXbWhjbUkxeDE0cE1vZkRaKzlaZ25CT204bUN1bkE3VXVRUk1GTG5BYktBNFJhaXdoYXpONSt5M1ltS3d3bXN4THhURFE9PSJ9LCJtZSI6eyJpZCI6IjIzNDcwODYyNjIyODQ6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJBeWVuaSBFbGl6YWJldGgifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzA4NjI2MjI4NDoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmI0MVR3SWUyZDJCYS9sNC8zRndNQ3ZqL2lsMlErSGJsK005cjN6ZENrWnUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDU3MTM4ODQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRXZTIn0="
      THUMB_IMAGE = "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg"
      OWNER_NAME = "Ayeni"
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


 

 
