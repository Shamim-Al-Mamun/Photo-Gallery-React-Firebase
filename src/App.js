import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <Container>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Title />
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <UploadForm />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <ImageGrid setSelectedImg={setSelectedImg} />
            {selectedImg && (
              <Modal
                selectedImg={selectedImg}
                setSelectedImg={setSelectedImg}
              />
            )}
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
