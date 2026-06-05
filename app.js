function resolveAvatar(src) {
  if (!src) return src;
  if (/^https?:\/\//.test(src)) return src;
  return src.replace(/^\//, '');
}

function createMirrorBlock(mirror) {
  const link = document.createElement('a');
  link.className = 'mirror-block';
  link.href = mirror.url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';

  const inner = document.createElement('div');
  inner.className = 'block-inner';

  if (mirror.warning) {
    const badge = document.createElement('div');
    badge.className = 'warning-badge';
    badge.textContent = mirror.warning;
    inner.appendChild(badge);
  }

  const avatar = document.createElement('div');
  avatar.className = 'avatar';
  const img = document.createElement('img');
  img.src = resolveAvatar(mirror.avatar);
  img.alt = mirror.name;
  avatar.appendChild(img);

  const content = document.createElement('div');
  content.className = 'content';
  const title = document.createElement('h3');
  title.textContent = mirror.name;
  const desc = document.createElement('p');
  desc.textContent = mirror.description;
  content.appendChild(title);
  content.appendChild(desc);

  const arrow = document.createElement('div');
  arrow.className = 'arrow';
  arrow.textContent = '›';

  inner.appendChild(avatar);
  inner.appendChild(content);
  inner.appendChild(arrow);
  link.appendChild(inner);
  return link;
}

async function loadMirrors() {
  const grid = document.getElementById('mirrors-grid');
  try {
    const res = await fetch('mirrors.json', { cache: 'no-cache' });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const mirrors = await res.json();
    const frag = document.createDocumentFragment();
    mirrors.forEach((mirror) => frag.appendChild(createMirrorBlock(mirror)));
    grid.appendChild(frag);
  } catch (e) {
    const error = document.createElement('p');
    error.className = 'load-error';
    error.textContent = 'Не удалось загрузить список зеркал';
    grid.appendChild(error);
  }
}

loadMirrors();
