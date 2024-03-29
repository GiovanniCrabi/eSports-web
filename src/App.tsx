import { useEffect, useState } from "react";

import axios from 'axios';

import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";

import * as Dialog from '@radix-ui/react-dialog';

import logoImg from './assets/logo-galaxy.svg';

import './styles/main.css';
import { CreateAdModal } from "./components/CreateAdModal";

export interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios('http://localhost:3333/games')
      .then(response => {
        setGames(response.data)
      })
  }, []);

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="Logo" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'> duo </span> está aqui.
      </h1>

      <div className='max-w-6xl grid grid-cols-6 gap-6 mt-16'>
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              title={game.title}
              img={game.bannerUrl}
              announcement={game._count.ads}
            />
          )
        })}
      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal/>

      </Dialog.Root>
    </div>
  )
}

export default App
