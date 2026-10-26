import { Box } from "@/lib/ui";
import type { CheckerProps } from "@/shared/types/object";
import type { CSSProperties } from "react";
import cardStyles from "./card.css";

interface Props {
    title: string;
    src: string;
    alt: string;
    boxHeight: number;
    srcWidth: number;
    srcHeight: number;
    imageTransitionName?: string;
    titleTransitionName?: string;
}

export function Card<T extends Props>(props: CheckerProps<T, Props, "different card props">) {
    const {
        title,
        src,
        alt,
        srcWidth,
        srcHeight,
        boxHeight,
        imageTransitionName,
        titleTransitionName,
    } = props;

    const cardStyle: CSSProperties = {
        width: srcWidth,
        height: boxHeight,
    };

    return (
        <Box className={cardStyles.cardContainer} style={cardStyle}>
            <img
                src={src}
                alt={alt}
                className={cardStyles.image}
                width={srcWidth}
                height={srcHeight}
                style={{ viewTransitionName: imageTransitionName }}
            />
            <p className={cardStyles.title} style={{ viewTransitionName: titleTransitionName }}>
                {title}
            </p>
        </Box>
    );
}
