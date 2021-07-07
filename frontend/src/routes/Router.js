import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LoginPage } from "../pages/loginPage/Login";
import { SignupPage } from "../pages/signupPage/Signup";
import { CreateImagePage } from "../pages/createImagePage/CreateImagePage";
import { AllImagesPage } from "../pages/allImagesPage/AllImagesPage";
import { ImageDetailsPage } from "../pages/ImageDetailsPage/ImageDetailsPage";

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path ="/">
                    <LoginPage />
                </Route>

                <Route exact path ="/signup">
                    <SignupPage />
                </Route>

                <Route exact path ="/create">
                    <CreateImagePage />
                </Route>

                <Route exact path ="/images">
                    <AllImagesPage />
                </Route>

                <Route exact path ="/images/:id">
                    <ImageDetailsPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}