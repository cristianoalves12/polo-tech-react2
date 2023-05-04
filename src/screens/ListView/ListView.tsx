import Checkbox from "../../components/Checkbox";
import { ListContainer, TodoListContainer, TodoListItem } from "./ListView.styles"
import { ITaskState } from "./ListView.types"

const ListView = () => {
    const tasks: ITaskState[] = [
        {id: "1", label: 'Primeira Task', isComplete: false},
    ]
    
    return (
        <ListContainer>
            <TodoListContainer>
                    {tasks.map((eachTask) => (
                        <TodoListItem>
                            <Checkbox checked={eachTask.isComplete} />
                            {eachTask.label}
                        </TodoListItem>
                    ))}
            </TodoListContainer>
        </ListContainer>
    );
}

export default ListView;