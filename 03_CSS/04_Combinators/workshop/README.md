# Combinators Workshop

## HTML de bază

```html
<div id="container">
  <p class="red">This is some text</p>
  <p>This is <span>more</span> text</p>
  <p>Link to <a href="http://www.scoalainformala.com">Scoala Informala</a></p>
  <a href="http://www.google.com">Google</a>
</div>
<p>This is <span>some other</span> text</p>
```

---

## CSS – Soluții cu combinatori

### a. Stilizează link-ul către Scoala Informala în albastru

```css
#container p a {
  color: blue;
}
```

### a. Stilizează link-ul către Google în verde

```css
#container > a {
  color: green;
}
```

### b. Stilizează span-ul "some other" în roz

```css
p > span {
  color: pink;
}
```

---

## Explicații

- `#container p a` → selectează link-ul dintr-un paragraf aflat în container → **Scoala Informala**.
- `#container > a` → selectează link-ul copil direct al containerului → **Google**.
- `p > span` → selectează doar span-ul copil direct al unui paragraf → **"some other"**.
