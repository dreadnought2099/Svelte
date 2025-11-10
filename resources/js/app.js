import "./bootstrap";
import { createInertiaApp } from "@inertiajs/svelte";
import { mount } from "svelte";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import NProgress from "nprogress";
import { router } from "@inertiajs/svelte";

// disable spinner completely
NProgress.configure({ showSpinner: false });

createInertiaApp({
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.svelte`,
            import.meta.glob("./Pages/**/*.svelte")
        ),
    setup({ el, App, props }) {
        mount(App, { target: el, props });
    },
    progress: false,
});

router.on("start", () => NProgress.start());
router.on("finish", () => NProgress.done());
router.on("error", () => NProgress.done());
router.on("cancel", () => NProgress.done());
