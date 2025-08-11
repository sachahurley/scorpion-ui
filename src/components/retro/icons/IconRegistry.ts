/**
 * Icon Registry - Comprehensive mapping of all available retro icons
 * This file provides type-safe access to all icons in the collection
 */

// User Application Icons
export const userAppIcons = [
  '1 Password',
  'Adobe Acrobat',
  'Adobe After Effects 2022',
  'Adobe Animate 2022',
  'Adobe Audition 2022',
  'Adobe Bridge 2022',
  'Adobe Character Animator 2022',
  'Adobe Creative Cloud 2022',
  'Adobe Dimension 2022',
  'Adobe Dreamweaver 2022',
  'Adobe Illustrator 2022',
  'Adobe InCopy 2022',
  'Adobe InDesign 2022',
  'Adobe Lightroom 2022',
  'Adobe Lightroom Classic 2022',
  'Adobe Media Encoder 2022',
  'Adobe Photoshop 2022',
  'Adobe Premiere Pro 2022',
  'Adobe Premiere Rush 2022',
  'Adobe XD 2022',
  'Affinity Designer',
  'Affinity Photo',
  'Airmail',
  'Asana',
  'Authy',
  'Bear',
  'Blender',
  'Brave',
  'Canva',
  'Cinema4d',
  'Craft',
  'Discord',
  'Dos Box',
  'Dropbox',
  'Evernote',
  'Fantastical',
  'Figma',
  'Final Cut Pro',
  'Firefox',
  'Flashpoint',
  'Flight of the amazon queen',
  'Framer',
  'GarageBand',
  'Github Desktop',
  'GoToMeeting',
  'Google Chrome',
  'Google Docs',
  'Google Drive',
  'Google Sheets',
  'Google Slides',
  'IconChamp',
  'Jira Cloud',
  'Keynote',
  'LastPass',
  'Linear',
  'Logic Pro',
  'Microsoft Excel',
  'Microsoft Teams',
  'Microsoft Word',
  'NordVPN',
  'Notion',
  'Numbers',
  'OneDrive',
  'OneNote',
  'Outlook',
  'Pages',
  'Pogo',
  'PowerPoint',
  'Signal',
  'Sim City',
  'Sketch',
  'Skype',
  'Slack',
  'Soundcloud',
  'Spark',
  'Spotify',
  'Steam',
  'Sublime text editor',
  'Telegram',
  'Things',
  'Timeular',
  'TradingView',
  'Transporter',
  'Trello',
  'TweetDeck',
  'Twitch',
  'VLC media player',
  'Visual Studio Code',
  'We Transfer',
  'Whatsapp',
  'Zeplin',
  'iA Writer',
  'iMovie',
  'iTerm',
  'zoom.us',
] as const;

// System Application Icons
export const systemAppIcons = [
  'Activity Monitor',
  'Airport Utility',
  'App Store',
  'Audio MIDI Setup',
  'Automator',
  'Bluetooth File Exchange',
  'Books',
  'Boot Camp Assistant',
  'Calculator',
  'Calendar',
  'Chess',
  'ColorSync Utility',
  'Console',
  'Contacts',
  'Dictionary',
  'Digital Colour Meter',
  'Disk Utility',
  'Dock',
  'FaceTime',
  'Find My',
  'Finder',
  'Font Book',
  'Grapher',
  'Home',
  'Image Capture',
  'Installer',
  'Keychain Access',
  'Launchpad',
  'Mail',
  'Maps',
  'Messages',
  'Migration Assistant',
  'Mission Control',
  'Music',
  'News',
  'Notes',
  'Photo Booth',
  'Photos',
  'Podcasts',
  'Preview',
  'QuickTime Player',
  'Reminders',
  'Safari',
  'Screenshot',
  'Script Editor',
  'Shortcuts',
  'Siri',
  'Stickies',
  'Stocks',
  'System Information',
  'System preferences',
  'TV',
  'Terminal',
  'TextEdit',
  'Time Machine',
  'Trash empty',
  'Trash full',
  'Voice Memos',
  'VoiceOver Utility',
] as const;

