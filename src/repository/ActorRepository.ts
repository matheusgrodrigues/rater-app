import Middleware from '../core/middleware';

import { ActorResponseSchema } from '../schemas/ActorSchema';

export interface ActorRepositoryImp {
    getAll: () => Promise<ActorResponseSchema>;
}

const api_url = process.env.REACT_APP_TMDB_API_URL;

const ActorRepository: ActorRepositoryImp = {
    getAll: async () => {
        const req = await Middleware.request({
            url: `${api_url}/person/popular?language=pt-BR&page=1`,
        });
        const resp = await req.json();
        return resp;
    },
};

export default ActorRepository;
