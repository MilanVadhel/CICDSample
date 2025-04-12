export default () => {
    const appName = process.env.APP_NAME || "CICDSample";
    const packageSuffix = process.env.PACKAGE_SUFFIX || "";
    const env = process.env.ENV || "development"
    const apiUrl = process.env.API_URL || "https://staging.com"

    return {
        expo: {
            name: appName,
            slug: "CICDSample",
            version: "1.0.0",
            orientation: "portrait",
            icon: "./assets/images/icon.png",
            scheme: "myapp",
            userInterfaceStyle: "automatic",
            newArchEnabled: true,

            ios: {
                supportsTablet: true,
                bundleIdentifier: `com.app.cicdsample${packageSuffix}`, // Customize based on ENV
            },

            android: {
                adaptiveIcon: {
                    foregroundImage: "./assets/images/adaptive-icon.png",
                    backgroundColor: "#ffffff",
                },
                package: `com.app.cicdsample${packageSuffix}`,
            },

            web: {
                bundler: "metro",
                output: "static",
                favicon: "./assets/images/favicon.png",
            },

            plugins: [
                "expo-router",
                [
                    "expo-splash-screen",
                    {
                        image: "./assets/images/splash-icon.png",
                        imageWidth: 200,
                        resizeMode: "contain",
                        backgroundColor: "#ffffff",
                    },
                ],
            ],

            experiments: {
                typedRoutes: true,
            },

            extra: {
                eas: {
                    projectId: "285bc0b2-db2d-43fb-aa8e-29753ca1db40"
                },
                APP_NAME: appName,
                ENV: env, // e.g. staging / production
                ENV: apiUrl, // e.g. staging / production
            },

            runtimeVersion: {
                policy: "appVersion"
            },

            updates: {
                url: "https://u.expo.dev/285bc0b2-db2d-43fb-aa8e-29753ca1db40",
                enabled: true
            },

            owner: "milan-kumar"
        },
    };
};
