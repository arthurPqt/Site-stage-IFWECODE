[README-site-immobilier.md](https://github.com/user-attachments/files/26961167/README-site-immobilier.md)

# 🏠 Site Immobilier — Stage IFWECODE

Site web immobilier réalisé dans le cadre d'un stage professionnel chez **IFWECODE**.  
Le projet permet de consulter et filtrer des biens immobiliers affichés dynamiquement depuis une base de données.

---

## 🛠️ Stack technique

| Technologie | Rôle |
|---|---|
| **Next.js** | Framework React — rendu hybride SSR/SSG |
| **JSX** | Templating des composants |
| **Tailwind CSS** | Styling utilitaire et design responsive |
| **Directus** | Back-end headless CMS — gestion de la BDD |

---

## ✨ Fonctionnalités

- 📋 **Affichage dynamique** des biens immobiliers depuis la base de données Directus
- 🔍 **Filtres de recherche** pour affiner les résultats (type, localisation, prix...)
- 📱 **Design responsive** — adapté mobile, tablette et desktop

---

## 🚀 Lancer le projet en local

### Prérequis

- Node.js `>= 18`
- npm ou yarn

### Installation

```bash
# Cloner le repo
git clone https://github.com/arthurPqt/Site-stage-IFWECODE.git

# Accéder au dossier
cd Site-stage-IFWECODE

# Installer les dépendances
npm install
```

### Configuration

Créer un fichier `.env.local` à la racine et y renseigner l'URL de votre instance Directus :

```env
NEXT_PUBLIC_DIRECTUS_URL=https://votre-instance-directus.com
```

### Démarrage

```bash
# Mode développement
npm run dev

# Build de production
npm run build
npm start
```

L'application est accessible sur [http://localhost:3000](http://localhost:3000)

---

## 📁 Structure du projet

```
├── components/       # Composants React réutilisables
├── pages/            # Pages Next.js (routing automatique)
├── public/           # Assets statiques
├── styles/           # Styles globaux
└── lib/              # Appels API Directus
```

---

## 🎓 Contexte

Projet réalisé en conditions professionnelles lors d'un **stage en entreprise** chez [IFWECODE](https://ifwecode.fr).  
Développement initialement versionné sur **GitLab**, puis migré sur GitHub.

---

## 👤 Auteur

**Arthur Picquot**  
[GitHub](https://github.com/arthurPqt) · [LinkedIn](#)
