import { useEffect, useMemo, useState } from "react";
import { createNone, createSome, isNone, type Option } from "ts-utility-kit/option";
import type { APIView } from "../model/model-view";
import type { SinglePageGetCharacters } from "./characters.type";
import { getCachedCharacters, loadCharacters } from "../service/load-characters";

export function useSinglePageCharacters() {
    const [fetchCharacter, setFetchCharacter] = useState<Option<Array<APIView>>>(() => {
        const cachedCharacters = getCachedCharacters();
        return cachedCharacters ? createSome(cachedCharacters) : createNone();
    });

    const [error, setError] = useState<Option<Error>>(createNone());

    useEffect(() => {
        if (getCachedCharacters()) {
            return;
        }

        loadCharacters()
            .then((characters) => {
                setFetchCharacter(createSome(characters));
            })
            .catch((caughtError: unknown) => {
                const nextError =
                    caughtError instanceof Error
                        ? caughtError
                        : new Error("キャラクター情報の取得に失敗しました。");
                setError(createSome(nextError));
            });
    }, []);

    const isLoading: boolean = useMemo(() => {
        return isNone(fetchCharacter) && isNone(error);
    }, [fetchCharacter, error]);

    const characters: Array<SinglePageGetCharacters> = useMemo(() => {
        if (isNone(fetchCharacter)) {
            return [];
        }

        const mappedCharacters: Array<SinglePageGetCharacters> = fetchCharacter.value.map(
            (item) => ({
                id: item.id,
                name: item.name,
                image: item.image,
            }),
        );

        return mappedCharacters;
    }, [fetchCharacter]);

    return {
        isLoading,
        characters,
        error,
    };
}
