import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
	{
		path: '',
		component: HomeComponent,
		pathMatch: 'full'
	},
	{
		path: 'posts',
		loadChildren: './posts/post.module#PostModule'
	},
	{
		path: '**',
		redirectTo: ''
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	declarations: [
		HomeComponent
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}
