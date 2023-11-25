import { Wrapper } from "./styles";

export function Button({ icon: Icon, title, ...rest}){
  return(
    <Wrapper
      type="button"
      {...rest}
    >
      <span>
        { title }
      </span>

      {Icon && <Icon size={16} />}
    </Wrapper>
  );
}