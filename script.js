  /*selection et visualisation de*/
   // Ajouter un écouteur d'événement pour le champ de fichier
   document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0]; // Récupérer le fichier sélectionné
    const reader = new FileReader(); // Créer un nouvel objet FileReader
    
    // Lorsque le fichier est chargé
    reader.onload = function(e) {
        const previewContainer = document.getElementById('imagePreview'); // Obtenir le conteneur de prévisualisation
        // Afficher l'image dans le conteneur de prévisualisation
        previewContainer.innerHTML = '<img src="' + e.target.result + '" alt="Image Preview">';
    };
    
    if (file) {
        reader.readAsDataURL(file); // Lire le fichier en tant qu'URL de données
    }
});

/*generation de L'image*/
    // Tableau des citations
    const citations = [
        "Aux femmes fortes et inspirantes, aux femmes qui constitues un modèle pour la société, bonne journée de la femme ! ",
        "Tu m'inspires chaque jour par ta force et ta résilience. Joyeuse journée de la femme !",
        "Tu rends chaque jour meilleur simplement en y participant. Joyeuse journée de la femme à la femme la plus incroyable du monde !",
        "Chaque femme est une histoire de courage, de rêves et de résilience. Je célèbre toutes ces histoires aujourd'hui et chaque jour !",
        "Comme des étoiles dans le ciel, les femmes illuminent le monde par leur éclat. Que cette Journée de la Femme soit un rappel de la lumière que vous apportez.",
        "À toi, une femme forte et inspirante, je te souhaite une magnifique Journée de la Femme. Continue de briller et d'inspirer ceux qui t'entourent !"
        ];
   // Fonction pour générer une citation aléatoire
  function getRandomCitation() {
      const index = Math.floor(Math.random() * citations.length);
       return citations[index];
      }
/*generation de l'image*/
document.getElementById('generer').addEventListener('click', function() {
    document.querySelector('.regenerer').style.display="block"
    const fileInput = document.getElementById('fileInput');
    const nameInput = document.getElementById('nameInput').value;
    const file = fileInput.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const resultContainer = document.getElementById('resultContainer');
        resultContainer.innerHTML = '<img src="' + e.target.result + '" alt="Image"><div class="text-overlay">' + nameInput + '<br>' + getRandomCitation() + '</div>';
    
        // Créer un canvas pour dessiner l'image et le texte
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const img = new Image();
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            context.drawImage(img, 0, 0);
            context.font = '40px Arial';
            context.fillStyle = 'white';
            context.fillText(nameInput, 10, img.height - 40);
            context.fillText(getRandomCitation(), 10, img.height - 10);
    
            // Mettre à jour le lien de téléchargement
            const downloadLink = document.getElementById('downloadLink');
            downloadLink.href = canvas.toDataURL();
        };
        img.src = e.target.result;
    };
    
    if (file) {
        reader.readAsDataURL(file);
    }
    document.getElementById('Regenerer').style.display="block"
    document.getElementById('resultContainer').style.justifyContent="center"
    });
    
/*regeneration*/
document.getElementById('Regenerer').addEventListener('click', function() {
    document.querySelector('.regenerer').style.display="block"
    const fileInput = document.getElementById('fileInput');
    const nameInput = document.getElementById('nameInput').value;
    const file = fileInput.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const resultContainer = document.getElementById('resultContainer');
        resultContainer.innerHTML = '<img src="' + e.target.result + '" alt="Image"><div class="text-overlay">' + nameInput + '<br>' + getRandomCitation() + '</div>';
    
        // Créer un canvas pour dessiner l'image et le texte
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const img = new Image();
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            context.drawImage(img, 0, 0);
            context.font = '40px Arial';
            context.fillStyle = 'white';
            context.fillText(nameInput, 10, img.height - 40);
            context.fillText(getRandomCitation(), 10, img.height - 10);
    
            // Mettre à jour le lien de téléchargement
            const downloadLink = document.getElementById('downloadLink');
            downloadLink.href = canvas.toDataURL();
        };
        img.src = e.target.result;
    };
    
    if (file) {
        reader.readAsDataURL(file);
    }
    });
    