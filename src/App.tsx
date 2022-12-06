import { FC, useEffect } from 'react';
import { useLocalStorage } from './hooks';
import { ThemeProvider } from 'styled-components';
import { CreateForm, ClearPopup, SwitchTheme, Note } from './components';
import { INote } from './types';
import { lightTheme, darkTheme, GlobalStyle, Container } from './styles';

const App: FC = () => {
    const [darkMode, setDarkMode] = useLocalStorage<boolean>('darkMode', true);
    const [notes, setNotes] = useLocalStorage<INote[]>('notes', []);

    useEffect(() => document.body.classList.remove('initialTransition'), []);

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
