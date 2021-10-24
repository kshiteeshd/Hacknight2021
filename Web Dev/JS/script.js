let btnDownload = document.getElementsByTagName('button');
console.log(btnDownload)

// btnDownload = Array.from(btnDownload)

// console.log(btnDownload)
// let img = document.querySelector('img');


for(let i=0; i < btnDownload.length; i++) {
    console.log(btnDownload[i].previousElementSibling, "\n")
    btnDownload[i].addEventListener('click', () => {
        let imagePath = btnDownload[i].previousElementSibling.getAttribute('src');
        let fileName = getFileName(imagePath);
        saveAs(imagePath, fileName);
    })
}

// Must use FileSaver.js 2.0.2 because 2.0.3 has issues.
// btnDownload.map(btn => btn.addEventListener('click', () => {
//     console.log(btn.previousSibling.innerHTML)
//     let imagePath = img.getAttribute('src');
//     let fileName = getFileName(imagePath);
//     saveAs(imagePath, fileName);
// }));

function getFileName(str) {
    return str.substring(str.lastIndexOf('/') + 1)
}