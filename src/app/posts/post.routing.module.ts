import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { PostListComponent } from './pages/post-list/post-list.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: ':id',
    component: PostDetailsComponent,
  },
  {
    path: '',
    component: PostListComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PostDetailsComponent,
    PostListComponent
  ],
  exports: [
    RouterModule
  ]
})
export class PostRoutingModule {
}
