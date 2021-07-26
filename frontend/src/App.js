import { Link } from "react-router-dom";
import "./App.css";
import {
  Header,
  Div,
  Nav,
  Main,
  Footer,
  Li,
  Section,
  Aside,
  Img,
  Span,
  Ul,
  Container,
  H1,
} from "./styledComponents";
import {
  Btn,
  Btn2,
} from "./styledComponents/elements/components/button/types/button.style";
import Pic from "./assets/images/Penguins.jpg";
import { Button } from "./styledComponents/elements/components/button/button.style";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import { Input } from "./styledComponents/elements/components/input/input.style";
import { FormGroup } from "./styledComponents";

const App = () => {
  return (
    <>
      <Header relative t50px lXs100px colWhite>
        <Container h40vh wXs50 bgMain row rowMdW columnSmNAC>
          <Div orderTab1 h40 bgSecondary>
            Logo
          </Div>
          <Nav orderTab3 h40 bgSecondary fsh4 fs="1.7">
            <Span>Home</Span>
            <Span>About</Span>
            <Span>Services</Span>
            <Span>Careers</Span>
          </Nav>
          <Div shrink2 orderTab2 h40 bgSecondary>
            test
          </Div>
        </Container>
        <Div p20px p30px w300px>
          <FormGroup
            text="Full Name"
            normal
            animateText
            input={{ type: "text", required: true }}
          />
          <FormGroup text="Email" normal type="email" />
        </Div>
      </Header>
    </>
  );
};

export default App;
