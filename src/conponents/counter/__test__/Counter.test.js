import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../Counter';

test('displaying text: Counter', () => {
  const component = render(<Counter />);
  const aboutAnchorNode = screen.getByText('Counter');
  expect(aboutAnchorNode.textContent).toBe('Counter');
});

test('render counter with value 0', () => {
  const { getByText } = render(<Counter />);
  const value = getByText('total value: 0');
  expect(value.textContent).toBe('total value: 0');
});

test('initial value of input is 1 ', () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = getByTestId('inputEl');
  expect(inputEl.value).toBe('1');
});

test('add button renders with + value', () => {
  const { getByText } = render(<Counter />);
  const addButtonEl = getByText('+');
  expect(addButtonEl.textContent).toBe('+');
});

test('minus button to be with text - 1', () => {
  const { getByText } = render(<Counter />);
  const minusButtonEl = getByText('-');
  expect(minusButtonEl.textContent).toBe('-');
});

test('change value of input', () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = getByTestId('inputEl');

  expect(inputEl.value).toBe('1');

  fireEvent.change(inputEl, {
    target: {
      value: '5',
    },
  });
  expect(inputEl.value).toBe('5');
});

test('when click add button, value get incremented', () => {
  const { getByText } = render(<Counter />);
  const value = getByText('total value: 0');
  const addButtonEl = getByText('+');
  expect(value.textContent).toBe('total value: 0');

  fireEvent.click(addButtonEl);

  expect(value.textContent).toBe('total value: 1');
});

test('when click minus button, value get decromented', () => {
  const { getByText } = render(<Counter />);
  const value = getByText('total value: 0');
  const minusBtnEl = getByText('-');
  expect(value.textContent).toBe('total value: 0');
  fireEvent.click(minusBtnEl);

  expect(value.textContent).toBe('total value: -1');

  fireEvent.click(minusBtnEl);

  expect(value.textContent).toBe('total value: -2');
});

test('add + 5 ', () => {
  const { getByText, getByTestId } = render(<Counter />);
  const value = getByText('total value: 0');
  const inputEl = getByTestId('inputEl');
  const addButtonEl = getByText('+');

  fireEvent.change(inputEl, {
    target: {
      value: '5',
    },
  });

  fireEvent.click(addButtonEl);

  expect(value.textContent).toBe('total value: 5');
});

test('minus - 35 ', () => {
  const { getByText, getByTestId } = render(<Counter />);
  const value = getByText('total value: 0');
  const inputEl = getByTestId('inputEl');
  const minusBtnEl = getByText('-');

  fireEvent.change(inputEl, {
    target: {
      value: '35',
    },
  });

  fireEvent.click(minusBtnEl);

  expect(value.textContent).toBe('total value: -35');
});

test('chek is color below 0 is red and more than ten blue and other black ', () => {
  const { getByText, getByTestId } = render(<Counter />);
  const value = getByText('total value: 0');
  const inputEl = getByTestId('inputEl');
  const minusBtnEl = getByText('-');
  const plusEl = getByText('+');

  fireEvent.change(inputEl, {
    target: {
      value: '35',
    },
  });

  fireEvent.click(minusBtnEl);
  expect(value.className).toBe('red');

  fireEvent.click(plusEl);
  expect(value.className).toBe('');

  fireEvent.click(plusEl);
  expect(value.className).toBe('blue');
});

test('mak sure all buttons are displayed on screen', () => {
  render(<Counter />);
  const add = screen.getByText('+');
  const minus = screen.getByText('-');

  const buttonArray = screen.getAllByRole('button');
  expect(buttonArray).toHaveLength(2);

  expect(minus).toBeInTheDocument();
  expect(add).toBeInTheDocument();
});

