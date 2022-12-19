import React from 'react';
import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { configCardWork } from 'src/config/home/Body';
import Link from 'next/link';
import { MotionImage } from 'src/components/Motion/Image';

const Work = (_props) => {
  return (
    <Box id="portfolio">
      <Toolbar id="back-to-top-anchor" />
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
        <Typography variant="h3" component="h2" gutterBottom>
          {'projetos'.toUpperCase()}
        </Typography>
      </Box>

      <Container maxWidth={false}>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 2, sm: 2, md: 2 }} sx={{ mt: 12, mb: 12 }}>
          {configCardWork?.map((data, index: number) => {
            return (
              <Grid key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    py: 2,
                    px: 3,
                    height: '100%',
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        display: 'grid',
                        columnGap: 2,
                        rowGap: 1,

                        alignItems: 'center',
                      }}
                    >
                      <MotionImage
                        src={data?.image}
                        width={'100%'}
                        height={'50%'}
                        layout={'responsive'}
                      />
                    </Box>
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
                      <Typography variant="h5" gutterBottom mt={1}>
                        {data.title}
                      </Typography>
                      <Typography variant="subtitle1" gutterBottom>
                        {data.text}
                      </Typography>
                      <Box sx={{ b: 0 }}>
                        <Stack direction="row" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                          {data?.chip.map((chip, index: number) => {
                            return (
                              <Chip
                                key={index}
                                label={chip}
                                variant="outlined"
                                sx={{ mr: 1, mt: 1 }}
                              />
                            );
                          })}
                        </Stack>
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Button sx={{ color: 'white' }}>
                      <Link href={data.reposity} passHref>
                        <a style={{ color: 'white', textDecoration: 'none' }} target="_blank">
                          Repositório
                        </a>
                      </Link>
                    </Button>
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export { Work };
