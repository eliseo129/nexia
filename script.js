// Demo form: sin backend todavía, solo confirma en pantalla.
// ponytail: reemplazar por fetch al endpoint real (o Formspree) cuando exista.
document.getElementById('demo-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
  document.getElementById('ok').hidden = false;
});
