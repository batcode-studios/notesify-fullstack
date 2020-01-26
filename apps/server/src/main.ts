/* tslint:disable: no-console */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { environment } from './environments/environment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(environment.port, () => {
    console.log(`Listening at http://localhost:${environment.port}`);
  });
}
bootstrap();
