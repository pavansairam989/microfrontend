import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// For standalone use
const mountAngular = (el: HTMLElement) => {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
};

// Automatically mount the app if it's running standalone
if (document.querySelector('#angular-app-root')) {
  mountAngular(document.querySelector('#angular-app-root') as HTMLElement);
}

export default mountAngular;