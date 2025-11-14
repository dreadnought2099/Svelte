import { route as ziggyRoute } from "ziggy-js";

export default function route(name, params = {}, absolute = false) {
    return ziggyRoute(name, params, absolute, window.Ziggy);
}