# Exercițiu: Listă de linkuri Social Media (doar HTML)

Creează o **listă de linkuri către rețele sociale** folosind **exclusiv HTML** (fără CSS sau JavaScript). Exercițiul te ajută să exersezi elemente de bază precum liste, linkuri și atributele lor.

---

## Obiectiv

În pagina `index.html`, afișează o listă cu linkuri către profiluri de social media (ex.: Facebook, Instagram, LinkedIn, YouTube), astfel încât:

- Fiecare element din listă să conțină **numele rețelei** și să fie **clickabil**.
- La click, linkurile să se deschidă **într-o filă nouă**.
- Fiecare link să aibă un **text alternativ** pentru accesibilitate (atributul `title`).

---

## Cerințe (obligatorii)

1. Folosește o **listă neordonată** (`<ul>`) cu minimum **4** elemente (`<li>`).
2. În interiorul fiecărui `<li>`, inserează un **link** (`<a>`).
3. Atribute obligatorii pentru fiecare link:
   - `href` – URL-ul complet (poate fi un profil real sau unul fictiv).
   - `target="_blank"` – deschide linkul în filă nouă.
   - `rel="noopener noreferrer"` – bună practică de securitate la deschiderea în filă nouă.
   - `title` – scurtă descriere, ex.: `Deschide pagina mea de Instagram`.
4. **Nu folosi** CSS sau JavaScript. Doar HTML.

---

## Structura proiectului

```
social-links/
└── index.html
```

> Creează folderul `social-links` și fișierul `index.html` în interior.

---

## Schelet recomandat pentru `index.html`

Copiază acest schelet în fișier și completează doar lista, conform cerințelor.

```html
<!DOCTYPE html>
<html lang="ro">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Linkuri Social Media</title>
  </head>
  <body>
    <h1>Urmărește-mă pe:</h1>

    <!-- TODO: Înlocuiește acest comentariu cu lista ta (<ul> ... </ul>) -->
  </body>
</html>
```

---

## Exemplu de intrare în listă (doar ca referință)

_(Nu copia totul, creează-ți propriile linkuri!)_

```html
<li>
  <a
    href="https://www.instagram.com/profilul-meu"
    target="_blank"
    rel="noopener noreferrer"
    title="Deschide pagina mea de Instagram"
  >
    Instagram
  </a>
</li>
```

---

## Criterii de evaluare

- [ ] Există o listă `<ul>` cu **cel puțin 4** elemente `<li>`.
- [ ] Fiecare `<li>` conține un link `<a>` valid cu `href`, `target`, `rel`, `title`.
- [ ] Nu s-a folosit CSS/JS.
- [ ] Codul HTML este bine indentat și valid (închizi corect tag-urile).

---

## Provocări (opțional)

- Adaugă și o **listă de contacte** (email, telefon) sub lista de social media, folosind `mailto:` și `tel:` în `href`.
- Adaugă un mic **paragraf introductiv** deasupra listei care explică ce găsește utilizatorul pe aceste rețele.
- Adaugă și un link către **GitHub** sau **Portfolio** personal.

---

## Soluție posibilă (ascunde/arată)

> Încearcă singur mai întâi! Apoi compară cu una dintre soluțiile posibile.

```html
<!DOCTYPE html>
<html lang="ro">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Linkuri Social Media</title>
  </head>
  <body>
    <h1>Urmărește-mă pe:</h1>

    <ul>
      <li>
        <a
          href="https://www.facebook.com/numele-meu"
          target="_blank"
          rel="noopener noreferrer"
          title="Deschide pagina mea de Facebook"
        >
          Facebook
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/numele-meu"
          target="_blank"
          rel="noopener noreferrer"
          title="Deschide pagina mea de Instagram"
        >
          Instagram
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/numele-meu"
          target="_blank"
          rel="noopener noreferrer"
          title="Deschide profilul meu de LinkedIn"
        >
          LinkedIn
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/@numele-meu"
          target="_blank"
          rel="noopener noreferrer"
          title="Deschide canalul meu de YouTube"
        >
          YouTube
        </a>
      </li>
    </ul>
  </body>
</html>
```

---

## Cum verifici rapid

1. Deschide `index.html` în browser (sau cu **Live Server** în VS Code).
2. Click pe fiecare link – trebuie să se deschidă în **file noi**.
3. Ține cursorul peste link – ar trebui să apară **tooltip** cu textul din `title`.

---

Succes! 🎯
