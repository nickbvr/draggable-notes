import { memo } from 'react';
import { v4 } from 'uuid';
import randomColor from 'randomcolor';
import { Input, Button } from '../../styles/Global.styles';
import { CreateItemContainer } from './CreateItem.styles';

const CreateItem = memo(({ value, setValue, setItems, items }) => {
    const getRandomNumber = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    };

    const newItem = {
        id: v4(),
        value,
        color: randomColor({
            luminosity: 'light',
        }),
        defaultPos: {
            x: getRandomNumber(-400, 400),
            y: getRandomNumber(-250, 250),
        },
    };

    const onKeyEnter = (e) => {
        if (e.key === 'Enter') {
            handleAdd();
        }
    };

    const handleAdd = () => {
        if (value.trim() !== '') {
            setItems([...items, newItem]);
            setValue('');
        } else {
            setValue('');
        }
    };

    return (
        <CreateItemContainer>
            <Input
                onChange={(e) => setValue(e.target.value)}
                onKeyPress={(e) => onKeyEnter(e)}
                value={value}
                placeholder='Type something...'
            />
            <Button onClick={handleAdd}>Add</Button>
        </CreateItemContainer>
    );
});

export default CreateItem;
