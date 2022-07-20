import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

const linkName = 'More details';
const pathName = '/pokemons/25';

test('Teste se as informações detalhadas do pokémon selecionado são mostradas na tela',
  () => {
    const { history } = renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: linkName });
    expect(moreDetails).toBeInTheDocument();
    userEvent.click(moreDetails);

    const { pathname } = history.location;
    expect(pathname).toBe(pathName);

    const details = screen.getByText('Pikachu Details');
    expect(details).toBeInTheDocument();

    expect(moreDetails).not.toBeInTheDocument();

    const summary = screen.getByText('This intelligent Pokémon roasts hard berries',
      { exact: false });
    expect(summary).toBeInTheDocument();
  });

test('Teste se existe uma seção com os mapas contendo as localizações do pokémon',
  () => {
    const { history } = renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: linkName });
    expect(moreDetails).toBeInTheDocument();
    userEvent.click(moreDetails);

    const { pathname } = history.location;
    expect(pathname).toBe(pathName);

    const headingLocation = screen.getByRole(
      'heading', { name: 'Game Locations of Pikachu' },
    );
    expect(headingLocation).toBeInTheDocument();

    const summary = screen.getByRole(
      'heading', { name: 'Summary' },
    );
    expect(summary).toBeInTheDocument();

    const imgLocation = screen.getAllByRole(
      'img', { name: 'Pikachu location' },
    );
    expect(imgLocation[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(imgLocation[0]).toHaveAttribute('alt', 'Pikachu location');
  });

test('Teste se o usuário pode favoritar um pokémon através da página de detalhes',
  () => {
    const { history } = renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: linkName });
    expect(moreDetails).toBeInTheDocument();
    userEvent.click(moreDetails);

    const { pathname } = history.location;
    expect(pathname).toBe(pathName);

    const favCheck = screen.getByRole('checkbox', { name: 'Pokémon favoritado?' });
    expect(favCheck).toBeInTheDocument();
    userEvent.click(favCheck);

    const favIcon = screen.getByRole('img', { name: 'Pikachu is marked as favorite' });
    expect(favIcon).toHaveAttribute('src', '/star-icon.svg');
    expect(favIcon).toHaveAttribute('alt', 'Pikachu is marked as favorite');
  });
