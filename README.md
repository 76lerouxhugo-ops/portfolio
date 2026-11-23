# Portfolio Hugo Leroux · Chef de projet AMOA

Site portfolio statique, vibe codé avec l'IA, pour présenter mes projets à l'EM Normandie.
Aucun build, aucun serveur : HTML, CSS et JavaScript, plus Lenis (scroll fluide) via CDN.

## Arborescence

```
portfolio-hugo-leroux/
├── index.html              structure des 12 sections
├── README.md
├── _headers                en-têtes de sécurité et de cache (Cloudflare Pages)
└── assets/
    ├── content.js          TOUS les textes du site (à modifier ici)
    ├── main.js             animations, filtres, modales, simulateur, terminal
    ├── style.css           thèmes clair / sombre et mise en page
    ├── logo-em-normandie.png
    ├── favicon.svg
    └── images/
```

## Modifier un texte

Tout est dans `assets/content.js`. Exemples :
- ajouter un projet : copier un bloc dans `projects` et changer `id`, `title`, `tags`…
- `size` d'un projet : `"large"` (2×2), `"wide"` (2×1), `"tall"` (1×2) ou `""` (1×1) ;
- dates de la timeline : `timeline.items`.

## Tester en local

Extraire le dossier, puis double-cliquer sur `index.html`.
(Ne pas l'ouvrir depuis le zip : le dossier `assets` serait introuvable.)

## Déployer : GitHub → Cloudflare Pages

1. **GitHub** : créer un dépôt (ex. `portfolio`), puis *Add file → Upload files* et glisser tout le contenu du dossier (`index.html`, `assets`, `_headers`, `README.md`). Valider avec *Commit changes*.
2. **Cloudflare** : sur dash.cloudflare.com, aller dans *Workers & Pages → Create → Pages → Connect to Git*, autoriser GitHub et choisir le dépôt.
3. **Réglages de build** : Framework preset *None*, Build command *vide*, Build output directory `/`. Cliquer sur *Save and Deploy*.
4. Le site est en ligne sur `https://<nom-du-projet>.pages.dev`. Chaque nouveau commit sur GitHub le met à jour automatiquement.

## Easter egg

Bouton « Ouvrir le terminal » en bas de page, ou touche `²`.
Commandes : `help`, `projets`, `contact`, `theme`, `clear`, `exit`.

## Accessibilité et performance

Balises sémantiques, navigation clavier, contrastes AA en clair et en sombre,
animations coupées si `prefers-reduced-motion` est activé, aucune image lourde.
