import { loadCharacters } from "@/features/harry-potter";
import CharacterDetail from "@/pages/character-detail/character-detail";
import { createFileRoute, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/single-dynamic-fetch_/$characterId")({
    loader: async ({ params }) => {
        const characters = await loadCharacters();
        const character = characters.find(({ id }) => id === params.characterId);

        if (!character) {
            throw notFound();
        }

        return character;
    },
    component: CharacterDetailRoute,
});

function CharacterDetailRoute() {
    const character = Route.useLoaderData();

    return <CharacterDetail character={character} />;
}
