import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { CreateForm, ClearPopup, SwitchTheme, ToDo } from './components';
import { lightTheme, darkTheme, GlobalStyle, Container } from './styles';

const App = () => {
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) || false);
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || []);

    useEffect(() => {
        document.body.classList.remove('initialTransition');
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
        localStorage.setItem('items', JSON.stringify(items));
    }, [items, darkMode]);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <GlobalStyle />
            <Container>
                <CreateForm items={items} setItems={setItems} />
                <ToDo items={items} setItems={setItems} />
                <ClearPopup items={items} setItems={setItems} />
                <SwitchTheme darkMode={darkMode} setDarkMode={setDarkMode} />
            </Container>
        </ThemeProvider>
    );
};

export default App;
