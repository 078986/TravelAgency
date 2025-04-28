import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  route("sign-in", "routes/root/sign-in.tsx"),
  layout("routes/admin/admin_layout.tsx", [
    route("dashboard", "routes/admin/dashboard.tsx"),
    route("users", "routes/admin/Users.tsx"),
  ]),
] satisfies RouteConfig;