// System Folder Icons
export const systemFolderIcons = [
  'Applications',
  'Desktop',
  'Developer',
  'Documents',
  'Downloads',
  'Executable',
  'Folder',
  'Home',
  'Library',
  'Movies',
  'Music',
  'Pictures',
  'Public',
  'Servers',
  'System',
  'Users',
  'Utilities',
] as const;

// File Extension Icons
export const fileExtensionIcons = [
  '7z',
  'apk',
  'appx',
  'avi',
  'br',
  'bundle',
  'cab',
  'dmg',
  'exe',
  'gif',
  'gz',
  'html',
  'iso',
  'jpg',
  'mkv',
  'mp3',
  'mp4',
  'pdf',
  'png',
  'rar',
  'savedSearch',
  'tar',
  'zip',
] as const;

// Drive Icons
export const driveIcons = [
  'External',
  'Flash',
  'Floppy',
  'Internal',
  'MiniSD',
  'Removable',
  'SD',
  'Server',
  'TimeMachine',
  'XD',
  'iCloud',
] as const;

// Type definitions for type safety
export type UserAppIconName = typeof userAppIcons[number];
export type SystemAppIconName = typeof systemAppIcons[number];
export type SystemFolderIconName = typeof systemFolderIcons[number];
export type FileExtensionIconName = typeof fileExtensionIcons[number];
export type DriveIconName = typeof driveIcons[number];

// Combined type for all icon names
export type AllIconName = 
  | UserAppIconName 
  | SystemAppIconName 
  | SystemFolderIconName 
  | FileExtensionIconName 
  | DriveIconName;

// Utility functions to check icon availability
export const isUserAppIcon = (name: string): name is UserAppIconName => 
  userAppIcons.includes(name as UserAppIconName);

export const isSystemAppIcon = (name: string): name is SystemAppIconName => 
  systemAppIcons.includes(name as SystemAppIconName);

export const isSystemFolderIcon = (name: string): name is SystemFolderIconName => 
  systemFolderIcons.includes(name as SystemFolderIconName);

export const isFileExtensionIcon = (name: string): name is FileExtensionIconName => 
  fileExtensionIcons.includes(name as FileExtensionIconName);

export const isDriveIcon = (name: string): name is DriveIconName => 
  driveIcons.includes(name as DriveIconName);

// Helper function to get category from icon name
export const getIconCategory = (name: string): 'user-apps' | 'system-apps' | 'system-folders' | 'extensions' | 'drives' | null => {
  if (isUserAppIcon(name)) return 'user-apps';
  if (isSystemAppIcon(name)) return 'system-apps';
  if (isSystemFolderIcon(name)) return 'system-folders';
  if (isFileExtensionIcon(name)) return 'extensions';
  if (isDriveIcon(name)) return 'drives';
  return null;
};

// Popular/commonly used icons for quick reference
export const popularIcons = {
  // Development tools
  vscode: 'Visual Studio Code' as const,
  figma: 'Figma' as const,
  github: 'Github Desktop' as const,
  terminal: 'Terminal' as const,
  
  // Browsers
  chrome: 'Google Chrome' as const,
  firefox: 'Firefox' as const,
  safari: 'Safari' as const,
  
  // Communication
  slack: 'Slack' as const,
  discord: 'Discord' as const,
  zoom: 'zoom.us' as const,
  
  // Creative tools
  photoshop: 'Adobe Photoshop 2022' as const,
  illustrator: 'Adobe Illustrator 2022' as const,
  
  // System
  finder: 'Finder' as const,
  calculator: 'Calculator' as const,
  calendar: 'Calendar' as const,
  
  // Folders
  folder: 'Folder' as const,
  documents: 'Documents' as const,
  downloads: 'Downloads' as const,
  
  // File types
  pdf: 'pdf' as const,
  png: 'png' as const,
  zip: 'zip' as const,
  
  // Drives
  external: 'External' as const,
  usb: 'Flash' as const,
  cloud: 'iCloud' as const,
} as const;

// Export all icon registries
export const iconRegistries = {
  userApps: userAppIcons,
  systemApps: systemAppIcons,
  systemFolders: systemFolderIcons,
  fileExtensions: fileExtensionIcons,
  drives: driveIcons,
  popular: popularIcons,
} as const;