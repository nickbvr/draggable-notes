import { FC, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { CreateForm, ClearPopup, SwitchTheme, Note } from './components';
import { INote } from './types';
import { lightTheme, darkTheme, GlobalStyle, Container } from './styles';

const App: FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(
        JSON.parse(localStorage.getItem('darkMode') as string) || false,
    );
    const [notes, setNotes] = useState<INote[]>(
        JSON.parse(localStorage.getItem('notes') as string) || [],
    );

    useEffect(() => {
        document.body.classList.remove('initialTransition');
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes, darkMode]);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <GlobalStyle />
            <Container>
                <CreateForm notes={notes} setNotes={setNotes} />
                <Note notes={notes} setNotes={setNotes} />
                <ClearPopup notes={notes} setNotes={setNotes} />
                <SwitchTheme darkMode={darkMode} setDarkMode={setDarkMode} />
            </Container>
        </ThemeProvider>
    );
};

export default App;
