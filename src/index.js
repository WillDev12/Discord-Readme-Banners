function generatePreview() {

  var previewBox = document.getElementById('previewBox');
  var username = document.getElementById('userName').value;
  var tag = document.getElementById('tagId').value;
  var aboutMe = document.getElementById('aboutMe').value;
  var imageUrl = document.getElementById('imageUrl').value;

  var houseicon = "";

  if (document.getElementById('bravery').checked) {

    houseicon = "https://github.com/WillDev12/Discord-Readme-Banner/blob/main/dicsord-bravery.png?raw=true";

  } else if (document.getElementById('brilliance').checked) {

    houseicon = "https://github.com/WillDev12/Discord-Readme-Banner/blob/main/discord-brilliance.png?raw=true";

  } else if (document.getElementById('balance').checked) {

    houseicon = "https://github.com/WillDev12/Discord-Readme-Banner/blob/main/discord-balance.png?raw=true";

  }

  var html = `<svg width="442" height="267" viewbox="" id="svg"> <path d="M21,1 h400 a20,20 0 0 1 20,20 v225 a20,20 0 0 1 -20,20 h-400 a20,20 0 0 1 -20,-20 v-225 a20,20 0 0 1 20,-20 z" x="0" y="0" style="fill:#232428"/> <path d="M-19,1 h440 a20,20 0 0 1 20,20 v60 h-440 v-60 a20,20 0 0 1 20,-20 z" x="0" y="0" style="fill:purple"/> <defs> <rect id="rect" x="25" y="37" width="70px" height="70px" rx="100"/> <clipPath id="clip"> <use xlink:href="#rect"/> </clipPath> </defs> <use xlink:href="#rect" stroke-width="10" stroke="#232428" fill="#232428"/> <image xlink:href="` + imageUrl + `" x="24.5" y="37" width="70px" height="70px" clip-path="url(#clip)"/> <path d="M35,118 h370 a15,15 0 0 1 15,15 v95 a15,15 0 0 1 -15,15 h-370 a15,15 0 0 1 -15,-15 v-95 a15,15 0 0 1 15,-15 z" style="fill:#111214"/> <text fill="#F8FBFF" x="35" y="150" style="font-size:20px;font-family: sans-serif;font-weight:500;">` + username + tag + `</text> <text fill="#F8FBFF" x="35" y="187" style="font-size:14px;font-family: sans-serif;font-weight:600;">ABOUT ME</text> <text fill="#F8FBFF" x="35" y="206" style="font-size:14px;font-family: sans-serif;font-weight:500;">` + aboutMe + `</text> <path d="M390,85 h20 a5,5 0 0 1 5,5 v20 a5,5 0 0 1 -5,5 h-20 a5,5 0 0 1 -5,-5 v-20 a5,5 0 0 1 5,-5 z" style="fill:#111214"/> <image xlink:href="` + houseicon + `" x="390" y="85" width="20" height="30"></image> <path d="M35,163 h370 z" stroke="#2E2F34" stroke-width="0.2"> <style> @keyframes onOpen { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; } } svg { animation: 0.3s ease-out 0s 1 onOpen; } </style> </svg>`;

  document.getElementById('previewBox').innerHTML = html;

  var svg = document.getElementById("svg");

  var serializer = new XMLSerializer();
  var source = serializer.serializeToString(svg);

  if(!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)){
      source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
  }
  if(!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)){
      source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
  }

  source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

  var url = "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(source);

  document.getElementById('codebox').textContent =  url;

}

function copyResult() {

    var texts = document.getElementById('codebox').textContent;
    var link = document.createElement("a");
    link.download = "discord.svg";
    link.href = texts;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;

}
