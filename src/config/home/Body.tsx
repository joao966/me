import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { TypesWelcome, TypesWelcomeRedes } from 'src/@types';
import { Button, Typography } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const configCardWork = [
  {
    title: 'ATOM UI',
    text: 'Biblioteca pessoal de componenets - React, Storybook',
    chip: ['ReactJS', 'NextJS', 'TypeScript'],
    image: '/image/atom.png',
    reposity: 'https://github.com/joao966/atom-ui',
  },
  {
    title: 'APP DE RECEITAS',
    text: 'APP para gerenciamento de receitas - React, Redux',
    chip: ['ReactJS', 'Redux'],
    image: '/image/recipes.png',
    reposity: 'https://github.com/joao966/recipes-app',
  },
  {
    title: 'MANAGE USER',
    text: 'API para gerenciamento de usuários - Expres, Swagger, Node',
    chip: ['Expres', 'NodeJS', 'Expres', 'Swagger'],
    image: '/image/api.png',
    reposity: 'https://github.com/joao966/joao966-joaoOliveira-fullStackJSJr',
  },
];

export const configWelcomeRedes: TypesWelcomeRedes[] = [
  {
    text: 'Whatsapp',
    icon: <WhatsAppIcon sx={{ mr: 1 }} />,
    href: 'https://api.whatsapp.com/send?phone=5518997064566',
    sx: {
      variant: 'subtitle1',
      button: {
        display: 'flex',
        alignItems: 'start',
      },
      typography: {
        display: { xs: 'none', xp: 'flex' },
      },
    },
    renderCustom: (data) => {
      return (
        <Button sx={{ ...data?.sx?.button }}>
          {data?.icon}
          <Typography variant={data?.sx?.variant} gutterBottom sx={{ ...data?.sx?.typography }}>
            {data.text}
          </Typography>
        </Button>
      );
    },
  },
  {
    text: 'Github',
    href: 'https://github.com/joao966',
    icon: <GitHubIcon sx={{ mr: 1 }} />,
    sx: {
      variant: 'subtitle1',
      button: {
        display: 'flex',
        alignItems: 'start',
      },
      typography: {
        display: { xs: 'none', xp: 'flex' },
      },
    },
    renderCustom: (data) => {
      return (
        <Button sx={{ ...data?.sx?.button }}>
          {data?.icon}
          <Typography variant={data?.sx?.variant} gutterBottom sx={{ ...data?.sx?.typography }}>
            {data.text}
          </Typography>
        </Button>
      );
    },
  },
  {
    text: 'Linkedin',
    href: 'https://www.linkedin.com/in/jo%C3%A3odeoliveira/',
    icon: <LinkedInIcon sx={{ mr: 1 }} />,
    sx: {
      variant: 'subtitle1',
      button: {
        display: 'flex',
        alignItems: 'start',
      },
      typography: {
        display: { xs: 'none', xp: 'flex' },
      },
    },
    renderCustom: (data) => {
      return (
        <Button sx={{ ...data?.sx?.button }}>
          {data?.icon}
          <Typography variant={data?.sx?.variant} gutterBottom sx={{ ...data?.sx?.typography }}>
            {data.text}
          </Typography>
        </Button>
      );
    },
  },
];

export const configWelcome: TypesWelcome[] = [
  { text: 'SOBRE MIM', sx: { variant: 'h6' } },
  {
    text: 'Desenvolvedor Full Stack',
    icon: <WorkIcon sx={{ mr: 1 }} />,
    sx: { variant: 'subtitle1' },
  },
  {
    text: 'Maracaí - SP',
    icon: <LocationOnIcon sx={{ mr: 1 }} />,
    sx: { variant: 'subtitle1' },
  },
  {
    text: 'Busco através da tecnologia criar soluções que impactem positivamente a vida das pessoas!',
    sx: { variant: 'subtitle1' },
  },
];
