import HomePage from "../components/HomePage/HomePage";

export const routes = [
    {
        path: '/Project_WEBAPPDEV',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: "*",
        page: HomePage
    }
]