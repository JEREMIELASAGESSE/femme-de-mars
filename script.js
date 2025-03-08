// Tableau des citations pour la Journée de la Femme
const citations = [
    "Aux femmes fortes et inspirantes, aux femmes qui constituent un modèle pour la société, bonne journée de la femme !",
    "Tu rends chaque jour meilleur simplement en y participant. Joyeuse journée de la femme à la femme la plus incroyable du monde !",
    "Chaque femme est une histoire de courage, de rêves et de résilience. Je célèbre toutes ces histoires aujourd'hui et chaque jour !",
    "Comme des étoiles dans le ciel, les femmes illuminent le monde par leur éclat. Que cette Journée de la Femme soit un rappel de la lumière que vous apportez.",
    "À toi, une femme forte et inspirante, je te souhaite une magnifique Journée de la Femme. Continue de briller et d'inspirer ceux qui t'entourent !",
    "Derrière chaque femme exceptionnelle se cache une volonté inébranlable et un courage sans limites. Bonne journée de la femme !",
    "Ta force tranquille et ton élégance naturelle font de toi une source d'inspiration. Joyeuse journée internationale des femmes !",
    "Célébrons l'intelligence, la grâce et la détermination qui font de chaque femme un être extraordinaire. Bonne journée à toi !",
    "Les femmes ne demandent pas le pouvoir pour dominer, mais pour transformer. Merci d'être cette force de changement positif !"
];

// Fonction pour générer une citation aléatoire
function getRandomCitation() {
    const index = Math.floor(Math.random() * citations.length);
    return `"${citations[index]}"`;  // Ajout des guillemets
}


// Fonction pour générer l'image avec le texte
function generateImage() {
    const fileInput = document.getElementById('fileInput');
    const nameInput = document.getElementById('nameInput').value;
    const fontFamily = "Montserrat";  // Police Montserrat
    const textColor = document.getElementById('colorSelector').value;
    const file = fileInput.files[0];
    
    if (!file) {
        alert('Veuillez sélectionner une image');
        return;
    }
    
    if (!nameInput) {
        alert('Veuillez entrer votre nom');
        return;
    }
    
    const reader = new FileReader();
    
    reader.onload = function(e) {
        // Afficher l'image et le texte dans le conteneur de résultat
        const resultContainer = document.getElementById('resultContainer');
        const citation = getRandomCitation();
        resultContainer.innerHTML = `
            <div class="text-overlay">
                <span class="name">${nameInput}</span>
                <div class="citation">${citation}</div>
            </div>
        `;
        
        // Appliquer le style de police et la couleur choisis
        const textOverlay = resultContainer.querySelector('.text-overlay');
        textOverlay.style.fontFamily = fontFamily;
        textOverlay.style.color = textColor;
        
        // Créer un canvas pour dessiner l'image et le texte
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const img = new Image();
        
        img.onload = function() {
            // Définir les dimensions du canvas
            canvas.width = img.width;
            canvas.height = img.height;
            
            // Dessiner l'image
            context.drawImage(img, 0, 0);
            
            // Créer un dégradé pour le fond du texte
            const gradient = context.createLinearGradient(0, img.height - 150, 0, img.height);
            gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0.7)');
            
            context.fillStyle = gradient;
            context.fillRect(0, img.height - 150, img.width, 150);
            
            // Configurer le style de police
            context.font = `bold 30px ${fontFamily}`;
            context.fillStyle = textColor;
            context.textBaseline = 'top';
            
            // Dessiner le nom
            context.fillText(nameInput, 20, img.height - 130);
            
            // Configurer le style pour la citation
            context.font = `20px ${fontFamily}`;
            
            // Fonction pour dessiner du texte avec retour à la ligne
            function wrapText(context, text, x, y, maxWidth, lineHeight) {
                const words = text.split(' ');
                let line = '';
                let testLine = '';
                let lineArray = [];

                for (let n = 0; n < words.length; n++) {
                    testLine += words[n] + ' ';
                    const metrics = context.measureText(testLine);
                    const testWidth = metrics.width;
                    
                    if (testWidth > maxWidth && n > 0) {
                        lineArray.push([line, x, y]);
                        y += lineHeight;
                        line = words[n] + ' ';
                        testLine = words[n] + ' ';
                    } else {
                        line = testLine;
                    }
                }
                
                lineArray.push([line, x, y]);
                
                for (let i = 0; i < lineArray.length; i++) {
                    context.fillText(lineArray[i][0], lineArray[i][1], lineArray[i][2]);
                }
            }
            
            // Dessiner la citation avec retour à la ligne
            wrapText(context, `"${citation}"`, 20, img.height - 80, img.width - 40, 25);  // Ajout des guillemets ici aussi

            
            // Mettre à jour le lien de téléchargement
            const downloadLink = document.getElementById('downloadLink');
            downloadLink.href = canvas.toDataURL('image/png');
            
            // Afficher les boutons
            document.getElementById('Regenerer').style.display = 'block';
            document.querySelector('.regenerer').style.display = 'block';
        };
        
        img.src = e.target.result;
    };
    
    if (file) {
        reader.readAsDataURL(file);
    }
}

document.getElementById('generer').addEventListener('click', function() {
    document.querySelector('.regenerer').style.display = "block";
    const fileInput = document.getElementById('fileInput');
    const nameInput = document.getElementById('nameInput').value;
    const file = fileInput.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const resultContainer = document.getElementById('resultContainer');
        resultContainer.innerHTML = '';
        
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const img = new Image();
        
        img.onload = function() {
            const canvasSize = 600;
            canvas.width = canvasSize;
            canvas.height = canvasSize;
            
            // Fond dégradé élégant avec les couleurs spécifiées
            const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, "#360820"); 
            gradient.addColorStop(1, "#210514");  
            context.fillStyle = gradient;
            context.fillRect(0, 0, canvas.width, canvas.height);
            
            // Masque circulaire pour la photo
            const imgSize = 280;
            const imgX = (canvas.width - imgSize) / 2;
            const imgY = 70;
            context.save();
            context.beginPath();
            context.arc(canvas.width / 2, imgY + imgSize / 2, imgSize / 2, 0, Math.PI * 2);
            context.closePath();
            context.clip();
            context.drawImage(img, imgX, imgY, imgSize, imgSize);
            context.restore();
            
            // Texte du nom avec la couleur --secondary-color
            context.font = 'bold 40px Montserrat';
            context.fillStyle = '#E9C46A';  
            context.textAlign = 'center';
            context.fillText(nameInput, canvas.width / 2, imgY + imgSize + 70);
            
            // Citation aléatoire avec la couleur blanche
            context.font = 'italic 28px Montserrat';
            context.fillStyle = 'white';
            context.fillText(getRandomCitation(), canvas.width / 2, imgY + imgSize + 120, canvas.width - 60);
            
            // Affichage et téléchargement
            resultContainer.appendChild(canvas);
            const downloadLink = document.getElementById('downloadLink');
            downloadLink.href = canvas.toDataURL('image/png');
        };
        
        img.src = e.target.result;
    };
    
    if (file) {
        reader.readAsDataURL(file);
    }
});

document.getElementById('Regenerer').addEventListener('click', function() {
    generateImage();
});
