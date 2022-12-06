import { FC, useState, memo, ChangeEventHandler } from 'react';
import { INote } from '../../types';
import { Input, Button } from '../../styles';
import { CreateFormContainer } from './CreateForm.styles';
import { getNote, onKeyEnter } from '../../utils';

interface CreateFormProps {
    notes: INote[];
    setNotes: (notes: INote[]) => void;
}

const CreateForm: FC<CreateFormProps> = memo(({ notes, setNotes }) => {
    const [value, setValue] = useState<string>('');

    const handleAdd = () => {
        value.trim() && setNotes([...notes, getNote(value.trim())]);
        setValue('');
    };

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
    };

    return (
        <CreateFormContainer>
            <Input
                placeholder='Type something...'
                value={value}
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
