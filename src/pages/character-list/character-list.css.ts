import { style } from "@vanilla-extract/css";

const characterListStyle = {
    status: style({
        display: "grid",
        minHeight: "100dvh",
        placeItems: "center",
        padding: 24,
        color: "#0f172a",
        background:
            "linear-gradient(160deg, #e2e8f0 0%, #f8fafc 25%, #f1f5f9 70%, #dbeafe 100%)",
        fontSize: "1rem",
        fontWeight: 700,
    }),
};

export default characterListStyle;
