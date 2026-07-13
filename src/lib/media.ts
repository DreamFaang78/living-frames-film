/**
 * Swap these URLs with your own hosted footage.
 * Every <video> in the site reads from this file. Format: muted, loop, mp4/webm.
 * Leave empty string to fall back to CSS cinematic scenes only.
 */
export const MEDIA = {
  heroVideo: "",
  heroPoster: "",
  aboutVideo: "",
  finalCtaVideo: "",
  productLoops: {
    upvc: "",
    aluminium: "",
    steel: "",
  },
} as const;
