const qrformel = document.getElementById('qrform')
const qrImageel = document.getElementById('qrImage')
const qrContainerel = document.getElementById('qrContainer')
const qrInputTextel = document.getElementById('qrInputText')
const Generatebtnel = document.getElementById('Generatebtn')
const renderQRCode = (url)=>{
    if (!url) return;
    Generatebtnel.innerText = "Generating QR Code... "
    qrImageel.src = url;
    qrContainerel.classList.add("show")
    qrImageel.addEventListener("load",()=>{
      Generatebtnel.innerText = "Generate QR Code"
    })
}
qrformel.addEventListener("submit", (event)=>{
    event.preventDefault();
    // here we use preventdefault ...for preventing page reloading
    const formdata = new FormData(qrformel);
    const text = formdata.get('qrText')
    const qrCodeUrl = `https://quickchart.io/qr?text=Here's%20my%20text&dark=f00&light=0ff&ecLevel=Q&format= ${text}`
    
    
    renderQRCode(qrCodeUrl);
    
})
qrInputTextel.addEventListener("keyup",()=>{
    if(qrInputTextel.value.trim()) {
        qrContainerel.classList.remove("show");
    }
})