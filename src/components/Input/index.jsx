import { Wrapper } from "./styles";

export function Input({ ...rest }){
  return(
    <Wrapper>
      <input {...rest} />
    </Wrapper>
  );
}