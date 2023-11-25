import Clipboard from "../../assets/Clipboard.svg";

import { Wrapper } from "./styles";

export function NoTasksRegistered(){
  return(
    <Wrapper>
      <img src={Clipboard} alt="Icone de Clipboard"/>
      
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </Wrapper>
  );
}