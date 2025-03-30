import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/prodact.module';
import { CartModule } from './cart/cart.module';
import { AppDao } from './app.dao';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';

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
  ],
  controllers: [AppController],
  providers: [AppService, AppDao, PrismaClient],
})
export class AppModule {}
