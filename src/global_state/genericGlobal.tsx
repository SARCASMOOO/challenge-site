import * as React from 'react';

const Pair = <L, R>(left: L, right: R): [L, R] => [left, right];

type ReactDispatcher<T> = React.Dispatch<React.SetStateAction<T>>;
type StateAndDispatcher<T> = [T, ReactDispatcher<T>];

function createGlobalState<T>(defaultValue: T) {
    const GlobalContext = React.createContext<StateAndDispatcher<T>>([defaultValue, (val) => {} ]);

    const Provider = <P extends {}>(Component: React.ComponentType<P>) => (props: P) => {
        const [value, setValue] = React.useState(defaultValue);

        return (
            <GlobalContext.Provider value={[value, setValue]}>
                <Component {...props} />
            </GlobalContext.Provider>
        );
    };

    return Pair(GlobalContext, Provider);
}

export default createGlobalState;