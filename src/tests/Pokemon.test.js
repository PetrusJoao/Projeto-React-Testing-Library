import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

const linkName = 'More details';
const pathName = '/pokemons/25';

test('Teste se o link possui a URL /pokemons/<id>',
  () => {
    const { history } = renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: linkName });
    expect(moreDetails).toBeInTheDocument();
    userEvent.click(moreDetails);

    const { pathname } = history.location;
    expect(pathname).toBe(pathName);
  });

test('Teste se contem um atributo src com a URL da imagem',
  () => {
    const { history } = renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: linkName });
    expect(moreDetails).toBeInTheDocument();
    userEvent.click(moreDetails);

    const { pathname } = history.location;
    expect(pathname).toBe(pathName);

    const imgAlt = screen.getByAltText('Pikachu sprite');
    expect(imgAlt).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

test('Teste se contem o nome, tipo e peso corretos',
  () => {
    const { history } = renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: linkName });
    expect(moreDetails).toBeInTheDocument();
    userEvent.click(moreDetails);

    const { pathname } = history.location;
    expect(pathname).toBe(pathName);

    const dataTestName = screen.getByText('Pikachu');
    expect(dataTestName).toBeInTheDocument();
    const dataTestType = screen.getByText('Electric');
    expect(dataTestType).toBeInTheDocument();
    const dataTestWeight = screen.getByText('Average weight: 6.0 kg');
    expect(dataTestWeight).toBeInTheDocument();
  });

test('Teste se existe um ícone de estrela nos pokémons favoritados',
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
