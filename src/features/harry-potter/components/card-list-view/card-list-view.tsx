import { Card } from "@/components/card";
import { Box, FontCenter, GridBox, Heading } from "@/lib/ui";
import type { SinglePageGetCharacters } from "@/features/harry-potter";
import type { CheckerProps } from "@/shared/types/object";
import { Link } from "@tanstack/react-router";
import cardListViewStyle from "./card-list-view.css";

interface Props<T extends SinglePageGetCharacters> {
    potters: Array<T>;
    title: string;
}

export function CardListView<T extends SinglePageGetCharacters, S extends Props<T>>(
    props: CheckerProps<S, Props<T>, "Cache potter layout has not any props.">,
) {
    const { potters, title } = props;

    return (
        <Box as="section" className={cardListViewStyle.section}>
            <Box className={cardListViewStyle.inner}>
                <FontCenter className={cardListViewStyle.headingWrap} as="div">
                    <Heading className={cardListViewStyle.heading}>{title}</Heading>
                </FontCenter>

                <GridBox>
                    {potters.map(({ id, image, name }) => (
                        <Link
                            key={id}
                            className={cardListViewStyle.cardLink}
                            to="/single-dynamic-fetch/$characterId"
                            params={{ characterId: id }}
                            viewTransition
                            aria-label={`${name}の詳細を見る`}
                        >
                            <Card
                                src={image}
                                alt={`${name}の肖像`}
                                title={name}
                                srcWidth={150}
                                boxHeight={300}
                                srcHeight={200}
                                imageTransitionName={`character-image-${id}`}
                                titleTransitionName={`character-title-${id}`}
                            />
                        </Link>
                    ))}
                </GridBox>
            </Box>
        </Box>
    );
}
