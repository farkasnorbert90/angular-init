import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		RouterModule
	]
})
export class SharedModule {}
