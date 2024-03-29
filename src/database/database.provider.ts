import * as mongoose from 'mongoose';

export const databaseProvider = [
  {
    provide: 'DATABASE_CONECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(
        'mongodb://republicanos:1010@localhost:27017/eleicoes-db',
      ),
  },
];
