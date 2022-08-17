import { memo, useState } from 'react';
import { setNewItem } from '../utils/newItem';
import { onKeyEnter } from '../utils/onKeyEnter';
import { Input, Button } from '../../styles/Global.styles';
import { CreateItemContainer, ErrorMessage } from './CreateItem.styles';

const CreateItem = memo(({ setItems, items }) => {
    const [value, setValue] = useState('');
    const [valueError, setValueError] = useState('Value cannot be empty');
    const [valueTouch, setValueTouch] = useState(false);

    const handleAdd = () => {
        value.trim() && setItems([...items, setNewItem(value)]);
        setValue('');
    };
    const onChangeValue = (e) => {
        setValue(e.target.value);
        e.target.value.length && !e.target.value.trim()
            ? setValueError('Content cannot contain only spaces')
            : setValueError('');
    };

    return (
        <CreateItemContainer>
            <Input
                onBlur={() => setValueTouch(true)}
                value={value}
                onChange={onChangeValue}
                onKeyPress={(e) => onKeyEnter(handleAdd, e)}
                placeholder='Type something...'
            />
            <Button disabled={!value.trim()} onClick={handleAdd}>
                Add
            </Button>
            {valueTouch && valueError && <ErrorMessage>{valueError}</ErrorMessage>}
        </CreateItemContainer>
    );
});

export default CreateItem;
