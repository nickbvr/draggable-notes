import { useState, useEffect, useRef, useCallback, memo, FC, ChangeEvent, MouseEvent } from 'react';
import { MdMode, MdDelete } from 'react-icons/md';
import Draggable, { DraggableEvent } from 'react-draggable';
import { onKeyEnter } from '../../utils';
import { Todo } from '../../types';
import { Button } from '../../styles';
import { ToDoWrapper, ToDoContainer, ToDoValue, EditInput, SaveButton, PopUp } from './ToDo.styles';

interface ToDoProps {
    todos: Todo[];
    setTodos: (todos: Todo[]) => void;
}

const ToDo: FC<ToDoProps> = memo(({ todos, setTodos }) => {
    const [editMode, setEditMode] = useState(false);
    const [activeTodo, setActiveTodo] = useState('');
    const [localValue, setLocalValue] = useState('');
    const [removeId, setRemoveId] = useState('');
    const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null);
    const ref = useRef<{ [key: string]: any }>([]);

    useEffect(() => {
        const onCloseOutside = (e: Event) => {
            !e.composedPath().includes(ref.current[activeTodo]) && setEditMode(false);
        };
        document.body.addEventListener('click', onCloseOutside);

        return () => document.body.removeEventListener('click', onCloseOutside);
    }, [activeTodo]);

    const onEditMode = useCallback(
        (id: string, value: string) => () => {
            setActiveTodo(id);
            setLocalValue(value);
            setEditMode(true);
        },
        [],
    );

    const handleUpdatePosition = useCallback(
        (todoId: string) =>
            (_: DraggableEvent, { x, y }: { x: number; y: number }) => {
                todos.find(({ id }) => id === todoId)!.defaultPos = { x, y };
                setTodos([...todos]);
            },
        [todos, setTodos],
    );

    const handleUpdateValue = (todoId?: string) => {
        todos.find(({ id }) => id === todoId)!.value = localValue.trim();
        setTodos([...todos]);
        setEditMode(false);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalValue(e.target.value);
    };

    const onRemoveItem = useCallback(
        (id: string) => (e: MouseEvent<HTMLButtonElement>) => {
            setAnchor(e.currentTarget);
            setRemoveId(id);
        },
        [],
    );

    const handleRemove = () => {
        setAnchor(null);
        setTodos(todos.filter(({ id }) => id !== removeId));
    };

    const handleClose = () => setAnchor(null);

    return (
        <ToDoWrapper>
            {todos.map(({ id, value, color, defaultPos }) => {
                return (
                    <Draggable
                        key={id}
                        defaultPosition={defaultPos}
                        bounds='parent'
                        onStop={handleUpdatePosition(id)}>
                        <ToDoContainer
                            style={{ backgroundColor: color }}
                            ref={(el) => {
                                ref.current[id] = el;
                            }}>
                            {activeTodo === id && editMode ? (
                                <>
                                    <EditInput>
                                        <input
                                            value={localValue}
                                            onChange={handleChange}
                                            onKeyPress={(e) => onKeyEnter(handleUpdateValue, e, id)}
                                            autoFocus
                                        />
                                    </EditInput>
                                    <SaveButton
                                        onClick={() => handleUpdateValue(id)}
                                        onTouchStart={() => handleUpdateValue(id)}>
                                        Save
                                    </SaveButton>
                                </>
                            ) : (
                                <>
                                    <ToDoValue>{value}</ToDoValue>
                                    <MdMode
                                        onClick={onEditMode(id, value)}
                                        onTouchStart={onEditMode(id, value)}
                                    />
                                    <MdDelete
                                        style={{ marginRight: '5px' }}
                                        onClick={onRemoveItem(id) as never}
                                        onTouchStart={onRemoveItem(id) as never}
                                    />
                                </>
                            )}
                        </ToDoContainer>
                    </Draggable>
                );
            })}
            <PopUp
                open={!!anchor}
                anchorEl={anchor}
                onClose={handleClose}
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
                    <Button onClick={handleClose}>No</Button>
                </div>
            </PopUp>
        </ToDoWrapper>
    );
});

export default ToDo;
