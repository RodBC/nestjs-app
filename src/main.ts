import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AppDataSource } from './data-source';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Tasks app')
    .setDescription('The tasks app')
    .setVersion('1.0')
    .build();

  await AppDataSource.initialize()
    .then(() => console.log('bd up'))
    .catch((error) => console.log(error));
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors();
  await app.listen(3000);
}

bootstrap();
