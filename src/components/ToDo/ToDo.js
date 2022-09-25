import { useState, useEffect, useRef, memo } from 'react';
import { MdMode, MdDelete } from 'react-icons/md';
import Draggable from 'react-draggable';
import { onKeyEnter } from '../../utils';
import { Button } from '../../styles';
import { ToDoWrapper, ToDoContainer, ToDoValue, EditInput, SaveButton, PopUp } from './ToDo.styles';

const ToDo = memo(({ items, setItems }) => {
    const [editMode, setEditMode] = useState(false);
    const [editItem, setEditItem] = useState('');
    const [value, setValue] = useState('');
    const [removeId, setRemoveId] = useState('');
    const [anchorEl, setAnchorEl] = useState(false);
    const ref = useRef([]);

    useEffect(() => {
        const onCloseOutside = (e) =>
            !e.composedPath().includes(ref.current[editItem]) && setEditMode(false);
        document.body.addEventListener('click', onCloseOutside);

        return () => document.body.removeEventListener('click', onCloseOutside);
    }, [editItem]);

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

    const handleUpdateValue = (i) => {
        setEditMode(!editMode);
        const newArr = [...items];
        newArr[i].value = value.trim();
        setItems(newArr);
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const onRemoveItem = (target, id) => {
        setAnchorEl(target);
        setRemoveId(id);
    };

    const handleRemove = () => {
        setAnchorEl(false);
        setItems(items.filter((el) => el.id !== removeId));
    };
    return (
        <ToDoWrapper>
            {items.map((el, i) => {
                return (
                    <Draggable
                        key={el.id}
                        defaultPosition={el.defaultPos}
                        bounds='parent'
                        onStop={(_, data) => updatePosition(data, i)}>
                        <ToDoContainer
                            style={{ backgroundColor: el.color }}
                            ref={(element) => {
                                ref.current[el.id] = element;
                            }}>
                            {editItem === el.id && editMode ? (
                                <>
                                    <EditInput>
                                        <input
                                            value={value}
                                            onChange={handleChange}
                                            onKeyPress={(e) => onKeyEnter(handleUpdateValue, e, i)}
                                            autoFocus
                                        />
                                    </EditInput>
                                    <SaveButton
                                        onClick={() => handleUpdateValue(i)}
                                        onTouchStart={() => handleUpdateValue(i)}>
                                        Save
                                    </SaveButton>
                                </>
                            ) : (
                                <>
                                    <ToDoValue>{el.value}</ToDoValue>
                                    <MdMode
                                        onClick={() => onEditMode(el.id, el.value)}
                                        onTouchStart={() => onEditMode(el.id, el.value)}
                                    />
                                    <MdDelete
                                        style={{ marginRight: '5px' }}
                                        onClick={(e) => onRemoveItem(e.currentTarget, el.id)}
                                        onTouchStart={(e) => onRemoveItem(e.currentTarget, el.id)}
                                    />
                                </>
                            )}
                        </ToDoContainer>
                    </Draggable>
                );
            })}
            <PopUp
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(false)}
                PaperProps={{
                    sx: {
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                    },
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}>
                <div>
                    <Button onClick={handleRemove}>Yes</Button>
                    <Button onClick={() => setAnchorEl(false)}>No</Button>
                </div>
            </PopUp>
        </ToDoWrapper>
    );
});

export default ToDo;
