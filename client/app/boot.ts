import {bootstrap}    from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './app.component';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {DashboardHTTPSevice} from 'app/services/dashboardHTTPSevice';


bootstrap(AppComponent , [ROUTER_PROVIDERS , HTTP_PROVIDERS,DashboardHTTPSevice]);