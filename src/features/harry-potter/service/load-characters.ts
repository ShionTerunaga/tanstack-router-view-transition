import { isErr } from "ts-utility-kit/result";
import { isNone } from "ts-utility-kit/option";
import type { APIView } from "../model/model-view";
import { getCharacter } from "./get-character";

let charactersCache: Array<APIView> | undefined;
let charactersRequest: Promise<Array<APIView>> | undefined;

export function getCachedCharacters(): Array<APIView> | undefined {
    return charactersCache;
}

export async function loadCharacters(): Promise<Array<APIView>> {
    if (charactersCache) {
        return charactersCache;
    }

    if (charactersRequest) {
        return charactersRequest;
    }

    charactersRequest = getCharacter().then((result) => {
        if (isErr(result)) {
            throw new Error(result.err.message);
        }

        if (isNone(result.value)) {
            charactersCache = [];
            return charactersCache;
        }

        charactersCache = result.value.value;
        return charactersCache;
    });

    try {
        return await charactersRequest;
    } finally {
        charactersRequest = undefined;
    }
}
