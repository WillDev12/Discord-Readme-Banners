function generatePreview() {
    var previewBox = document.getElementById("previewBox");
    var username = document.getElementById("userName").value;
    var tag = document.getElementById("tagId").value;
    var aboutMe = document.getElementById("aboutMe").value;

    var houseicon = "";

    if (document.getElementById("bravery").checked) {
        houseicon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" version="1.1" x="390" y="90"><path d="" stroke="none" fill="#9c84f4" fill-rule="evenodd"/><path d="M 0 6.807 L 0 13.615 4.529 16.807 L 9.058 20 10.027 20 L 10.995 20 15.998 16.406 L 21 12.812 21 6.406 L 21 0 10.500 0 L 0 0 0 6.807 M 5.301 8.892 L 5.631 11.053 7.816 12.583 L 10 14.113 12.184 12.583 L 14.369 11.053 14.699 8.892 L 15.028 6.732 13.264 8.116 L 11.500 9.500 10.750 10.500 L 10 11.500 9.250 10.500 L 8.500 9.500 6.736 8.116 L 4.972 6.732 5.301 8.892" stroke="none" fill="#9c84ec" fill-rule="evenodd"/></svg>`;
    } else if (document.getElementById("brilliance").checked) {
        houseicon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" version="1.1" x="390" y="90"><path d="" stroke="none" fill="#f47c6c" fill-rule="evenodd"/><path d="M 2.923 2.923 C -3.653 9.500, 0.895 20, 10.319 20 C 14.188 20, 15.212 19.522, 17.896 16.465 C 22.411 11.324, 22.200 6.466, 17.303 2.750 C 12.240 -1.091, 6.872 -1.026, 2.923 2.923 M 5.658 9.800 C 6.861 14.399, 13.095 14.567, 14.281 10.032 C 14.926 7.567, 14.250 7.464, 11.829 9.655 C 10.127 11.195, 9.873 11.195, 8.171 9.655 C 5.810 7.518, 5.072 7.561, 5.658 9.800" stroke="none" fill="#f47c64" fill-rule="evenodd"/></svg>`;
    } else if (document.getElementById("balance").checked) {
        houseicon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" version="1.1" x="390" y="90"><path d="" stroke="none" fill="#44dcbc" fill-rule="evenodd"/><path d="M 4.487 5.013 C -0.450 10.026, -0.450 10.026, 4.764 15.240 C 9.978 20.454, 9.978 20.454, 15.489 15.011 C 20.275 10.284, 22.730 6.813, 20.166 8.398 C 19.707 8.681, 17.363 6.908, 14.957 4.457 C 9.617 -0.985, 10.438 -1.029, 4.487 5.013 M 6 9.411 C 6 13.075, 10.354 15.246, 12.800 12.800 C 15.016 10.584, 14.272 8.444, 12 10.500 C 10.070 12.247, 9.930 12.247, 8 10.500 C 6.900 9.505, 6 9.014, 6 9.411" stroke="none" fill="#44dcc4" fill-rule="evenodd"/></svg>`;
    }

    var html =
        `<svg width="442" height="267" viewbox="" id="svg">
    
  <path d="M21,1 h400 a20,20 0 0 1 20,20 v225 a20,20 0 0 1 -20,20 h-400 a20,20 0 0 1 -20,-20 v-225 a20,20 0 0 1 20,-20 z" x="0" y="0" style="fill:#232428"/>
                      
  <path d="M-19,1 h440 a20,20 0 0 1 20,20 v60 h-440 v-60 a20,20 0 0 1 20,-20 z" x="0" y="0" style="fill:purple"/>
                      
  <defs>
  <rect id="rect" x="25" y="37" width="70px" height="70px" rx="100"/>
  <clipPath id="clip">
  <use xlink:href="#rect"/>
  </clipPath>
  </defs>
                  
  <use xlink:href="#rect" stroke-width="10" stroke="#232428" fill="#232428"/>

  <svg xmlns="http://www.w3.org/2000/svg" width="70px" height="70px" viewBox="0 0 512 512" version="1.1" x="24.5" y="37"><path d="M 197.500 142 C 180.746 145.836, 163.225 153.313, 147.731 163.240 C 140.964 167.575, 139.422 169.140, 135.784 175.359 C 130.557 184.294, 122.265 203.352, 117.154 218.177 C 107.424 246.396, 100.751 278.424, 97.510 312.466 L 95.989 328.431 101.745 334.337 C 112.888 345.770, 130.761 357.284, 146.018 362.857 C 159.427 367.755, 178.263 372, 186.587 372 C 190.843 372, 191.091 371.815, 196.476 364.661 C 199.514 360.625, 202 357.089, 202 356.803 C 202 356.518, 197.969 354.614, 193.042 352.572 C 176.865 345.867, 159.377 334.125, 147.500 321.996 L 141.500 315.869 150.500 321.524 C 174.119 336.364, 197.629 344.789, 225.801 348.508 C 239.002 350.251, 271.517 350.499, 284.026 348.953 C 313.272 345.337, 340.062 335.933, 361.737 321.673 C 371.777 315.068, 370.925 317.361, 359.737 327.055 C 346.273 338.722, 329.892 348.562, 312.216 355.600 C 309.975 356.493, 310.041 356.659, 315.716 364.365 L 321.500 372.219 329.630 371.613 C 346.079 370.386, 370.288 362.657, 385.500 353.775 C 394.266 348.657, 407.369 338.548, 412.271 333.121 C 416.601 328.330, 416.599 328.346, 414.538 308.923 C 409.353 260.073, 396.921 214.934, 379.219 180.688 C 373.296 169.228, 371.499 167.318, 360.500 160.783 C 344.685 151.388, 328.243 144.706, 313.100 141.521 C 301.757 139.135, 299.663 139.387, 297.766 143.365 L 296.161 146.730 304.285 148.957 C 322.208 153.869, 336.815 160.960, 351.068 171.667 C 364.039 181.413, 365.097 183.076, 355.138 178.069 C 325.055 162.944, 297.389 155.661, 265.110 154.371 C 228.232 152.896, 198.841 158.843, 164.252 174.777 C 155.866 178.641, 149.244 181.414, 149.537 180.939 C 150.906 178.726, 170.699 164.728, 178.153 160.703 C 187.052 155.898, 202.158 150.016, 210.693 148.034 L 215.886 146.828 214.258 143.414 C 212.838 140.438, 212.172 140.011, 209.065 140.084 C 207.104 140.131, 201.900 140.993, 197.500 142 M 202.821 242.410 C 190.237 245.758, 181.558 260.073, 183.453 274.357 C 187.102 301.864, 218.103 308.500, 230.830 284.500 C 233.131 280.161, 233.482 278.311, 233.484 270.500 C 233.485 262.993, 233.096 260.754, 231.135 257 C 224.828 244.927, 214.114 239.406, 202.821 242.410 M 299 241.939 C 293.627 243.019, 289.607 245.503, 285.283 250.416 C 275.433 261.606, 275.609 279.787, 285.675 290.983 C 297.861 304.538, 317.509 301.193, 325.632 284.182 C 327.868 279.500, 328.351 277.092, 328.380 270.500 C 328.409 263.775, 327.977 261.594, 325.667 256.818 C 320.343 245.810, 309.590 239.811, 299 241.939" stroke="none" fill="#fbfbfc" fill-rule="evenodd"/><path d="M 223.564 1.625 C 189.116 6.037, 148.947 20.301, 120.811 38.112 C 88.146 58.791, 58.791 88.146, 38.112 120.811 C 24.679 142.030, 11.372 174.858, 5.607 201 C -0.045 226.628, -1.671 260.991, 1.536 287.030 C 10.196 357.364, 47.940 421.458, 105.368 463.352 C 132.560 483.189, 167.874 499.081, 201.066 506.419 C 226.181 511.971, 259.987 513.582, 286.441 510.488 C 349.786 503.078, 410.477 470.394, 451.687 421.500 C 483.128 384.195, 505.455 333.267, 510.283 287.838 C 510.916 281.877, 511.787 277, 512.217 277 C 512.648 277, 512.964 266.988, 512.921 254.750 C 512.878 242.512, 512.566 233.175, 512.229 234 C 511.891 234.825, 511.041 230.441, 510.338 224.258 C 505.304 179.926, 485.352 132.642, 456.219 96 C 446.540 83.825, 428.152 65.440, 416 55.787 C 378.526 26.019, 334.104 7.332, 287.030 1.536 C 271.561 -0.369, 238.774 -0.323, 223.564 1.625 M 197.500 142 C 180.746 145.836, 163.225 153.313, 147.731 163.240 C 140.964 167.575, 139.422 169.140, 135.784 175.359 C 130.557 184.294, 122.265 203.352, 117.154 218.177 C 107.424 246.396, 100.751 278.424, 97.510 312.466 L 95.989 328.431 101.745 334.337 C 112.888 345.770, 130.761 357.284, 146.018 362.857 C 159.427 367.755, 178.263 372, 186.587 372 C 190.843 372, 191.091 371.815, 196.476 364.661 C 199.514 360.625, 202 357.089, 202 356.803 C 202 356.518, 197.969 354.614, 193.042 352.572 C 176.865 345.867, 159.377 334.125, 147.500 321.996 L 141.500 315.869 150.500 321.524 C 174.119 336.364, 197.629 344.789, 225.801 348.508 C 239.002 350.251, 271.517 350.499, 284.026 348.953 C 313.272 345.337, 340.062 335.933, 361.737 321.673 C 371.777 315.068, 370.925 317.361, 359.737 327.055 C 346.273 338.722, 329.892 348.562, 312.216 355.600 C 309.975 356.493, 310.041 356.659, 315.716 364.365 L 321.500 372.219 329.630 371.613 C 346.079 370.386, 370.288 362.657, 385.500 353.775 C 394.266 348.657, 407.369 338.548, 412.271 333.121 C 416.601 328.330, 416.599 328.346, 414.538 308.923 C 409.353 260.073, 396.921 214.934, 379.219 180.688 C 373.296 169.228, 371.499 167.318, 360.500 160.783 C 344.685 151.388, 328.243 144.706, 313.100 141.521 C 301.757 139.135, 299.663 139.387, 297.766 143.365 L 296.161 146.730 304.285 148.957 C 322.208 153.869, 336.815 160.960, 351.068 171.667 C 364.039 181.413, 365.097 183.076, 355.138 178.069 C 325.055 162.944, 297.389 155.661, 265.110 154.371 C 228.232 152.896, 198.841 158.843, 164.252 174.777 C 155.866 178.641, 149.244 181.414, 149.537 180.939 C 150.906 178.726, 170.699 164.728, 178.153 160.703 C 187.052 155.898, 202.158 150.016, 210.693 148.034 L 215.886 146.828 214.258 143.414 C 212.838 140.438, 212.172 140.011, 209.065 140.084 C 207.104 140.131, 201.900 140.993, 197.500 142 M 0.428 256 C 0.428 268.375, 0.571 273.438, 0.747 267.250 C 0.922 261.063, 0.922 250.938, 0.747 244.750 C 0.571 238.563, 0.428 243.625, 0.428 256 M 202.821 242.410 C 190.237 245.758, 181.558 260.073, 183.453 274.357 C 187.102 301.864, 218.103 308.500, 230.830 284.500 C 233.131 280.161, 233.482 278.311, 233.484 270.500 C 233.485 262.993, 233.096 260.754, 231.135 257 C 224.828 244.927, 214.114 239.406, 202.821 242.410 M 299 241.939 C 293.627 243.019, 289.607 245.503, 285.283 250.416 C 275.433 261.606, 275.609 279.787, 285.675 290.983 C 297.861 304.538, 317.509 301.193, 325.632 284.182 C 327.868 279.500, 328.351 277.092, 328.380 270.500 C 328.409 263.775, 327.977 261.594, 325.667 256.818 C 320.343 245.810, 309.590 239.811, 299 241.939" stroke="none" fill="#8c9cfc" fill-rule="evenodd"/></svg>
                      
  <path d="M35,118 h370 a15,15 0 0 1 15,15 v95 a15,15 0 0 1 -15,15 h-370 a15,15 0 0 1 -15,-15 v-95 a15,15 0 0 1 15,-15 z" style="fill:#111214"/>
                  
  <text fill="#F8FBFF" x="35" y="150" style="font-size:20px;font-family: sans-serif;font-weight:500;">` +
        username +
        tag +
        `</text>
  <text fill="#F8FBFF" x="35" y="187" style="font-size:14px;font-family: sans-serif;font-weight:600;">ABOUT ME</text>
  <text fill="#F8FBFF" x="35" y="206" style="font-size:14px;font-family: sans-serif;font-weight:500;">` +
        aboutMe +
        `</text>
                    
  <path d="M390,85 h20 a5,5 0 0 1 5,5 v20 a5,5 0 0 1 -5,5 h-20 a5,5 0 0 1 -5,-5 v-20 a5,5 0 0 1 5,-5 z" style="fill:#111214"/>` +
        houseicon +
        `<path d="M35,163 h370 z" stroke="#2E2F34" stroke-width="0.2">
                      
      <style>

          @keyframes onOpen {
              0% {
      
                  opacity: 0;
                  transform: translateY(20px);
      
              }
              100% {
      
                  opacity: 1;
      
              }
          }
      
          svg {
      
              animation: 0.3s ease-out 0s 1 onOpen;
      
          }
      
      </style>
      
</svg>`;

    document.getElementById("previewBox").innerHTML = html;

    var svg = document.getElementById("svg");

    var svgString = new XMLSerializer().serializeToString(svg);

    var decoded = unescape(encodeURIComponent(svgString));

    var base64 = btoa(decoded);

    var imgSource = `data:image/svg+xml;base64,${base64}`;

    document.getElementById("codebox").textContent = imgSource;
}

function copyResult() {
    var texts = document.getElementById("codebox").textContent;
    var link = document.createElement("a");
    link.download = "discord.svg";
    link.href = texts;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
}
