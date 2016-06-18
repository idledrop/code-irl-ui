// App
export * from './app.component';
export * from './app.service';

import { AppState } from './app.service';
import { TagService } from './shared';

// Application wide providers
export const APP_PROVIDERS = [
  AppState,
  TagService
];
