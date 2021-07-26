import { Btn } from "./types/button.style";

export const Button = (props) => {
  return (
    <>
      {props.animateTextIcon ? (
        <Btn {...props}>
          <span className="btn__container">
            <span className="btn__text">{props.children}</span>
            <span className="btn__icon">{props.animateTextIcon}</span>
          </span>
        </Btn>
      ) : props.textIcon ? (
        <Btn {...props}>
          <span className="btn__container">
            <span className="btn__text">{props.children}</span>
            <span className="btn__icon">{props.textIcon}</span>
          </span>
        </Btn>
      ) : props.icon ? (
        <Btn {...props}>
          <span className="btn__icon">{props.icon}</span>
        </Btn>
      ) : (
        <Btn {...props}>{props.children}</Btn>
      )}
    </>
  );
};
