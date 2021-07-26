import { Div } from "../../../containers";
import { Label, Span } from "../../../text";
import { Input } from "../../input/input.style";
import { FormGroupDiv } from "./types/formGroup.style";

export const FormGroup = (props) => {
  return (
    <>
      {props.animateText ? (
        <FormGroupDiv {...props} className="formGroup">
          <Input {...props.input} className="formGroup__input" />
          <Label {...props.label} className="formGroup__label">
            <Span className="formGroup__text">{props.text}</Span>
          </Label>
        </FormGroupDiv>
      ) : (
        <FormGroupDiv {...props} className="formGroup">
          <Label {...props.label} className="formGroup__label">
            {props.text}
          </Label>
          <Input {...props.input} className="formGroup__input" />
        </FormGroupDiv>
      )}
    </>
  );
};
