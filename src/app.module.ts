import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PubSubModule } from '@savanapoint/nestjs-pubsub';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot(), // Loads environment variables
    PubSubModule.forRoot({
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
    }),

    
  ],
  // Other modules and controllers

  controllers: [AppController],
 

})
export class AppModule {}