import React from "react";
import Container from "@material-ui/core/Container";

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div>
      <Container maxWidth="md" component="main">
        {children}
      </Container>
    </div>
  );
};

export default Layout;
