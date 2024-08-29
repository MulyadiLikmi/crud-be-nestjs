// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CustomerModule } from './customer/customer.module';
import { Customer } from './customer/customer.entity'; // Import your entity

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Loads environment variables
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Customer], // Specify your entity/entities here
      synchronize: true, // For development only; not recommended in production
    }),
    CustomerModule,
  ],
})
export class AppModule {}
