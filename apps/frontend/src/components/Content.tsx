import React, {PropsWithChildren} from 'react';

export interface ContentProps {}

const Content = (props: PropsWithChildren<ContentProps>) => {
  return (
    <main>
      <div>{props.children}</div>
    </main>
  );
};

export default Content;
