/**
 * Asset helper to ensure correct base path for GitHub Pages
 */

// Get the base path from Vite config
const BASE_PATH = import.meta.env.BASE_URL || '/';

/**
 * Get the full URL for an asset with the correct base path
 * @param path Asset path starting with /
 * @returns Full asset URL with base path
 */
export function getAssetUrl(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Ensure base path ends with /
  const basePath = BASE_PATH.endsWith('/') ? BASE_PATH : BASE_PATH + '/';
  
  return basePath + cleanPath;
}

// Pre-defined asset URLs
export const ASSETS = {
  avatar8bit: getAssetUrl('avatar_8bit.png'),
  avatarProfile2: getAssetUrl('avatar-profile-2.png'),
  scorpionHero: getAssetUrl('scorpion-hero.png'),
  landscape1: getAssetUrl('landscape-1.png'),
  landscape2: getAssetUrl('landscape-2.png'),
  landscape4: getAssetUrl('landscape-4.png'),
  landscape5: getAssetUrl('landscape-5.png'),
  landscape6: getAssetUrl('landscape-6.png'),
} as const;