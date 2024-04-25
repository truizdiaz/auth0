import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAuth0 } from '@auth0/auth0-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAuth0({
      domain: 'dev-xhxxe25hwka3dodr.us.auth0.com',
      clientId: '4u7J6hAeb6oaT5GIFFDpumppAlFRcJtP',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  ]
};
