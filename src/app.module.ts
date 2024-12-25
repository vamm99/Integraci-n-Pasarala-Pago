import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerConfiguredModule } from './lib/Logger';

@Module({
  imports: [LoggerConfiguredModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
