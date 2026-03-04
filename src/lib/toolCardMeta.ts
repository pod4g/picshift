import type { ToolPageConfig } from '../types';

export type ToolCardIconType = 'compress' | 'resize' | 'jpg' | 'png' | 'webp' | 'avif' | 'generic';

export interface ToolCardMetaInput {
  tool: ToolPageConfig;
  translatedH1: string;
  translatedIntroText: string;
  compressLabel: string;
  resizeLabel: string;
}

export interface ToolCardMeta {
  label: string;
  introText: string;
  fromTo: string;
  iconType: ToolCardIconType;
  iconContainerClass: string;
  iconClass: string;
}

export function getToolCardMeta(input: ToolCardMetaInput): ToolCardMeta {
  const { tool, translatedH1, translatedIntroText, compressLabel, resizeLabel } = input;
  const isCompressor = tool.slug === 'image-compressor';
  const isResizer = tool.slug === 'image-resizer';

  const label = isCompressor
    ? compressLabel
    : translatedH1.replace('Convert ', '').replace('Compress ', '');

  const inputFormat = tool.defaultInputFormat?.toUpperCase();
  const outputFormat = tool.defaultOutputFormat?.toUpperCase();
  const fromTo = isCompressor
    ? 'JPG / PNG / WebP'
    : inputFormat && outputFormat
      ? `${inputFormat} → ${outputFormat}`
      : resizeLabel;

  const iconType: ToolCardIconType = isCompressor
    ? 'compress'
    : isResizer
      ? 'resize'
      : tool.defaultOutputFormat === 'jpg'
        ? 'jpg'
        : tool.defaultOutputFormat === 'png'
          ? 'png'
          : tool.defaultOutputFormat === 'webp'
            ? 'webp'
            : tool.defaultOutputFormat === 'avif'
              ? 'avif'
              : 'generic';

  const iconContainerClass =
    iconType === 'compress'
      ? 'w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center'
      : iconType === 'resize'
        ? 'w-10 h-10 rounded-lg bg-secondary-500/10 flex items-center justify-center'
        : iconType === 'jpg'
          ? 'w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center'
          : iconType === 'png'
            ? 'w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center'
            : iconType === 'webp'
              ? 'w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center'
              : iconType === 'avif'
                ? 'w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center'
                : 'w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center';

  const iconClass =
    iconType === 'compress'
      ? 'w-5 h-5 text-primary-500'
      : iconType === 'resize'
        ? 'w-5 h-5 text-secondary-500'
        : iconType === 'jpg'
          ? 'w-5 h-5 text-amber-500'
          : iconType === 'png'
            ? 'w-5 h-5 text-emerald-500'
            : iconType === 'webp'
              ? 'w-5 h-5 text-sky-500'
              : iconType === 'avif'
                ? 'w-5 h-5 text-violet-500'
                : 'w-5 h-5 text-primary-500';

  return {
    label,
    introText: translatedIntroText,
    fromTo,
    iconType,
    iconContainerClass,
    iconClass,
  };
}
