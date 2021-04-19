module.exports = {
    siteMetadata: {
        description: "Personal page of Leo Vincent",
        locale: "en",
        title: "Leo Vincent",
        formspreeEndpoint: "https://formspree.io/f/{your-id}",
    },
    plugins: [
        {
        resolve: "@wkocjan/gatsby-theme-intro",
            options: {
                basePath: "/",
                contentPath: "content/",
                showThemeLogo: false,
                theme: "blue",
            },
        },
    ],
}