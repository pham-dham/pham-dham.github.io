document.querySelectorAll('.copy').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var el = document.getElementById(btn.dataset.target);
    var original = btn.textContent;
    function done() { btn.textContent = 'Copied'; setTimeout(function () { btn.textContent = original; }, 1500); }
    function fallback() {
      var r = document.createRange(); r.selectNodeContents(el);
      var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
      btn.textContent = 'Selected, press copy'; setTimeout(function () { btn.textContent = original; }, 2000);
    }
    try { navigator.clipboard.writeText(el.textContent.trim()).then(done, fallback); } catch (e) { fallback(); }
  });
});
