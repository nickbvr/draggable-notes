import { memo, useEffect, useRef, useState } from 'react';
import { Button } from '../../styles/Global.styles';
import { ClearPopupContainer } from './ClearItems.styles';

const ClearItems = memo(({ items, setItems }) => {
    const [popUp, setPopUp] = useState(false);
    const popUpRef = useRef();

    const handleClear = () => {
        setPopUp(false);
        setItems([]);
    };

    useEffect(() => {
        const onCloseOutside = (e) => {
            !e.composedPath().includes(popUpRef.current) && setPopUp(false);
        };
        document.body.addEventListener('click', onCloseOutside);
    }, []);

    return (
        <ClearPopupContainer ref={popUpRef}>
            <Button disabled={!items.length} onClick={() => setPopUp(!popUp)}>
                Clear
            </Button>
            {popUp && (
                <div>
                    <p>Are you sure?</p>
                    <div>
                        <Button onClick={handleClear}>Yes</Button>
                        <Button onClick={() => setPopUp(false)}>No</Button>
                    </div>
                </div>
            )}
        </ClearPopupContainer>
    );
});

export default ClearItems;
