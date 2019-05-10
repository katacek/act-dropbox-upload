require('isomorphic-fetch');
const Apify = require('apify');
const request = require('request-promise');
const Dropbox = require('dropbox').Dropbox;

Apify.main(async () => {
    const input = await Apify.getValue('INPUT');

    if(!input.accessToken){throw new Error('Missing "accessToken" attribute in INPUT!');}
    if(!input.filePath){throw new Error('Missing "filePath" attribute in INPUT!');}
    if(!input.fileUrl && !input.fileContents && !input.fileBase64){
        throw new Error('Missing "fileUrl", "fileContents" or "fileBase64" attribute in INPUT!');
    }

    const fileData = input.fileUrl ? (await request({
        uri: input.fileUrl,
        encoding: null
    })) : (input.fileContents || Buffer.from(input.fileBase64, 'base64'));

    const dbx = new Dropbox({ accessToken: input.accessToken });
    // try to upload the file with retries
    let lastError;
    for (let i = 0; i < 4; i++) {
        try {
            const response = await dbx.filesUpload({path: input.filePath, contents: fileData, mode: 'overwrite'});
            console.log(response)
            return response;
        } catch (e) {
            lastError = e;
            console.log(e)
            await Apify.utils.sleep((i + 1) * 600);
        }
    }
    throw lastError;
});
