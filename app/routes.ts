import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("routes/_layout.tsx", [
        route("/","routes/landingPage/home.tsx"),
        route("/requestForm/request","routes/requestForm/request.tsx"),
        route("/pricing","routes/pricing/pricing.tsx"),
       
    ])
] satisfies RouteConfig;
