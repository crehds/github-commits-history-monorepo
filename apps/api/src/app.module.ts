import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CommitsModule } from './commits/commits.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'client/dist'),
    }),
    ConfigModule.forRoot({
      load: [configuration],
    }),
    CommitsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
