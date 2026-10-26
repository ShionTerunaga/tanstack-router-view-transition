import { Box } from "@/lib/ui";
import { isSome } from "ts-utility-kit/option";
import { CardListView } from "@/features/harry-potter";
import { useSinglePageCharacters } from "@/features/harry-potter";
import { ja } from "@/shared/lang/ja";
import characterListStyle from "./character-list.css";

function CharacterList() {
    const { characters, isLoading, error } = useSinglePageCharacters();

    if (isLoading) {
        return <Box className={characterListStyle.status}>Loading...</Box>;
    }

    if (isSome(error)) {
        return <Box className={characterListStyle.status}>Error: {error.value.message}</Box>;
    }

    if (characters.length === 0) {
        return <Box className={characterListStyle.status}>No characters.</Box>;
    }

    return <CardListView potters={characters} title={ja.app.singleDynamicPotter.title} />;
}

export default CharacterList;
