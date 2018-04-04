# act-dropbox-upload

Apify act for uploading files to Dropbox.  
It is capable of uploading a file accessible at a URL or by setting its contents as text or base64.


**INPUT EXAMPLES**

__Uploading a file from URL__
```
{
    "accessToken": "DROPBOX_TOKEN",       // dropbox access token
    "filePath": "DROPBOX_FILE_PATH",      // path on dropbox to save the file to
    "fileUrl": "FILE_TO_UPLOAD"           // url to get the file from
}
```
__Uploading a file as text__
```
{
    "accessToken": "DROPBOX_TOKEN",       // dropbox access token
    "filePath": "DROPBOX_FILE_PATH",      // path on dropbox to save the file to
    "fileContents": "FILE_CONTENTS"       // contents of the file as text
}
```
__Uploading a file as base64__
```
{
    "accessToken": "DROPBOX_TOKEN",       // dropbox access token
    "filePath": "DROPBOX_FILE_PATH",      // path on dropbox to save the file to
    "fileBase64": "FILE_CONTENTS"         // contents of the file as base64
}
```
