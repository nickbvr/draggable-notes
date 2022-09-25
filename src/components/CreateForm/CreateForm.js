import { memo, useState } from 'react';
import { getToDo, onKeyEnter } from '../../utils';
import { Input, Button } from '../../styles';
import { CreateFormContainer, ErrorMessage } from './CreateForm.styles';

const CreateForm = memo(({ setItems, items }) => {
    const [value, setValue] = useState('');
    const [valueError, setValueError] = useState('Value cannot be empty');
    const [valueTouch, setValueTouch] = useState(false);

    const handleAdd = () => {
        value.trim() && setItems([...items, getToDo(value)]);
        setValue('');
    };
    const onChangeValue = (e) => {
        const targetValue = e.target.value;
        setValue(targetValue);
        targetValue.length && !targetValue.trim()
            ? setValueError('Content cannot contain only spaces')
            : setValueError('');
    };

    return (
        <CreateFormContainer>
            <Input
                value={value}
                placeholder='Type something...'
                onChange={onChangeValue}
                onBlur={() => setValueTouch(true)}
                onKeyPress={(e) => onKeyEnter(handleAdd, e)}
            />
            <Button disabled={!value.trim()} onClick={handleAdd}>
                Add
            </Button>
            {valueTouch && valueError && <ErrorMessage>{valueError}</ErrorMessage>}
        </CreateFormContainer>
    );
});

export default CreateForm;
