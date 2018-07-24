import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		TabsModule.forRoot(),
		RouterModule
	],
	exports: [
		CommonModule,
		TabsModule,
		RouterModule
	]
})
export class SharedModule {}
