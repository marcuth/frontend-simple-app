import { env } from "@marcuth/env"

const isProduction = env("NODE_ENV", false) === "production"

export const configHelper = {
    isProduction: isProduction,
    isDevelopment: !isProduction,
}
