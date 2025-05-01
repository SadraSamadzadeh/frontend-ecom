import { atom } from "jotai";
import { theme } from "../style/theme";

export const mobileAtom = atom(window.matchMedia(`(max-width: ${theme.responsive.media.lg})`).matches);
