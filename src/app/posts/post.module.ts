import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { PostRoutingModule } from './post.routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PostRoutingModule
  ],
  declarations: [
    // PostsComponent
  ]
})
export class PostModule {
}
