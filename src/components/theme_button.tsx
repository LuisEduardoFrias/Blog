//
'use client'
import React, { useEffect, useState } from 'react';

export default function ThemeButton() {
  const [theme, setTheme] = useState('system');
  const [isLight, setIsLight] = useState(true);

  useEffect(() => {
    const userPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    if (theme === 'system') {
      setTheme(userPreference);
    } else {
      document.documentElement.className = theme;
      setIsLight(theme === 'light');
    }
  }, [theme]);

  const handleThemeChange = (e) => {
    const selectedTheme = e.target.value;
    setTheme(selectedTheme);
    document.documentElement.className = selectedTheme;
    setIsLight(selectedTheme === 'light');
  };

  return (
    <div className="flex items-center space-x-4">
      <label className="flex items-center flex gap-2">
        <span className="ml-2">Theme mode</span>
        <select
          value={theme}
          onChange={handleThemeChange}
          className="border px-2 bg-black rounded w-100 h-8"
        >
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>

      <input
        type="checkbox"
        checked={isLight}
        onChange={() => setIsLight(!isLight)}
        id="theme-checkbox"
        className="hidden"
        disabled={theme === 'system'}
      />
    </div>
  );
}