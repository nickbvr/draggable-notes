import { FC, useState, useRef, useCallback, memo, ChangeEvent, MouseEvent } from 'react';
import { useClickOutside } from '../../hooks';
import Draggable, { DraggableEvent } from 'react-draggable';
import { MdMode, MdDelete } from 'react-icons/md';
import { onKeyEnter } from '../../utils';
import { INote } from '../../types';
import { Button } from '../../styles';
import { NoteWrapper, NoteContainer, NoteValue, EditInput, SaveButton, PopUp } from './Note.styles';

interface NoteProps {
    notes: INote[];
    setNotes: (notes: INote[]) => void;
}

const Note: FC<NoteProps> = memo(({ notes, setNotes }) => {
    const [editMode, setEditMode] = useState<boolean>();
    const [activeNote, setActiveNote] = useState<number>();
    const [localValue, setLocalValue] = useState<string>();
    const [removeId, setRemoveId] = useState<number>();
    const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null);
    const ref = useRef<{ [key: string]: HTMLDivElement | null }>({});

    useClickOutside(ref, activeNote, () => {
        setEditMode(false);
    });

    const onEditMode = useCallback(
        (id: number, value: string) => () => {
            setActiveNote(id);
            setLocalValue(value);
            setEditMode(true);
        },
        [],
    );

    const handleUpdatePosition = useCallback(
        (noteId: number) =>
            (_: DraggableEvent, { x, y }: { x: number; y: number }) => {
                notes.find(({ id }) => id === noteId)!.position = { x, y };
                setNotes([...notes]);
            },
        [notes, setNotes],
    );

    const handleUpdateValue = (noteId?: number) => {
        notes.find(({ id }) => id === noteId)!.text = localValue!.trim();
        setNotes([...notes]);
        setEditMode(false);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalValue(e.target.value);
    };

    const onRemoveItem = useCallback(
        (id: number) => (e: MouseEvent<HTMLButtonElement>) => {
            setAnchor(e.currentTarget);
            setRemoveId(id);
        },
        [],
    );

    const handleRemove = () => {
        setAnchor(null);
        setNotes(notes.filter(({ id }) => id !== removeId));
    };

    const handleClose = () => setAnchor(null);

    return (
        <NoteWrapper>
            {notes.map(({ id, text, color, position }) => {
                return (
                    <Draggable
                        key={id}
                        defaultPosition={position}
                        bounds='parent'
                        onStop={handleUpdatePosition(id)}>
                        <NoteContainer
                            style={{ backgroundColor: color }}
                            ref={(el) => (ref.current[id] = el)}>
                            {activeNote === id && editMode ? (
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
                                    <NoteValue>{text}</NoteValue>
                                    <MdMode
                                        onClick={onEditMode(id, text)}
                                        onTouchStart={onEditMode(id, text)}
                                    />
                                    <MdDelete
                                        style={{ marginRight: '5px' }}
                                        onClick={onRemoveItem(id) as never}
                                        onTouchStart={onRemoveItem(id) as never}
                                    />
                                </>
                            )}
                        </NoteContainer>
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
        </NoteWrapper>
    );
});

export default Note;
