// App
export * from './app.component';
export * from './app.service';

import { AppState } from './app.service';
import { TagService, CodeService } from './shared';

// Application wide providers
export const APP_PROVIDERS = [
  AppState,
  TagService,
  CodeService
];
