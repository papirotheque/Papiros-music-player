document.addEventListener('DOMContentLoaded', () => {
    const themeSelect = document.getElementById('theme-select');
    const root = document.documentElement;

    const savedTheme = localStorage.getItem('preferred-theme') || 'default';
    root.setAttribute('data-theme', savedTheme);

    if (themeSelect) {
        themeSelect.value = savedTheme;
    }
    if (themeSelect) {
        themeSelect.addEventListener('change', (e) => {
            const selectedTheme = e.target.value;
            applyTheme(selectedTheme);
        });
    }

    window.applyTheme = function (themeName) {
        root.setAttribute('data-theme', themeName);
        localStorage.setItem('preferred-theme', themeName);
    };
});