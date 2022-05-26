import * as React from 'react';

export const EuiFocusTrap = ({
                                 children,
                                 'data-test-subj': dataTestSubj,
                             }: any) => {
    return (
        <div data-eui="EuiFocusTrap" data-test-subj={dataTestSubj}>
            {children}
        </div>
    );
};