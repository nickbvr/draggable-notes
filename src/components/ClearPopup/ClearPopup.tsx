import { FC, useState, memo, MouseEvent } from 'react';
import { INote } from '../../types';
import { Button } from '../../styles';
import { ClearPopupContainer, PopUp } from './ClearPopup.styles';

interface ClearPopupProps {
    notes: INote[];
    setNotes: (notes: INote[]) => void;
}

const ClearPopup: FC<ClearPopupProps> = memo(({ notes, setNotes }) => {
    const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null);

    const handleClear = () => {
        setAnchor(null);
        setNotes([]);
    };

    const handleClose = (e?: MouseEvent<HTMLButtonElement>) => {
        e ? setAnchor(e.currentTarget) : setAnchor(null);
    };

    return (
        <ClearPopupContainer>
            <Button disabled={!notes.length} onClick={handleClose}>
                Clear
            </Button>
            <PopUp
                open={!!anchor}
                anchorEl={anchor}
                onClose={() => handleClose()}
                PaperProps={{
                    sx: {
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                        marginTop: '15px',
                    },
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}>
                <div>
                    <p>Are you sure?</p>
                    <div>
                        <Button onClick={handleClear}>Yes</Button>
                        <Button onClick={() => handleClose()}>No</Button>
                    </div>
                </div>
            </PopUp>
        </ClearPopupContainer>
    );
});

export default ClearPopup;
