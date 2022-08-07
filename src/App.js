import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import CreateItem from './components/CreateItem';
import NewItems from './components/NewItem';
import ClearItems from './components/ClearItems';
import Switch from './components/Switch';
import GlobalStyle, { Container } from './styles/Global.styles';
import { lightTheme, darkTheme } from './styles/theme';

const App = () => {
    const [value, setValue] = useState('');
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) || false);
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('toDoItems')) || []);

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
        localStorage.setItem('toDoItems', JSON.stringify(items));
    }, [items, darkMode]);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <GlobalStyle />
            <Container>
                <CreateItem value={value} setValue={setValue} items={items} setItems={setItems} />
                <NewItems items={items} setItems={setItems} />
                <ClearItems items={items} setItems={setItems} />
                <Switch darkMode={darkMode} setDarkMode={setDarkMode} />
            </Container>
        </ThemeProvider>
    );
};

export default App;
