import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

test('Teste se a página contém um heading h2 com o texto "Encountered pokémons"',
  () => {
    const { history } = renderWithRouter(<App />);

    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink).toBeInTheDocument();
    userEvent.click(homeLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/');

    const homeTitle = screen.getByText('Encountered pokémons');
    expect(homeTitle).toBeInTheDocument();
  });

test('Teste se é exibido o botão "Próximo pokémon"',
  () => {
    const { history } = renderWithRouter(<App />);

    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink).toBeInTheDocument();
    userEvent.click(homeLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/');

    const buttonNext = screen.getByRole('button', { name: 'Próximo pokémon' });
    expect(buttonNext).toBeInTheDocument();
  });

test('Teste se a Pokédex tem os botões de filtro', () => {
  const { history } = renderWithRouter(<App />);

  const homeLink = screen.getByRole('link', { name: 'Home' });
  expect(homeLink).toBeInTheDocument();
  userEvent.click(homeLink);

  const { pathname } = history.location;
  expect(pathname).toBe('/');

  const buttonNext = screen.getByRole('button', { name: 'Fire' });
  expect(buttonNext).toBeInTheDocument();

  const dataTest = screen.getAllByTestId('pokemon-type-button');
  expect(dataTest).toHaveLength(7);
});

test('Teste se a Pokédex contém um botão para resetar o filtro', () => {
  const { history } = renderWithRouter(<App />);

  const homeLink = screen.getByRole('link', { name: 'Home' });
  expect(homeLink).toBeInTheDocument();
  userEvent.click(homeLink);

  const { pathname } = history.location;
  expect(pathname).toBe('/');

  const buttonAll = screen.getByRole('button', { name: 'All' });
  expect(buttonAll).toBeInTheDocument();

  const filterPokemons = jest.fn().mockReturnValue('All');
  userEvent.click(buttonAll);
  filterPokemons();

  expect(filterPokemons()).toBe('All');
});
