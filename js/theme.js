// Theme switcher functionality

const themes = {
  default: {
    primary: white,
    primaryHover: '#1d4ed8',
    secondary: '#64748b',
    accent: '#0ea5e9',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  orange: {
    primary: '#ea580c',
    primaryHover: '#c2410c',
    secondary: '#78716c',
    accent: '#f97316',
    gradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)'
  },
  purple: {
    primary: '#9333ea',
    primaryHover: '#7e22ce',
    secondary: '#71717a',
    accent: '#a855f7',
    gradient: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)'
  },
  green: {
    primary: '#16a34a',
    primaryHover: '#15803d',
    secondary: '#57534e',
    accent: '#22c55e',
    gradient: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)'
  },
  red: {
    primary: '#dc2626',
    primaryHover: '#b91c1c',
    secondary: '#78716c',
    accent: '#ef4444',
    gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'
  }
};

function applyTheme(themeName) {
  const theme = themes[themeName] || themes.default;
  const root = document.documentElement;
 
  // Create or update style element
  let styleElement = document.getElementById('dynamic-theme');
  if (!styleElement) {
    styleElement = document.createElement('style');
    styleElement.id = 'dynamic-theme';
    document.head.appendChild(styleElement);
  }
 
  styleElement.textContent = `
    :root {
      --theme-primary: ${theme.primary};
      --theme-primary-hover: ${theme.primaryHover};
      --theme-secondary: ${theme.secondary};
      --theme-accent: ${theme.accent};
      --theme-gradient: ${theme.gradient};
    }
   
    /* Header */
    .site-header {
      background: var(--theme-gradient) !important;
    }
   
    /* Buttons */
    .btn-primary {
      background-color: var(--theme-primary) !important;
      border-color: var(--theme-primary) !important;
    }
   
    .btn-primary:hover {
      background-color: var(--theme-primary-hover) !important;
      border-color: var(--theme-primary-hover) !important;
    }
   
    .btn-reset {
      background-color: var(--theme-secondary) !important;
      border-color: var(--theme-secondary) !important;
    }
   
    /* Cards */
    .property-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.15) !important;
    }
   
    .property-card:hover .card-title {
      color: var(--theme-primary) !important;
    }
   
    /* Price */
    .price {
      color: var(--theme-primary) !important;
    }
   
    .detail-price {
      color: var(--theme-primary) !important;
    }
   
    /* Links and icons */
    .logo {
      color: white !important;
    }
   
    .logo:hover {
      opacity: 0.9;
    }
   
    /* Filter section */
    .filter-section {
      border-left: 4px solid var(--theme-primary);
    }
   
    /* Footer */
    .site-footer {
      background: var(--theme-gradient) !important;
    }
   
    /* Contact box */
    .contact-box {
      border-left: 4px solid var(--theme-primary);
    }
   
    /* Back button */
    .btn-back {
      color: var(--theme-primary) !important;
    }
   
    .btn-back:hover {
      color: var(--theme-primary-hover) !important;
      background-color: rgba(0,0,0,0.05);
    }
  `;
 
  // Save theme preference
  localStorage.setItem('selectedTheme', themeName);
}

function initTheme() {
  const styleSwitcher = document.getElementById('styleSwitcher');
  if (!styleSwitcher) return;
 
  // Load saved theme
  const savedTheme = localStorage.getItem('selectedTheme') || 'default';
  styleSwitcher.value = savedTheme;
  applyTheme(savedTheme);
 
  // Listen for theme changes
  styleSwitcher.addEventListener('change', (e) => {
    applyTheme(e.target.value);
  });
}

// Initialize theme when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTheme);
} else {
  initTheme();
}
