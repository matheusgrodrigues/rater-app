import useRatterStore from '../store';

import { ActorResponseSchema } from '../../schemas/ActorSchema';

import ActorService from '../../services/ActorService';

export interface LoaderActorData {
    actors: Promise<ActorResponseSchema>;
}

export const getActorLoader = async () => {
    const { actors, setActor } = useRatterStore.getState();

    if (actors) {
        return actors;
    } else {
        const data = await ActorService.getAll();
        setActor(data);

        return data;
    }
};
