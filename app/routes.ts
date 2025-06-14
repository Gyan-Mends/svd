import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("routes/_layout.tsx", [
        route("/","routes/landingPage/home.tsx"),
        route("/requestForm/request","routes/requestForm/request.tsx"),
        route("/pricing","routes/pricing/pricing.tsx"),
        route("/contact","routes/contact/contact.tsx"),
    ]),
    route("/api/send-email", "routes/api.send-email.ts"),
    route("/api/test-email", "routes/test-email.ts"),
] satisfies RouteConfig;
