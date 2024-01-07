import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "tshwiz52",
    dataset: "production",
    title: "Portfolio",
    apiVersion: "2023-12-28",
    basePath: "/admin",
    plugins:[deskTool()],
    schema: { types: schemas }
});

export default config;