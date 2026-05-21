# RadauApp – Die nachhaltige Kinder-Jukebox

Dieses Projekt ist ein Prototyp für die RadauApp, die aus alten iPhones smarte Musikboxen für Kinder macht.

## Projekt starten

Um die App lokal zu testen:

1. Installiere die Abhängigkeiten: `npm install`
2. Starte den Development-Server: `npm run dev`
3. Öffne [http://localhost:9002](http://localhost:9002) in deinem Browser.

## Zu GitHub hochladen (Eigener Branch)

Um diesen Code in dein Repository `https://github.com/jnsn-b/RadauApp-page` hochzuladen, führe diese Befehle nacheinander in deinem Terminal aus:

1. **Git initialisieren:**
   ```bash
   git init
   ```

2. **Remote hinzufügen:**
   ```bash
   git remote add origin https://github.com/jnsn-b/RadauApp-page.git
   ```

3. **Dateien hinzufügen & commiten:**
   ```bash
   git add .
   git commit -m "Initialer Stand der RadauApp Webseite"
   ```

4. **In einen neuen Branch pushen:**
   *(Ersetze `mein-neuer-branch` durch den gewünschten Namen)*
   ```bash
   git checkout -b mein-neuer-branch
   git push -u origin mein-neuer-branch
   ```

*Hinweis: Wenn du nach deinem Passwort gefragt wirst, verwende dort deinen GitHub Personal Access Token (PAT).*

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS / ShadCN UI
- **Icons:** Lucide React
- **KI-Integration:** Firebase Genkit
