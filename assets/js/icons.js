function changeTab(value) {
    switch (value) {
        case "bing":
            setTab("Bing", "/assets/images/icons/bing.ico");
            break;

        case "new":
            setTab("New Tab", "/assets/images/icons/chromenewtab.ico");
            break;

        case "desmos":
            setTab("Desmos | Graphing Calculator", "/assets/images/icons/desmos.ico");
            break;

        case "gmail":
            setTab("Gmail", "/assets/images/icons/gmail.ico");
            break;

        case "google":
            setTab("Google", "/assets/images/icons/google.ico");
            break;

        case "classroom":
            setTab("Home", "/assets/images/icons/googleclassroom.ico");
            break;

        case "googledrive":
            setTab("My Drive", "/assets/images/icons/googledrive.ico");
            break;

        case "wikipedia":
            setTab("Wikipedia", "/assets/images/icons/wikipedia.ico");
            break;

        default:
            resetTab();
    }
}