const axios = require('axios');
const cheerio = require('cheerio');

async function mediafireDl(link) {
  try {
    const response = await axios.get(link);
    const $ = cheerio.load(response.data);

    const files = [];
    const downloadLink = $('a#downloadButton').attr('href');
    const fileInfo = $('div#downloadButton')
      .text()
      .split('\n')
      .map((text) => text.trim())
      .filter((text) => text !== '');

    const fileName = fileInfo[0];
    const fileSize = fileInfo[1];
    const fileMIME = fileInfo[2];

    files.push({
      name: fileName,
      size: fileSize,
      mime: fileMIME,
      link: downloadLink,
    });

    return files;
  } catch (error) {
    console.error('Error:', error.message);
    return [];
  }
}

module.exports = { mediafireDl, mediafire: mediafireDl };
