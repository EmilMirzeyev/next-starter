import { extendTailwindMerge } from "tailwind-merge";
const fontSize = require("../../data/constants/font_size");

const merge = extendTailwindMerge({
    extend: {
        classGroups: {
            "font-size": Object.keys(fontSize).map((size) => `text-${size}`),
        },
    },
});

export default merge;