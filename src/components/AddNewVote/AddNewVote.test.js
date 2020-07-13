import React from 'react';
import AddNewVote from './AddNewVote';
import {
  cleanup,
  render,
  fireEvent
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

describe('AddNewVote component', () => {
  it('should be render', () => {
    render(
      <AddNewVote />,
    );
  });

  it('should be render with title and link placeholders', () => {
    const { getByTestId } = render(
      <AddNewVote />
    );
    const userTitle = getByTestId('userTitle')
    fireEvent.change(userTitle, {
      target: {
        value: 'aa',
      },
    });

    expect(userTitle.value).toBe("aa");

    const userLink = getByTestId('userLink')
    fireEvent.change(userLink, {
      target: {
        value: 'aa',
      },
    });

    expect(userLink.value).toBe("aa");
  });
});