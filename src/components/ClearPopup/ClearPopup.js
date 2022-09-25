import { memo, useState } from 'react';
import { Button } from '../../styles';
import { ClearPopupContainer, PopUp } from './ClearPopup.styles';

const ClearPopup = memo(({ items, setItems }) => {
    const [anchorEl, setAnchorEl] = useState(false);

    const handleClear = () => {
        setAnchorEl(false);
        setItems([]);
    };

    return (
        <ClearPopupContainer>
            <Button disabled={!items.length} onClick={(e) => setAnchorEl(e.currentTarget)}>
                Clear
            </Button>
            <PopUp
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(false)}
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
                        <Button onClick={() => setAnchorEl(false)}>No</Button>
                    </div>
                </div>
            </PopUp>
        </ClearPopupContainer>
    );
});

export default ClearPopup;
