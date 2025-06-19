function filterAthletes() {
  const input = document.getElementById('searchInput');
  const filter = input.value.toLowerCase();
  const athletes = document.querySelectorAll('.athlete-card');

  athletes.forEach(card => {
    const name = card.getAttribute('data-athlete').toLowerCase();
    if (name.includes(filter)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
fffffffffffffstsisysonispmispimefmpo[]