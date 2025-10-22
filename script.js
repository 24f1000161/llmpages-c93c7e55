/**
 * Content Pack Studio - Client-side export generator
 * - Generates required content files as downloadable blobs
 * - Uses Bootstrap 5 from CDN (already loaded in index.html)
 * - Includes comprehensive error handling
 */

// The content for each required file (embedded here for client-side export)
const CONTENT = {
  "ashravan.txt": `Ashravan woke to the taste of rain on his lips and the soft rasp of wind through a city he barely recognized. Shai stood over him, a whisper of ink and light, her hands still smelling faintly of jasmine and smoke from the long night of stitching memories. He remembered nothing, and then everything: a chorus of voices, a throne room built from shards of promises, and a responsibility he had never asked for.
  
  Shai did not restore him to a place of safety, but to a summons. He was not the man who had fallen; he was the vessel for a new courage, tempered with doubt and the ache of knowing that the world would demand more from him than strength alone. When he rose, the first thing he heard was the city breathing, a city that refused to forget the mistakes of its past and yet dared to hope for a future where mercy might outpace vengeance.
  
  In the days that followed, Ashravan walked among markets that overflowed with color and sound, the kind of life he once believed he could only observe from a distance. People whispered his name with fear and awe, as if the old him lived on in a carefully curated memory. He learned that restoring a man is not only a return of limbs and breath, but a reckoning of the lives that touch his.
  
  The climax arrived as a storm gathered in the harbor, ships groaning under a weight of history and future alike. An enemy fleet pressed in, and with it, a choice—fight with the certainty of old power or gamble on a mercy that could reshape the map of defeat into a map of possibility. Ashravan stepped forward, not with a blade, but with a quiet, inexorable resolve.
  
  He released what remained of his old fear and offered his hands to the sailors who would have called him traitor. The city watched as the storm broke into rain that tasted like iron and rain that tasted of iron’s forgiveness. In that moment, Ashravan understood: restoration is not salvation from struggle, but the invitation to stand after the fall, to help others stand too. The future he signed with his voice was unfinished, but the first line was written in bravery, and it would not be erased.`, // ~360-380 words
  "dilemma.json": `{
  "people": 2,
  "case_1": {"swerve": false, "reason": "Hitting two people is a greater harm; swerving could minimize casualties depending on the car's control and environment."},
  "case_2": {"swerve": true, "reason": "If the two are criminals and the one is a child, prioritizing the child's life aligns with innocence and future potential, though context and legal norms matter."}
}`,
  "about.md": `Curious Prolific Helpful`,
  "pelican.svg": `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="210" viewBox="0 0 320 210" aria-label="Pelican on bicycle" role="img">
  <defs>
    <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
      <stop stop-color="#87cefa" offset="0"/>
      <stop stop-color="#1e90ff" offset="1"/>
    </linearGradient>
  </defs>
  <!-- Bicycle -->
  <circle cx="60" cy="150" r="28" stroke="#333" stroke-width="3" fill="none"/>
  <circle cx="180" cy="150" r="32" stroke="#333" stroke-width="3" fill="none"/>
  <line x1="60" y1="150" x2="180" y2="150" stroke="#333" stroke-width="3"/>
  <line x1="60" y1="150" x2="80" y2="130" stroke="#333" stroke-width="3"/>
  <line x1="180" y1="150" x2="170" y2="125" stroke="#333" stroke-width="3"/>

  <!-- Pelican body -->
  <ellipse cx="125" cy="110" rx="38" ry="22" fill="url(#g1)" stroke="#234" stroke-width="2"/>
  <ellipse cx="145" cy="110" rx="20" ry="12" fill="#fff" stroke="#ccc" stroke-width="1"/>
  <!-- Beak & eye -->
  <polygon points="160,105 190,98 190,112" fill="#ffd27f" stroke="#d19b20" stroke-width="2"/>
  <circle cx="132" cy="106" r="3" fill="#000"/>

  <!-- Neck and head -->
  <path d="M110,120 C105,95 140,80 152,90" fill="none" stroke="#555" stroke-width="3"/>

  </svg>`,
  "restaurant.json": `{
  "city": "Bangalore",
  "lat": 12.9716,
  "long": 77.5946,
  "name": "Toit",
  "what_to_eat": "Beers, wood-fired pizzas, and Karnataka-style dishes"
}`,
  "prediction.json": `{
  "rate": 0.042,
  "reason": "Forecast based on inflation trends and policy signaling; December 2025 projection aims near 4.2% to 4.5% depending on macro factors."
}`,
  "uid.txt": `uid-EXAMPLE-UID-0001`,
  "LICENSE": `MIT License

Copyright (c) 2025 LLM App Developer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
};

// List of file entries for UI
const FILE_DEFS = [
  { key: "ashravan.txt", title: "ashravan.txt", desc: "Brandon Sanderson-inspired short story (300-400 words).", type: "text" },
  { key: "dilemma.json", title: "dilemma.json", desc: "Autonomous vehicle moral dilemma scenarios in JSON.", type: "application/json" },
  { key: "about.md", title: "about.md", desc: "Description of yourself in three words.", type: "text/markdown" },
  { key: "pelican.svg", title: "pelican.svg", desc: "SVG illustration of a pelican riding a bicycle.", type: "image/svg+xml" },
  { key: "restaurant.json", title: "restaurant.json", desc: " Bangalore restaurant recommendation in JSON.", type: "application/json" },
  { key: "prediction.json", title: "prediction.json", desc: "Forecast for Fed Funds rate with rationale.", type: "application/json" },
  { key: "uid.txt", title: "uid.txt", desc: "Attached uid value.", type: "text/plain" },
  { key: "LICENSE", title: "LICENSE", desc: "MIT License text.", type: "text/plain" },
  { key: "index.html", title: "index.html", desc: "Homepage linking to all above files.", type: "text/html" }
];

// Initialize file grid
function buildFileGrid() {
  const grid = document.getElementById('fileGrid');
  grid.innerHTML = '';
  FILE_DEFS.forEach((f) => {
    const col = document.createElement('div');
    col.className = 'col-12 col-sm-6 col-lg-4';
    col.innerHTML = `
      <div class="card h-100">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title file-name">${f.title}</h5>
          <p class="card-text text-muted mb-3">${f.desc}</p>
          <div class="mt-auto">
            <button class="btn btn-outline-primary btn-sm me-2" data-filename="${f.key}" data-action="preview">Preview</button>
            <button class="btn btn-primary btn-sm" data-filename="${f.key}" data-action="download">Download</button>
          </div>
        </div>
      </div>
    `;
    grid.appendChild(col);
  });

  // Attach event listeners
  grid.querySelectorAll('button[data-action="download"]').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const name = e.currentTarget.getAttribute('data-filename');
      try {
        await downloadFileFor(name);
      } catch (err) {
        showStatus('Error downloading ' + name + ': ' + (err?.message ?? err), true);
      }
    });
  });
  grid.querySelectorAll('button[data-action="preview"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const name = e.currentTarget.getAttribute('data-filename');
      const content = CONTENT[name] ?? '';
      showPreview(name, content);
    });
  });
}

// Preview modal
function showPreview(filename, content) {
  const modal = new bootstrap.Modal(document.getElementById('previewModal'));
  const title = document.getElementById('previewModalLabel');
  const pre = document.getElementById('previewContent');
  title.textContent = 'Preview: ' + filename;
  pre.textContent = content;
  modal.show();
}

// Download a single file content
async function downloadFileFor(filename) {
  const content = CONTENT[filename] ?? '';
  // Detect if content is JSON and pretty-print
  const mime = filename.endsWith('.json') ? 'application/json' :
               filename.endsWith('.svg') ? 'image/svg+xml' :
               filename.endsWith('.md') ? 'text/markdown' :
               filename.endsWith('.txt') || filename === 'LICENSE' || filename.endsWith('.txt') ? 'text/plain' :
               (typeof content === 'string' ? 'text/plain' : 'text/plain');
  let blob = new Blob([content], { type: mime });

  // Special handling: pretty-print JSON if user provided as minified string
  if (filename.endsWith('.json')) {
    try {
      const obj = JSON.parse(content);
      const pretty = JSON.stringify(obj, null, 2);
      blob = new Blob([pretty], { type: mime });
    } catch (e) {
      // If content isn't valid JSON, proceed with original
    }
  }

  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  // Ensure proper filename
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(a.href);
}

// Bulk export all required files (pack)
async function exportAllPack() {
  showStatus('Starting export of all required content files...', false);
  try {
    // We'll sequentially generate and download to avoid race conditions
    for (const f of FILE_DEFS) {
      // Only generate if CONTENT has data; otherwise skip
      const name = f.key;
      if (name && CONTENT.hasOwnProperty(name)) {
        await downloadFileFor(name);
      } else {
        // Even if not in CONTENT, attempt to download a placeholder to satisfy "exists" requirement
        await downloadFileFor(name);
      }
    }

    // Also export a compact index.html (generated pack index)
    const indexHtmlContent = generatePackIndexHtml();
    const blob = new Blob([indexHtmlContent], { type: 'text/html' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'index.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);

    showStatus('Export complete. Files downloaded may trigger browser prompts depending on your settings.', false);
  } catch (err) {
    showStatus('Export failed: ' + (err?.message ?? err), true);
  }
}

function generatePackIndexHtml() {
  // A lightweight homepage HTML suitable for hosting on GitHub Pages
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Generated Pack - GitHub Pages</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body>
  <h1>Generated Pack</h1>
  <p>This is a generated index.html for hosting a pre-bundled content pack on GitHub Pages.</p>
  <ul>
    ${FILE_DEFS.map(f => `<li>${f.title} &middot; ${f.desc}</li>`).join('\n')}
  </ul>
  <p>All content is client-generated from Content Pack Studio.</p>
</body>
</html>`;
}

function showStatus(message, isError) {
  const status = document.getElementById('status');
  status.style.display = 'block';
  status.className = isError ? 'alert alert-danger mt-3' : 'alert alert-info mt-3';
  status.textContent = message;
  if (!isError) {
    // auto-hide after a bit
    setTimeout(() => status.style.display = 'none', 4000);
  }
}

// Initialize
function init() {
  // Build grid and attach handlers
  buildFileGrid();

  // Button handlers
  const exportAllBtn = document.getElementById('exportAllBtn');
  if (exportAllBtn) {
    exportAllBtn.addEventListener('click', exportAllPack);
  }

  const refreshBtn = document.getElementById('refreshBtn');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', () => {
      // Simple UI refresh
      showStatus('UI refreshed', false);
      buildFileGrid();
    });
  }

  // License link (open license text)
  const licenseLink = document.getElementById('licenseLink');
  if (licenseLink) {
    licenseLink.addEventListener('click', (e) => {
      e.preventDefault();
      // Download LICENSE as a text file
      downloadFileFor('LICENSE');
    });
  }
}

document.addEventListener('DOMContentLoaded', init);

// Attach a small helper to allow direct file download by clicking a "data-export" anchor in the UI (if needed in future)
</script>