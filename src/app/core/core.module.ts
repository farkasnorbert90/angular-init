import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ApiService } from './services/api.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostService } from './services/post.service';

@NgModule({
	imports: [
		SharedModule
	],
	declarations: [
		NavbarComponent
	],
	providers: [
		ApiService,
		PostService
	],
	exports: [
		NavbarComponent
	]
})
export class CoreModule {}
