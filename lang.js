// =============================
// SYSTÈME MULTILINGUE DU SITE
// =============================

// Dictionnaire des textes en plusieurs langues
const textes = {
  fr: {
    // Titres communs
    accueil: "Accueil",
    histoire: "Notre histoire",
    membres: "Les membres",
    evenements: "Événements",
    album: "Album photo",
    footer: "© 2025 Notre Famille — Tous droits réservés.",

    // Accueil
    titre_accueil: "Bienvenue sur le site de notre famille KARUBA",
    
    // Histoire
    titre_histoire: "Notre histoire",

    // Membres
    titre_membres: "Les membres de notre famille",
    
    // Événements
    titre_evenements: "Nos événements marquants",

    // Album
    titre_album: "Album photo de la famille",
  },

  en: {
    // Common titles
    accueil: "Home",
    histoire: "Our Story",
    membres: "Members",
    evenements: "Events",
    album: "Photo Album",
    footer: "© 2025 Our Family — All rights reserved.",

    // Home
    titre_accueil: "Welcome to our family KARUBA",
    
    // Story
    titre_histoire: "Our Family Story",
    
    // Members
    titre_membres: "Our Family Members",
   
    // Events
    titre_evenements: "Our Special Events",

    // Album
    titre_album: "Family Photo Album",
  },
};

// =============================
// FONCTION DE CHANGEMENT DE LANGUE
// =============================

function changerLangue() {
  const langue = document.getElementById("langue").value;
  const t = textes[langue];

  // ====== Menu ======
  if (document.getElementById("accueil")) document.getElementById("accueil").textContent = t.accueil;
  if (document.getElementById("histoire")) document.getElementById("histoire").textContent = t.histoire;
  if (document.getElementById("membres")) document.getElementById("membres").textContent = t.membres;
  if (document.getElementById("evenements")) document.getElementById("evenements").textContent = t.evenements;
  if (document.getElementById("album")) document.getElementById("album").textContent = t.album;

  // ====== Accueil ======
  if (document.getElementById("titre")) document.getElementById("titre").textContent = t.titre_accueil;
  if (document.getElementById("description")) document.getElementById("description").textContent = t.desc_accueil;
  if (document.getElementById("message")) document.getElementById("message").textContent = t.message_accueil

  // ====== Histoire ======
  if (document.getElementById("texte-histoire")) document.getElementById("texte-histoire").textContent = t.texte_histoire;
  if (document.getElementById("titre")) document.getElementById("titre").textContent = t.titre_accueil;

  // ====== Membres ======
  if (document.getElementById("membre1")) document.getElementById("membre1").textContent = t.membre1;
  if (document.getElementById("membre2")) document.getElementById("membre2").textContent = t.membre2;
  

  // ====== Événements ======
  if (document.getElementById("event1-titre")) document.getElementById("event1-titre").textContent = t.event1_titre;
  if (document.getElementById("event1-desc")) document.getElementById("event1-desc").textContent = t.event1_desc;
  if (document.getElementById("event2-titre")) document.getElementById("event2-titre").textContent = t.event2_titre;
  if (document.getElementById("event2-desc")) document.getElementById("event2-desc").textContent = t.event2_desc;
  

  // ====== Album ======
  

  // ====== Pied de page ======
  if (document.getElementById("footer")) document.getElementById("footer").textContent = t.footer;
}

// =============================
// CHARGEMENT AUTOMATIQUE DE LA LANGUE
// =============================
window.onload = function () {
  const select = document.getElementById("langue");
  if (!select) return;

  // Rétablir la dernière langue utilisée
  const savedLang = localStorage.getItem("langue");
  if (savedLang) {
    select.value = savedLang;
  }

  changerLangue();

  // Sauvegarder la langue quand elle change
  select.addEventListener("change", function () {
    localStorage.setItem("langue", this.value);
    changerLangue();
  });
};


