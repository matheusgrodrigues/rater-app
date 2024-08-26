import ActorRepository, { ActorRepositoryImp } from '../repository/ActorRepository';

interface ActorServiceImp extends ActorRepositoryImp {}

const ActorService: ActorServiceImp = {
    getAll: async () => {
        const result = ActorRepository.getAll();
        return result;
    },
};

export default ActorService;
