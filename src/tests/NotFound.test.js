import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

test('Teste se a página contém um heading h2 com o texto "Page requested not found 😭"',
  () => {
    const { history } = renderWithRouter(<App />);

    history.push('/pagina/que-nao-existe/');

    const homeTitle = screen.getByText('Page requested not found');
    expect(homeTitle).toBeInTheDocument();
  });

test('Teste se a página mostra a imagem "https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif"',
  () => {
    const { history } = renderWithRouter(<App />);

    history.push('/pagina/que-nao-existe/');

    const imgAlt = screen.getByAltText(
      'Pikachu crying because the page requested was not found',
    );
    expect(imgAlt).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
