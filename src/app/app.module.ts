import { PlaylistModule } from './pages/playlist/playlist.module';
import { AuthModule } from './pages/auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { PlaylistDetailsComponent } from './pages/playlist/playlist-details/playlist-details.component';
import { CreatePlaylistComponent } from './pages/playlist/create-playlist/create-playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    PlaylistDetailsComponent,
    CreatePlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PlaylistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
