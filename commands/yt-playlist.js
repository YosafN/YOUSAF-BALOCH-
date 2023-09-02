const { smd, sleep, getBuffer } = require('../lib');
const ytdl = require('ytdl-core');
const yts = require('yt-search');
const fs = require('fs');

smd({
    pattern: "playlist",
    desc: "Downloads video from playlist.",
    category: "downloader",
    filename: __filename,
    use: '<yt playlist url>',
}, async (Void, citel, text) => {
    if (!text) {
        citel.reply(`❌ Please provide me a YouTube playlist URL.`);
        return;
    }

    try {
        const playlist = await yts({ listId: text });

        if (!playlist) {
            citel.reply(`❌ Playlist not found.`);
            return;
        }

        citel.reply('This process may take some time.');

        for (let i = 0; i < playlist.videos.length; i++) {
            const video = playlist.videos[i];

            if (!video.url || !video.title) continue;

            try {
                const infoYt = await ytdl.getInfo(video.url);

                if (infoYt.videoDetails.lengthSeconds >= videotime) continue;

                const titleYt = infoYt.videoDetails.title;
                const thumbnail = await getBuffer(infoYt.videoDetails.thumbnail.thumbnails[0].url);
                const randomName = getRandom(".mp4");

                const stream = ytdl(video.url, { filter: (info) => info.itag === '22' || info.itag === '18' })
                    .pipe(fs.createWriteStream(`./${randomName}`));

                await new Promise((resolve, reject) => {
                    stream.on("error", reject);
                    stream.on("finish", resolve);
                });

                const stats = fs.statSync(`./${randomName}`);
                const fileSizeInBytes = stats.size;
                const fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);

                if (fileSizeInMegabytes <= dlsize) {
                    const buttonMessage = {
                        video: fs.readFileSync(`./${randomName}`),
                        mimetype: 'video/mp4',
                        fileName: `${titleYt}.mp4`,
                        caption: `⿻ Title: ${titleYt}\n⿻ File Size: ${fileSizeInMegabytes} MB`,
                        headerType: 4,
                        contextInfo: {
                            externalAdReply: {
                                title: titleYt,
                                body: citel.pushName,
                                thumbnail: thumbnail,
                                renderLargerThumbnail: true,
                                mediaType: 2,
                                mediaUrl: video.url,
                                sourceUrl: video.url
                            }
                        }
                    }

                    Void.sendMessage(citel.chat, buttonMessage, { quoted: citel });
                } else {
                    citel.reply(`❌ File size is larger than ${dlsize}MB.`);
                }

                fs.unlinkSync(`./${randomName}`);
            } catch (e) {
                console.error(e);
            }
        }
    } catch (error) {
        console.error(error);
        citel.reply(`❌ An error occurred while processing the playlist.`);
    }
});
