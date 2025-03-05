const quotes = [
    "Le pouvoir ne vous est pas donné, vous devez le prendre. - Beyoncé",
    "Chaque femme mérite d’être célébrée. - Michelle Obama",
    "Soyez la femme qui inspire les autres. - Malala Yousafzai",
    "Une femme est comme un sachet de thé : on ne connaît sa force que lorsqu’elle est dans l’eau chaude. - Eleanor Roosevelt"
];

function generateImage() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const photoUpload = document.getElementById('photoUpload');
    const userName = document.getElementById('userName').value;
    const downloadButton = document.getElementById('downloadButton');
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    
    if (!photoUpload.files[0]) {
        alert('Veuillez téléverser une image.');
        return;
    }
    
    const img = new Image();
    img.onload = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        
        // Overlay semi-transparent
        ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
        ctx.fillRect(0, 350, 500, 150);
        
        // Texte
        ctx.fillStyle = "white";
        ctx.font = "bold 24px Poppins";
        ctx.fillText(userName, 20, 380);
        ctx.font = "italic 18px Poppins";
        ctx.fillText("Journée Internationale des Droits des Femmes", 20, 410);
        
        ctx.font = "16px Poppins";
        ctx.textAlign = "center";
        ctx.fillText(`"${quote}"`, 250, 460, 460);
        ctx.textAlign = "left";
        
        // Afficher le bouton de téléchargement
        downloadButton.style.display = 'inline-block';
    };
    img.src = URL.createObjectURL(photoUpload.files[0]);
}

function downloadImage() {
    const canvas = document.getElementById('canvas');
    const link = document.createElement('a');
    link.download = "carte_journee_femmes.png";
    link.href = canvas.toDataURL();
    link.click();
}