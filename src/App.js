import { BrowserRouter } from "react-router-dom";
/*componentes */
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import Container from "./components/layout/Container/Container";
import Message from "./components/layout/Message/Message";
/* context */
import { AuthenticatedRoutes } from "./routes/Authenticated";
import { UnhatenticatedRoutes } from "./routes/Unhatenticated";
import { useConsumeAuth } from "./context/UserContext";

function App() {
  const { authenticated } = useConsumeAuth();

  return (
    <BrowserRouter>
      <Container>
        {true ? (
          <>
            <Message />
            <Navbar />
            <AuthenticatedRoutes />
            <Footer />
          </>
        ) : (
          <UnhatenticatedRoutes />
        )}
      </Container>
    </BrowserRouter>
  );
}

export default App;
