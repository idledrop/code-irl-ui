// App
export * from './app.component';
export * from './app.service';

import { AppState } from './app.service';
import { CustomHttpService, TagService, CodeService, CodeDisplayService } from './shared';

// Application wide providers
export const APP_PROVIDERS = [
    AppState,
    CustomHttpService,
    TagService,
    CodeService,
    CodeDisplayService
];
