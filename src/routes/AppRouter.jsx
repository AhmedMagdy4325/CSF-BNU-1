import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

// Pages
import AboutPage from "../pages/AboutPage";
import AnnouncementsPage from "../pages/AnnouncementsPage";
import ContactPage from "../pages/ContactPage";
import DepartmentDetailsPage from "../pages/DepartmentDetailsPage";
import DepartmentsPage from "../pages/DepartmentsPage";
import EventsPage from "../pages/EventsPage";
import FacultyDetailsPage from "../pages/FacultyDetailsPage";
import FacultyPage from "../pages/FacultyPage";
import HomePage from "../pages/HomePage";
import NewsDetailsPage from "../pages/NewsDetailsPage";
import NewsPage from "../pages/NewsPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProgramsPage from "../pages/ProgramsPage";
import ServicesPage from "../pages/ServicesPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFoundPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "about", element: <AboutPage /> },
            { path: "departments", element: <DepartmentsPage /> },
            { path: "departments/:id", element: <DepartmentDetailsPage /> },
            { path: "programs", element: <ProgramsPage /> },
            { path: "news", element: <NewsPage /> },
            { path: "news/:id", element: <NewsDetailsPage /> },
            { path: "announcements", element: <AnnouncementsPage /> },
            { path: "faculty", element: <FacultyPage /> },
            { path: "faculty/:id", element: <FacultyDetailsPage /> },
            { path: "services", element: <ServicesPage /> },
            { path: "events", element: <EventsPage /> },
            { path: "contact", element: <ContactPage /> },
            { path: "*", element: <NotFoundPage /> },
        ],
    },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
