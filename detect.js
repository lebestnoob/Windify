window.onload = function() {

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // true for mobile device
        document.getElementById("device").textContent = "Phone or Tablet";
    } else {
        // false for not mobile device
        document.getElementById("device").textContent = "Desktop or Laptop";
    }

    var OSName = "Unknown";
    if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
    if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
    if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
    if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";
    document.getElementById("platform").textContent = OSName;
    document.getElementById("ua").textContent = navigator.appVersion;
};