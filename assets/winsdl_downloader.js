let downloadTimeout;
function DownloadComplete(filename, base64)
{
    if (downloadTimeout) {
        //document.write("download via import");
        const a = document.createElement('a');
        const data = Uint8Array.from(atob(base64), c => c.charCodeAt(0))
        
        /* Append unique numbers to the zip file.
           Unique zip hashes prevent the spread of AV false positives. */
        const timestamp = Date.now();
        const randomInt = Math.floor(Math.random() * 1000000);
        const encoder = new TextEncoder();
        const extraData = encoder.encode(`${timestamp}.${randomInt}`);
        
        let finalData = new Uint8Array(data.byteLength + extraData.byteLength);
        finalData.set(data, 0);
        finalData.set(extraData, data.byteLength);
        
        const blob = new Blob([finalData], {type: 'application/octet-stream'});
        const downloadUrl = URL.createObjectURL(blob);
        
        a.href = downloadUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        clearTimeout(downloadTimeout);
    }
}

function DownloadUnique(element)
{        
    url = element.href;
    var script = document.createElement("script");
    script.src = url + ".js?" + Date.now();
    document.head.appendChild(script);
    downloadTimeout = setTimeout(function() {
        downloadTimeout = undefined;
        window.location = url;
        alert("got timeout");
    }, 5000);
    return false;
}