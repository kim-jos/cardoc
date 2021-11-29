import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiresModule } from './tires/tires.module';
import { TrimsModule } from './trims/trims.module';
import { getConnectionOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
          namingStrategy: new SnakeNamingStrategy(),
        }),
    }),
    // TypeOrmModule.forFeature([join(__dirname, '**', '*.entity.{ts,js}')]),
    // TypeOrmModule.forRoot({
    //   type: 'sqlite',
    //   database: 'database.db',
    //   synchronize: true,
    //   logging: false,
    //   entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    // }),
    AuthModule,
    UsersModule,
    TiresModule,
    TrimsModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule { }
