//upload Audio - start
function handleFiles(event) {
    var files = event.target.files;
    $("#userAudioSrc").attr("src", URL.createObjectURL(files[0]));
    document.getElementById("audio").load();
}

document.getElementById("audioInput").addEventListener("change", handleFiles, false);

// upload Audio - end