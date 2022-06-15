import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"home",loadChildren: () => import( "./features/home/home.module").then(m => m.HomeModule)},
  {path:"subscription", loadChildren: () => import("./features/subscription/subscription.module").then(m => m.SubscriptionModule)},
  {path:"**", redirectTo:"home",pathMatch:"full"},
  {path:"", redirectTo:"home",pathMatch:"full"}
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
