import { globalStyle, style } from "@vanilla-extract/css";

const characterDetailStyle = {
    page: style({
        minHeight: "100dvh",
        padding: "40px 24px 72px",
        color: "#f8fafc",
        background:
            "radial-gradient(circle at 82% 10%, rgba(180, 137, 60, 0.2), transparent 34%), linear-gradient(145deg, #111827 0%, #172033 48%, #0f172a 100%)",
    }),
    inner: style({
        maxWidth: 1040,
        margin: "0 auto",
    }),
    backLink: style({
        display: "inline-flex",
        marginBottom: 28,
        padding: "10px 14px",
        border: "1px solid #e2e8f0",
        borderRadius: 999,
        color: "#0f172a",
        background: "#f8fafc",
        textDecoration: "none",
        transition: "background-color 180ms ease, border-color 180ms ease",
        selectors: {
            "&:hover": {
                borderColor: "#d6b56d",
                background: "#f5e8c8",
            },
            "&:focus-visible": {
                outline: "3px solid #d6b56d",
                outlineOffset: 3,
            },
        },
    }),
    card: style({
        display: "grid",
        gridTemplateColumns: "minmax(240px, 0.78fr) minmax(0, 1.22fr)",
        overflow: "hidden",
        border: "1px solid rgba(214, 181, 109, 0.32)",
        borderRadius: 28,
        background: "rgba(15, 23, 42, 0.76)",
        boxShadow: "0 30px 80px rgba(0, 0, 0, 0.38)",
        '@media': {
            "screen and (max-width: 720px)": {
                gridTemplateColumns: "1fr",
            },
        },
    }),
    portraitWrap: style({
        minHeight: 620,
        background: "#1e293b",
        '@media': {
            "screen and (max-width: 720px)": {
                minHeight: 420,
            },
        },
    }),
    portrait: style({
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "27px 0 0 27px",
        '@media': {
            "screen and (max-width: 720px)": {
                borderRadius: "27px 27px 0 0",
            },
        },
    }),
    content: style({
        padding: "clamp(28px, 5vw, 64px)",
    }),
    eyebrow: style({
        margin: "0 0 10px",
        color: "#d6b56d",
        fontSize: 12,
        fontWeight: 800,
        letterSpacing: "0.2em",
    }),
    title: style({
        display: "inline-block",
        margin: 0,
        color: "#fff",
        fontSize: "clamp(2rem, 5vw, 4rem)",
        lineHeight: 1.05,
        letterSpacing: "-0.04em",
    }),
    aliases: style({
        margin: "14px 0 0",
        color: "#cbd5e1",
        lineHeight: 1.6,
    }),
    detailList: style({
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: "1px",
        margin: "36px 0 0",
        overflow: "hidden",
        border: "1px solid rgba(148, 163, 184, 0.2)",
        borderRadius: 16,
        background: "rgba(148, 163, 184, 0.18)",
        '@media': {
            "screen and (max-width: 480px)": {
                gridTemplateColumns: "1fr",
            },
        },
    }),
    detailItem: style({
        padding: "14px 16px",
        background: "rgba(15, 23, 42, 0.94)",
    }),
    detailTerm: style({
        marginBottom: 5,
        color: "#94a3b8",
        fontSize: 12,
    }),
    detailDescription: style({
        margin: 0,
        color: "#f8fafc",
        fontWeight: 700,
    }),
    wand: style({
        marginTop: 24,
        padding: 20,
        borderLeft: "3px solid #d6b56d",
        background: "rgba(214, 181, 109, 0.08)",
    }),
    wandTitle: style({
        margin: "0 0 8px",
        fontSize: 16,
    }),
    wandText: style({
        margin: 0,
        color: "#cbd5e1",
        lineHeight: 1.7,
    }),
};

globalStyle("::view-transition-group(*)", {
    animationDuration: "520ms",
    animationTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
});

export default characterDetailStyle;
