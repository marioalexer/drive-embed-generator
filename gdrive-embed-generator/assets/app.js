(() => {
  const input        = document.getElementById('url');
  const output       = document.getElementById('output');
  const previewUrlEl = document.getElementById('previewUrl');

  const genBtn       = document.getElementById('generate');
  const copyBtn      = document.getElementById('copy');
  const copyPrevBtn  = document.getElementById('copyPreview');
  const prevBtn      = document.getElementById('preview');
  const frame        = document.getElementById('previewFrame');

  function extractFileId(value) {
    try {
      const url = new URL(value);

      const m = url.pathname.match(/\/file\/d\/([^\/]+)/);
      if (m) return m[1];

      const id = url.searchParams.get('id');
      if (id) return id;

      return null;
    } catch {
      return null;
    }
  }

  function buildPreviewUrl(fileId) {
    return `https://drive.google.com/file/d/${fileId}/preview`;
  }

  function buildEmbed(fileId) {
    const src = buildPreviewUrl(fileId);

    return `<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;">
  <iframe
    src="${src}"
    style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
    allowfullscreen
    loading="lazy">
  </iframe>
</div>`;
  }

  genBtn.onclick = () => {
    const fileId = extractFileId(input.value.trim());

    if (!fileId) {
      previewUrlEl.value = '';
      output.value = 'Enlace inválido o no reconocido como Google Drive.';
      copyBtn.disabled = true;
      copyPrevBtn.disabled = true;
      prevBtn.disabled = true;
      frame.src = '';
      return;
    }

    const previewUrl = buildPreviewUrl(fileId);

    previewUrlEl.value = previewUrl;
    output.value = buildEmbed(fileId);

    copyBtn.disabled = false;
    copyPrevBtn.disabled = false;
    prevBtn.disabled = false;
  };

  copyBtn.onclick = () => {
    output.select();
    try { document.execCommand('copy'); } catch {}
  };

  copyPrevBtn.onclick = () => {
    previewUrlEl.select();
    try { document.execCommand('copy'); } catch {}
  };

  prevBtn.onclick = () => {
    const fileId = extractFileId(input.value.trim());
    if (!fileId) return;

    frame.src = buildPreviewUrl(fileId);
  };
})();

