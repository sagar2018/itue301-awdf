// =============================================================================
// ITUE301 Advanced Web Development Frameworks
// main.js  |  Shared utilities + Google Drive link configuration
// =============================================================================

// ─────────────────────────────────────────────────────────────────────────────
//  GOOGLE DRIVE LINKS
//  ► Change '#' to your actual Google Drive sharing URL for each item.
//  ► Use "Anyone with the link → Viewer" sharing mode in Google Drive.
//  ► If you overwrite the same file in Drive, the URL stays the same —
//    you do NOT need to update these links unless you upload a new file.
// ─────────────────────────────────────────────────────────────────────────────
const DRIVE_LINKS = {

  // ── Course-level documents ──────────────────────────────────────────────
  SYLLABUS:    'https://drive.google.com/file/d/1FgDYDrhRXkl4ineJKoq8esmqP2MUGU5Y/view?usp=share_link',   // TODO: Full course syllabus (PDF)
  LAB_MANUAL:  'https://drive.google.com/file/d/1hnrJd74t634Wc3yF1f9h-Ua0NVAJU_Ck/view?usp=share_link',   // TODO: Lab manual / general instructions (PDF)

  // ── Practical handouts (13 weeks) ───────────────────────────────────────
  //    Each link should point to the PDF/Doc for that week's lab sheet.
  P_W1:   '#',   // Week  1 React Components & JSX
  P_W2:   '#',   // Week  2 React State Management & Hooks
  P_W3:   '#',   // Week  3 React Router & Context API
  P_W4:   '#',   // Week  4 Node.js & Express Fundamentals
  P_W5:   '#',   // Week  5 RESTful API Design
  P_W6:   '#',   // Week  6 MongoDB & Mongoose Integration
  P_W7:   '#',   // Week  7 JWT Authentication & Authorization
  P_W8:   '#',   // Week  8 Frontend Performance Optimization
  P_W9:   '#',   // Week  9 Server-side Caching with Redis
  P_W10:  '#',   // Week 10 Database Query Optimization
  P_W11:  '#',   // Week 11 Docker Containerization
  P_W12:  '#',   // Week 12 CI/CD with GitHub Actions
  P_W13:  '#',   // Week 13 OpenAI API Integration

  // ── Assignment documents (7 assignments) ────────────────────────────────
  //    Link to the assignment description PDF/Doc for each.
  A_W4:   '#',   // Assignment 1 Week  4 (RESTful Task API)
  A_W7:   '#',   // Assignment 2 Week  7 (Secure Auth System)
  A_W9:   '#',   // Assignment 3 Week  9 (Redis Caching)
  A_W10:  '#',   // Assignment 4 Week 10 (DB Optimization)
  A_W11:  '#',   // Assignment 5 Week 11 (Dockerize App)
  A_W12:  '#',   // Assignment 6 Week 12 (CI/CD Pipeline)
  A_W13:  '#',   // Assignment 7 Week 13 (AI Feature)
};

// =============================================================================
//  Student / Faculty View Mode
// =============================================================================

function getViewMode() {
  return localStorage.getItem('itue301_viewMode') || 'student';
}

function setViewMode(mode) {
  localStorage.setItem('itue301_viewMode', mode);
  applyViewMode();
}

function applyViewMode() {
  const mode = getViewMode();
  const isFaculty = mode === 'faculty';

  document.querySelectorAll('.faculty-only').forEach(el => {
    el.style.display = isFaculty ? '' : 'none';
  });

  document.querySelectorAll('.student-only').forEach(el => {
    el.style.display = isFaculty ? 'none' : '';
  });

  const toggle = document.getElementById('viewModeToggle');
  if (toggle) toggle.checked = isFaculty;

  const label = document.getElementById('viewModeLabel');
  if (label) label.textContent = isFaculty ? 'Faculty View' : 'Student View';
}

// =============================================================================
//  Week badge helper
//  Weeks 1–3: frontend  (green)
//  Weeks 4–7: backend   (blue)
//  Weeks 8–10: optimize (amber)
//  Weeks 11–13: devops  (red)
// =============================================================================
function weekBadgeClass(n) {
  n = parseInt(n);
  if (n <= 3)  return 'wk-frontend';
  if (n <= 7)  return 'wk-backend';
  if (n <= 10) return 'wk-optimize';
  return 'wk-devops';
}

// =============================================================================
//  DOM initialisation
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {

  // 1. Apply saved view mode (show/hide faculty-only content)
  applyViewMode();

  // 2. Wire the toggle switch
  const toggle = document.getElementById('viewModeToggle');
  if (toggle) {
    toggle.addEventListener('change', e => {
      setViewMode(e.target.checked ? 'faculty' : 'student');
    });
  }

  // 3. Populate Google Drive links
  //    Any element with data-drive-key="P_W1" (etc.) gets its href set.
  document.querySelectorAll('[data-drive-key]').forEach(el => {
    const key = el.getAttribute('data-drive-key');
    const url = DRIVE_LINKS[key];

    if (url && url !== '#') {
      el.href = url;
      el.removeAttribute('tabindex');
      el.classList.remove('disabled');
      el.removeAttribute('aria-disabled');
    } else {
      // Not yet configured show as disabled
      el.href = '#';
      el.setAttribute('tabindex', '-1');
      el.classList.add('disabled');
      el.setAttribute('aria-disabled', 'true');
      el.setAttribute('title', 'Link not yet published');
    }
  });
});
