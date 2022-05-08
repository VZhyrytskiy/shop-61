import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PathNotFoundComponent} from './components/path-not-found/path-not-found.component';
import {CartListComponent} from './components/cart/cart-list/cart-list.component';
import {FirstComponent} from './components/first/first.component';
const routes: Routes = [
  {
    path: 'cart',
    component: CartListComponent
  },
  {
    path: 'first',
    component: FirstComponent
  },
  {
    // The router will match this route if the URL requested
    // doesn't match any paths for routes defined in our configuration
    path: '**',
    component: PathNotFoundComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
