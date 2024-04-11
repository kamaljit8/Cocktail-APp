document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("downloadButton").addEventListener("click", function() {
        let downloadCount = parseInt(localStorage.getItem("downloadCount") || 0);
        downloadCount++;
        localStorage.setItem("downloadCount", downloadCount);
        document.getElementById("download-count").textContent = downloadCount;

        const fileUrl = "app-release.apk"; 
        const downloadLink = document.createElement("a");
        downloadLink.href = fileUrl;
        downloadLink.download = "app-release.apk"; 
        downloadLink.click();
    });

    let downloadCount = parseInt(localStorage.getItem("downloadCount") || 0);
    document.getElementById("download-count").textContent = downloadCount;
});
