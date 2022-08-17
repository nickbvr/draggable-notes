import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import CreateItem from './components/CreateItem';
import NewItems from './components/NewItems';
import ClearItems from './components/ClearItems';
import Switch from './components/Switch';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyle, Container } from './styles/Global.styles';

const App = () => {
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) || false);
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || []);

    useEffect(() => {
        document.body.classList.remove('preloader');
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
        localStorage.setItem('items', JSON.stringify(items));
    }, [items, darkMode]);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <GlobalStyle />
            <Container>
                <CreateItem items={items} setItems={setItems} />
                <NewItems items={items} setItems={setItems} />
                <ClearItems items={items} setItems={setItems} />
                <Switch darkMode={darkMode} setDarkMode={setDarkMode} />
            </Container>
        </ThemeProvider>
    );
};

export default App;
