import type { APIView } from "@/features/harry-potter";
import { Box, Heading } from "@/lib/ui";
import { Link } from "@tanstack/react-router";
import { isSome, type Option } from "ts-utility-kit/option";
import characterDetailStyle from "./character-detail.css";

interface Props {
    character: APIView;
}

function optionText<T extends string | number>(value: Option<T>): string {
    return isSome(value) ? String(value.value) : "不明";
}

function textOrUnknown(value: string): string {
    return value || "不明";
}

function CharacterDetail({ character }: Props) {
    const transitionImageName = `character-image-${character.id}`;
    const transitionTitleName = `character-title-${character.id}`;

    const details = [
        ["寮", textOrUnknown(character.house)],
        ["種族", textOrUnknown(character.species)],
        ["性別", textOrUnknown(character.gender)],
        ["生年月日", optionText(character.dateOfBirth)],
        ["血統", textOrUnknown(character.ancestry)],
        ["目の色", textOrUnknown(character.eyeColour)],
        ["髪の色", textOrUnknown(character.hairColour)],
        ["守護霊", textOrUnknown(character.patronus)],
        ["俳優", textOrUnknown(character.actor)],
        ["魔法使い", character.wizard ? "はい" : "いいえ"],
        ["存命", character.alive ? "はい" : "いいえ"],
    ];

    return (
        <Box as="main" className={characterDetailStyle.page}>
            <Box className={characterDetailStyle.inner}>
                <Link
                    className={characterDetailStyle.backLink}
                    to="/single-dynamic-fetch"
                    viewTransition
                >
                    ← キャラクター一覧へ
                </Link>

                <Box as="article" className={characterDetailStyle.card}>
                    <Box className={characterDetailStyle.portraitWrap}>
                        <img
                            className={characterDetailStyle.portrait}
                            src={character.image}
                            alt={`${character.name}の肖像`}
                            style={{ viewTransitionName: transitionImageName }}
                        />
                    </Box>

                    <Box className={characterDetailStyle.content}>
                        <p className={characterDetailStyle.eyebrow}>HOGWARTS ARCHIVE</p>
                        <Heading
                            className={characterDetailStyle.title}
                            style={{ viewTransitionName: transitionTitleName }}
                        >
                            {character.name}
                        </Heading>

                        {character.alternateNames.length > 0 && (
                            <p className={characterDetailStyle.aliases}>
                                別名: {character.alternateNames.join(" / ")}
                            </p>
                        )}

                        <dl className={characterDetailStyle.detailList}>
                            {details.map(([label, value]) => (
                                <div className={characterDetailStyle.detailItem} key={label}>
                                    <dt className={characterDetailStyle.detailTerm}>{label}</dt>
                                    <dd className={characterDetailStyle.detailDescription}>{value}</dd>
                                </div>
                            ))}
                        </dl>

                        <Box className={characterDetailStyle.wand}>
                            <h2 className={characterDetailStyle.wandTitle}>杖</h2>
                            <p className={characterDetailStyle.wandText}>
                                木材: {textOrUnknown(character.wand.wood)} / 芯: {textOrUnknown(character.wand.core)} / 長さ: {optionText(character.wand.length)}
                                {isSome(character.wand.length) ? "インチ" : ""}
                            </p>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default CharacterDetail;
