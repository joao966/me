import { useState } from 'react';
import { Box, Card, Container, Toolbar, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { motion } from 'framer-motion';
import { MotionImage } from 'src/components/Motion/Image';
import { configWelcome, configWelcomeRedes } from 'src/config/home/Body';
import Link from 'next/link';
import { useRouter } from 'next/router';

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;


const renderComponent = (data) => {
  if (data?.renderCustom) return data?.renderCustom?.(data);
  return <Box></Box>;
};

const Welcome = () => {
  const { push } = useRouter();
  const [isInView, setIsInView] = useState(false);

  const handleClickItemRede = (href: string) => {
    push(href);
  };

  return (
    <Container maxWidth="lg" id="home">
      <Toolbar id="back-to-top-anchor" />
      <Grid container columnSpacing={{ xs: 2, sm: 4, md: 4 }} sx={{ mt: 5 }}>
        <Grid xs={12} md={4}>
          <Card sx={{ py: 2, px: 3, height: '100%' }}>
            <Box
              sx={{
                display: 'grid',
                columnGap: 2,
                rowGap: 1,
                gridTemplateColumns: {
                  xs: 'repeat(1, 1fr)',
                  xp: 'repeat(2, 1fr)',
                  md: 'repeat(1, 1fr)',
                },
              }}
            >
              <motion.div
                initial={false}
                animate={
                  true && isInView
                    ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                    : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                }
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
                onViewportEnter={() => setIsInView(true)}
              >
                <MotionImage
                  src={'https://avatars.githubusercontent.com/joao966'}
                  width={'100%'}
                  height={'100%'}
                  layout={'responsive'}
                />
              </motion.div>
              <Box
                sx={{
                  ml: 1,
                  display: { xs: 'none', xp: 'flex', sm: 'flex', md: 'none' },
                  flexDirection: 'column',
                }}
              >
                {configWelcome?.map((data, index: number) => (
                  <Box key={index} display={'flex'}>
                    {data?.icon}
                    <Typography variant={data?.sx?.variant} gutterBottom>
                      {data.text}
                    </Typography>
                  </Box>
                ))}
                {configWelcomeRedes?.map((data, index: number) => (
                  <Box key={index} display={'flex'}>
                    {data?.icon}
                    <Typography variant={data?.sx?.variant} gutterBottom>
                      {data.text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Card>
        </Grid>

        <Grid xs={12} md={8}>
          <Card
            sx={{ py: 2, px: 3, height: '100%', display: { xs: 'flex', xp: 'none', md: 'flex' } }}
          >
            <Box
              sx={{
                display: { xs: 'flex', xp: 'none', md: 'flex' },
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Box
                sx={{
                  display: 'grid',
                  columnGap: 2,
                  rowGap: 1,
                  gridTemplateColumns: {
                    xs: 'repeat(1, 1fr)',
                    sm: 'repeat(1, 1fr)',
                  },
                  alignItems: 'center',
                }}
              >
                {configWelcome?.map((data, index: number) => (
                  <Box key={index} display={'flex'}>
                    {data?.icon}
                    <Typography variant={data?.sx?.variant} gutterBottom>
                      {data.text}
                    </Typography>
                  </Box>
                ))}
              </Box>

              
              <Box display={'flex'} sx={{ justifyContent: 'space-between' }}>
                {configWelcomeRedes?.map((data, index: number) => (
                  <Link key={index} href={data?.href} passHref>
                    <a style={{ textDecoration: 'none' }} target="_blank">
                      {renderComponent(data)}
                    </a>
                  </Link>
                ))}
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export { Welcome };
