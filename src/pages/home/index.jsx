import { useEffect, useState } from "react";
import { FiPlusCircle } from "react-icons/fi";

import { TaskCard } from "../../components/TaskCard";
import { NoTasksRegistered } from "../../components/NoTasksRegistered";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import logo  from "../../assets/Logo.svg";

import {
  SectionMain,
  Completed,
  CreatedTasks,
  SectionHeader,
  Section,
  TaskBox,
  Container,
  Wrapper
} from "./styles";

export function Home(){
  const getTasksLocalStorage = () => {
    let list = localStorage.getItem("@TodoList:TaskList");

    if (list){
      return JSON.parse(localStorage.getItem("@TodoList:TaskList"));
    } else{
      return [];
    }
  };

  const [id, setId] = useState(0);
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState(getTasksLocalStorage());

  const handleCheckboxChange = (id) => {
    const updatedCheckboxes = taskList.map((checkbox) =>
      checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
    );

    setTaskList(updatedCheckboxes);
  };

  const CreateTask = (task) => {
    if(task === ""){
      return alert('Por favor, digite uma nova tarefa!');
    };

    const TaskObj = {
      id: id,
      checked: false,
      content: task
    };
    setId(id + 1);
    handleTaskAdd(TaskObj);
  };

  const handleTaskAdd = (task) => {
    setTaskList([...taskList, task]);
    setTask("");
  };

  const handleTaskDelete = (taskDeleted) => {
    setTaskList(prevState => prevState.filter(task => task !== taskDeleted));
  };

  const checkedCount = taskList.filter((task) => task.checked).length;

  useEffect(() => {
    localStorage.setItem("@TodoList:TaskList", JSON.stringify(taskList));
  }, [taskList]);

  return(
    <Wrapper>
      <Container>
        <img src={logo} alt="logo" />

        <TaskBox>
          <Input
            value={task}
            placeholder="Adicione uma nova tarefa"
            onChange={e => setTask(e.target.value)}
          />

          <Button
            title="Criar"
            icon={FiPlusCircle}
            onClick={() => CreateTask(task)}
          />
        </TaskBox>

        <Section>
          <SectionHeader>
            <CreatedTasks>
              <strong>Tarefas criadas</strong>
              <span>{taskList.length}</span>
            </CreatedTasks>
            
            <Completed>
              <strong>Concluídas</strong>
              <span>
                {taskList.length === 0 ?
                  `0` : `${checkedCount} de ${taskList.length}`
                }
              </span>
            </Completed>
          </SectionHeader>

          <SectionMain>
            {
              taskList.length > 0 ? (
                taskList.map(task => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    handleCheckboxChange={() => handleCheckboxChange(task.id)}
                    handleTaskDelete={() => handleTaskDelete(task)}
                  />
                ))
              ):
              <NoTasksRegistered />
            }
          </SectionMain>
        </Section>
      </Container>
    </Wrapper>
  );
}