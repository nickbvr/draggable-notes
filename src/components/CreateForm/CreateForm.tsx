import { ChangeEvent, FC, memo, useState } from 'react';
import { getToDo, onKeyEnter } from '../../utils';
import { Todo } from '../../types';
import { Input, Button } from '../../styles';
import { CreateFormContainer } from './CreateForm.styles';

interface CreateFormProps {
    todos: Todo[];
    setTodos: (todos: Todo[]) => void;
}

const CreateForm: FC<CreateFormProps> = memo(({ todos, setTodos }) => {
    const [value, setValue] = useState('');

    const handleAdd = () => {
        value.trim() && setTodos([...todos, getToDo(value)]);
        setValue('');
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <CreateFormContainer>
            <Input
                value={value}
                placeholder='Type something...'
                onChange={handleChange}
                onKeyPress={(e) => onKeyEnter(handleAdd, e)}
            />
            <Button disabled={!value.trim()} onClick={handleAdd}>
                Add
            </Button>
        </CreateFormContainer>
    );
});

export default CreateForm;
