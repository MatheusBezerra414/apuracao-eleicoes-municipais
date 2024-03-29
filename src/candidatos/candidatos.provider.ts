import { Connection } from 'mongoose';
import { CandidatosSchema } from './candidatos.schema';

export const candidatosProvider = [
  {
    provider: 'CANDIDATOS_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Candidato', CandidatosSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
