function decodeBase64(value) {
  const bytes = Uint8Array.from(atob(value), (character) => character.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function resolveAvatar(src) {
  if (!src) return src;
  if (/^https?:\/\//.test(src)) return src;
  return src.replace(/^\//, '');
}

function createMirrorBlock(mirror) {
  const button = document.createElement('button');
  button.className = 'mirror-block';
  button.type = 'button';
  button.addEventListener('click', () => {
    const destination = new URL(decodeBase64(mirror.url));
    if (destination.protocol === 'https:') {
      window.open(destination.href, '_blank', 'noopener,noreferrer');
    }
  });

  const inner = document.createElement('span');
  inner.className = 'block-inner';

  if (mirror.warning) {
    const badge = document.createElement('span');
    badge.className = 'warning-badge';
    badge.textContent = mirror.warning;
    inner.appendChild(badge);
  }

  const avatar = document.createElement('span');
  avatar.className = 'avatar';
  const img = document.createElement('img');
  img.src = resolveAvatar(mirror.avatar);
  img.alt = '';
  avatar.appendChild(img);

  const title = document.createElement('span');
  title.className = 'mirror-title';
  title.textContent = mirror.name;

  const arrow = document.createElement('span');
  arrow.className = 'arrow';
  arrow.setAttribute('aria-hidden', 'true');
  arrow.textContent = '›';

  inner.appendChild(avatar);
  inner.appendChild(title);
  inner.appendChild(arrow);
  button.appendChild(inner);
  return button;
}

async function loadMirrors() {
  const grid = document.getElementById('mirrors-grid');
  try {
    const res = await fetch('mirrors.json?v=2', { cache: 'no-cache' });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const { catalog } = await res.json();
    const mirrors = JSON.parse(decodeBase64(catalog));
    const frag = document.createDocumentFragment();
    mirrors.forEach((mirror) => frag.appendChild(createMirrorBlock(mirror)));
    grid.appendChild(frag);
  } catch {
    const error = document.createElement('p');
    error.className = 'load-error';
    error.textContent = 'Не удалось загрузить список зеркал';
    grid.appendChild(error);
  }
}

loadMirrors();
