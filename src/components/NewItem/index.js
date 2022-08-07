import { useState, memo } from 'react';
import Draggable from 'react-draggable';
import { MdMode, MdDelete } from 'react-icons/md';
import { NewItemWrapper, NewItemContainer, NewItemValue, EditInput } from './NewItem.styles';

const NewItem = memo(({ items, setItems }) => {
    const [editMode, setEditMode] = useState(false);
    const [editItem, setEditItem] = useState('');
    const [value, setValue] = useState('');

    const onEditMode = (id, value) => {
        setEditItem(id);
        setValue(value);
        setEditMode(!editMode);
    };

    const updatePosition = (data, i) => {
        const newArr = [...items];
        newArr[i].defaultPos = { x: data.x, y: data.y };
        setItems(newArr);
    };

    const handleUpdateValue = () => {
        setEditMode(!editMode);
        const findItem = items.find((el) => el.id === editItem);
        findItem.value = value;
    };

    const handleChangeValue = (e) => {
        setValue(e.target.value);
    };

    const handleRemove = (id) => {
        setItems(items.filter((el) => el.id !== id));
    };

    return (
        <NewItemWrapper>
            {items.map((el, i) => {
                return (
                    <Draggable
                        key={el.id}
                        defaultPosition={el.defaultPos}
                        onStop={(_, data) => updatePosition(data, i)}>
                        <NewItemContainer style={{ backgroundColor: el.color }}>
                            {editItem === el.id && editMode ? (
                                <EditInput>
                                    <input
                                        value={value}
                                        onChange={handleChangeValue}
                                        onBlur={handleUpdateValue}
                                        autoFocus
                                    />
                                </EditInput>
                            ) : (
                                <NewItemValue>{el.value}</NewItemValue>
                            )}
                            <MdMode onClick={() => onEditMode(el.id, el.value)} />
                            <MdDelete onClick={() => handleRemove(el.id)} />
                        </NewItemContainer>
                    </Draggable>
                );
            })}
        </NewItemWrapper>
    );
});

export default NewItem;
