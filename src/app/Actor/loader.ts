import { useActorStore } from '../store';

import { ActorResponseSchema } from '../../schemas/ActorSchema';

import ActorService from '../../services/ActorService';

export interface LoaderActorData {
    actor: Promise<ActorResponseSchema>;
}

export const getActorLoader = async () => {
    const { actor, setActor } = useActorStore.getState();

    if (actor) {
        return actor;
    } else {
        const data = await ActorService.getAll();
        setActor(data);

        return data;
    }
};
