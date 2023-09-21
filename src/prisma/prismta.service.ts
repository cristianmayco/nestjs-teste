import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaService extends PrismaClientService implements OnModuleInit {
    async onModuleInit() {
        await this.$connect();
    }

    async enableShutdownHooks(app: INestApplication) {
        this.$on('beforeExit', async () => {
            await app.close();
        });
    }

}
