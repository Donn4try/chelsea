function bloomFlower() {
  if (document.body.classList.contains('not-loaded')) {
    document.body.classList.remove("not-loaded");
    document.querySelector('.reloadBtn').textContent = 'Kuncup Bunga';
  } else {
    location.reload();
  }
}
