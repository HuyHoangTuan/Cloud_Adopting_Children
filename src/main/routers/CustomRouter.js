import React from "react";
import { Route, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Logging } from "../../utils/Logging";
import GUILogin from "../../pages/login/GUILogin";
import PrivateRoute from "./PrivateRoute";
import GUIHome from "../../pages/home/GUIHome";
import PublicRoute from "./PublicRoute";
import { PATH } from "../../constances/GUIConstance";
import CustomAppBar from "../../modules/app_bar/CustomAppBar";
import { ThemeProvider, createTheme } from "@mui/material";


const theme = createTheme({
    palette: {
        background: {
            main: '#eeeeee'
        },

        button: {
            main: '#00adb5',
            contrastText: '#ffffff'
        },

        text: {
            main: '#00adb5'
        }
    }
})
export const CustomRouter = createBrowserRouter(
    createRoutesFromElements(
        [
            <Route
                path = {PATH.AUTHENTICATION}
                loader = {
                    async (props) => {
                        Logging.info('GUI Login', JSON.stringify(props));
                        return props;
                    }
                }
                element = {
                    <PublicRoute path = {PATH.AUTHENTICATION}>
                        <ThemeProvider theme = {theme}>
                            <GUILogin/>
                        </ThemeProvider>
                    </PublicRoute>
                }
            />,

            <Route
                path = "/*"
                loader = {
                    async (props) => {
                        return props;
                    }
                }
                element = {
                    <PrivateRoute path = {PATH.HOME}>
                        <ThemeProvider theme={theme}>
                            <React.Fragment>
                                <CustomAppBar/>
                                <React.Fragment>
                                    <Routes>
                                        <Route path = {PATH.HOME} element = {<GUIHome/>}/>
                                    </Routes>
                                </React.Fragment>
                            </React.Fragment>
                        </ThemeProvider>
                    </PrivateRoute>
                }
            />
        ]
    )
);

export default CustomRouter;