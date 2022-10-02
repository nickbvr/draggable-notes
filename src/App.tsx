import { FC, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { CreateForm, ClearPopup, SwitchTheme, ToDo } from './components';
import { Todo } from './types';
import { lightTheme, darkTheme, GlobalStyle, Container } from './styles';

const App: FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(
        JSON.parse(localStorage.getItem('darkMode') as string) || false,
    );
    const [todos, setTodos] = useState<Todo[]>(
        JSON.parse(localStorage.getItem('todos') as string) || [],
    );

    useEffect(() => {
        document.body.classList.remove('initialTransition');
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos, darkMode]);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <GlobalStyle />
            <Container>
                <CreateForm todos={todos} setTodos={setTodos} />
                <ToDo todos={todos} setTodos={setTodos} />
                <ClearPopup todos={todos} setTodos={setTodos} />
                <SwitchTheme darkMode={darkMode} setDarkMode={setDarkMode} />
            </Container>
        </ThemeProvider>
    );
};

export default App;
