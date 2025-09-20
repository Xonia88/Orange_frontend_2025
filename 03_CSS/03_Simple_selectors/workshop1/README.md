# Simple Selectors Workshop

## HTML de bază

```html
<div id="container">
  <p class="red">This is some text</p>
  <p>This is <span>more</span> text</p>
  <p>Link to <a href="http://www.scoalainformala.com">Scoala Informala</a></p>
  <a href="http://www.google.com">Google</a>
</div>
```

---

## CSS – Soluții

### a. Adaugă background gri la container

```css
#container {
  background-color: gray;
}
```

### b. Stilizează în roșu primul paragraf și span-ul

```css
.red {
  color: red;
}
span {
  color: red;
}
```

### c. Stilizează link-urile în albastru

```css
a {
  color: blue;
}
```

---

## Explicații

- `#container` → selector după **id**, aplică gri pe tot div-ul.
- `.red` → selector după **clasă**, aplică roșu pe primul paragraf.
- `span` → selector după tag, aplică roșu textului din span.
- `a` → selector după tag, aplică albastru link-urilor.
