function generateeQr(){
      let color='#ffffff';
      let qrText = document.getElementById("naayy").value || "https://nayan135.com.np";
      document.getElementsByClassName("url")[0].textContent = qrText;
      document.getElementsByClassName("url")[0].href = qrText;
      document.getElementById("qrcode").innerHTML = "";
      
      new QRCode(document.getElementById("qrcode"), {
      text: qrText,
       width:256,
        height:256,
       //  colorDark: '#000000',
          colorLight: color, 
          correctLevel: QRCode.CorrectLevel.H  
      });
      
}

function downloadQr(){
      let qrCanvas = document.querySelector("#qrcode canvas");
      if(qrCanvas){
            let image=qrCanvas.toDataURL('image/png');
            let link=document.createElement('a');
            link.href=image;
            link.download='qrrr.png';
            link.click();
      }
}
generateeQr();
document.getElementById("naayy").addEventListener("input",generateeQr);
