import { VideoJsPlayer, VideoJsPlayerPluginOptions } from 'video.js';

declare module 'video.js' {
  export interface VideoJsPlayer {
    hlsQualitySelector(options: VideoJsQualitySelectorOptions): void;
  }
  export interface VideoJsPlayerPluginOptions {
    hlsQualitySelector?: VideoJsQualitySelectorOptions;
  }
}

export interface VideoJsQualitySelectorOptions {
  displayCurrentQuality?: boolean;
  placementIndex?: number;
  vjsIconClass?: string;
}
