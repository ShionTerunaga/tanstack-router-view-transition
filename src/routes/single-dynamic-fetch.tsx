import { createFileRoute } from "@tanstack/react-router";
import CharacterList from "@/pages/character-list/character-list";

export const Route = createFileRoute("/single-dynamic-fetch")({
    component: CharacterList,
});
