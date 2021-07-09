import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { MenuComponent } from './app/components/header/menu/menu.component';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  platformBrowserDynamic()
    .bootstrapModule(MenuComponent)
    .then(ref => {
      // Ensure Angular destroys itself on hot reloads.
     

      // Otherwise, log the boot error
    })
    .catch(err => console.error(err));
