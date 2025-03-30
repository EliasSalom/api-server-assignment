import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/prodact.module';
import { CartModule } from './cart/cart.module';
import { AppDao } from './app.dao';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'test',
      signOptions: { expiresIn: '10m' },
    }),
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
    }),
    ProductModule,
    CartModule,
    MongooseModule.forRoot('mongodb://localhost:27017/mydatabase', {}),
  ],
  controllers: [AppController],
  providers: [AppService, AppDao],
})
export class AppModule {}
