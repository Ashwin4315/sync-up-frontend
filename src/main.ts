import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'leaflet/dist/leaflet.css';
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
