import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  // SignIn,
  // SignUp,
  UserButton,
} from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import './App.css'
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import LogIn from "./Auth/SignIn";
import Register from "./Auth/SignUp";

const REACT_APP_CLERK_PUBLISHABLE_KEY='pk_test_aGFybWxlc3MtbW9ua2V5LTc4LmNsZXJrLmFjY291bnRzLmRldiQ'


if (!REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const clerkPubKey = REACT_APP_CLERK_PUBLISHABLE_KEY;





function ClerkProviderWithRoutes() {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      navigate={(to) => navigate(to)}
    >
      <Routes>
        {/* <Route path="/" element={<PublicPage />} /> */}
        <Route
          path="/sign-in/*"
          element={<LogIn routing="path" path="/sign-in" />}
        />
        <Route
          path="/sign-up/*"
          element={<Register routing="path" path="/sign-up" />}
        />
        <Route
          path="/"
          element={
          <>
            <SignedIn>
              <Home />
            </SignedIn>
             <SignedOut>
              <RedirectToSignIn />
           </SignedOut>
          </>
          }
        />
      </Routes>
    </ClerkProvider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
  );
}

export default App;